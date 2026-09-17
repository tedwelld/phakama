import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { transporter, MAIL_FROM, ADMIN_EMAILS, REF_LINK, LOGO_ATTACHMENT } from "@/lib/mailer";
import { siteConfig } from "@/data/siteConfig";

export const runtime = "nodejs";

const ContactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(200),
  email: z.string().trim().email("Valid email is required").max(254),
  phone: z.string().trim().max(50).optional(),
  subject: z.string().trim().min(1, "Subject is required").max(200).regex(/^[^\r\n]+$/, "Subject must be a single line"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(10_000),
});

type ContactData = z.infer<typeof ContactSchema>;

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  })[character]!);
}

function logMailFailure(label: string, error: unknown) {
  const details = error as { code?: string; responseCode?: number } | null;
  console.error(label, { code: details?.code ?? "UNKNOWN", responseCode: details?.responseCode });
}

function emailShell(title: string, body: string) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title}</title>
</head>
<body style="margin:0;padding:0;background:#f4f0e8;font-family:Georgia,serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f0e8;padding:40px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">
        <tr>
          <td style="background:#0f1419;padding:32px 40px;text-align:center;">
            <img src="cid:${LOGO_ATTACHMENT.cid}" width="180" height="180" alt="Phakama Women's Organization — Stronger Together" style="display:block;margin:0 auto 20px;background:#ffffff;border:0;" />
            <p style="margin:0;color:#0d9488;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;font-family:Arial,sans-serif;">
              ${siteConfig.location}
            </p>
            <h1 style="margin:8px 0 0;color:#f0ebe3;font-size:26px;font-weight:normal;font-family:Georgia,serif;">
              ${siteConfig.name}
            </h1>
            <p style="margin:6px 0 0;color:#0d9488;font-size:12px;font-style:italic;font-family:Georgia,serif;">
              ${siteConfig.tagline}
            </p>
          </td>
        </tr>
        <tr>
          <td style="background:#ffffff;padding:40px;">
            ${body}
          </td>
        </tr>
        <tr>
          <td style="background:#0f1419;padding:24px 40px;text-align:center;">
            <p style="margin:0;color:#f0ebe3;font-size:11px;font-family:Arial,sans-serif;opacity:0.5;">
              ${siteConfig.name} · ${siteConfig.location}
            </p>
            <p style="margin:8px 0 0;font-size:11px;font-family:Arial,sans-serif;">
              <a href="${escapeHtml(REF_LINK)}" style="color:#0d9488;text-decoration:none;">phakamawomens.org</a>
            </p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function adminEmailBody(data: ContactData) {
  const rows: [string, string][] = [
    ["Name", data.name],
    ["Email", data.email],
    ["Phone", data.phone || "Not provided"],
    ["Subject", data.subject],
    ["Message", data.message],
  ];

  const tableRows = rows
    .map(
      ([label, value]) =>
        `<tr>
          <td style="padding:10px 0;border-bottom:1px solid #eee;color:#888;font-size:12px;text-transform:uppercase;letter-spacing:0.1em;width:120px;vertical-align:top;">${label}</td>
          <td style="padding:10px 0;border-bottom:1px solid #eee;color:#333;font-size:14px;white-space:pre-wrap;">${escapeHtml(value)}</td>
        </tr>`
    )
    .join("");

  return emailShell(
    "New Contact Message",
    `<h2 style="margin:0 0 24px;color:#1a1a1a;font-size:22px;font-family:Georgia,serif;">New Contact Message</h2>
     <table width="100%" cellpadding="0" cellspacing="0">${tableRows}</table>`
  );
}

function autoReplyBody(data: ContactData) {
  return emailShell(
    "Thank you for contacting Phakama",
    `<h2 style="margin:0 0 16px;color:#1a1a1a;font-size:22px;font-family:Georgia,serif;">Thank you, ${escapeHtml(data.name)}</h2>
     <p style="margin:0 0 16px;color:#555;font-size:15px;line-height:1.6;font-family:Arial,sans-serif;">
       We have received your message regarding <strong>${escapeHtml(data.subject)}</strong> and will respond within 24 hours.
     </p>
     <p style="margin:0;color:#888;font-size:13px;font-family:Arial,sans-serif;">
       For urgent enquiries, reach us on WhatsApp at ${siteConfig.phoneDisplay}.
     </p>`
  );
}

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
  }

  try {
    const parsed = ContactSchema.safeParse(body);

    if (!parsed.success) {
      const firstError = parsed.error.issues[0]?.message ?? "Invalid form data";
      return NextResponse.json({ error: firstError }, { status: 400 });
    }

    const data = parsed.data;

    const delivery = await transporter.sendMail({
      from: MAIL_FROM,
      to: ADMIN_EMAILS,
      replyTo: data.email,
      subject: `[Phakama Contact] ${data.subject}`,
      html: adminEmailBody(data),
      text: `New contact message\n\nName: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone || "Not provided"}\nSubject: ${data.subject}\n\n${data.message}\n\n${REF_LINK}`,
      attachments: [LOGO_ATTACHMENT],
    });

    if (!delivery.accepted.length) throw new Error("No admin recipient accepted the message");
    if (delivery.rejected.length) console.warn("Contact email: some admin recipients were rejected", { count: delivery.rejected.length });

    // The enquiry has reached an admin. A failed acknowledgement must not cause
    // the visitor to resubmit and send a duplicate enquiry.
    try {
      await transporter.sendMail({
        from: MAIL_FROM,
        to: data.email,
        replyTo: siteConfig.email,
        subject: "Thank you for contacting Phakama Women's Organization",
        html: autoReplyBody(data),
        text: `Thank you, ${data.name}.\n\nWe have received your message regarding ${data.subject} and will respond within 24 hours.\n\nFor urgent enquiries, reach us on WhatsApp at ${siteConfig.phoneDisplay}.\n\n${REF_LINK}`,
        attachments: [LOGO_ATTACHMENT],
      });
    } catch (error) {
      logMailFailure("Contact acknowledgement failed after admin delivery", error);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    logMailFailure("Contact form email failed", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again or contact us directly." },
      { status: 500 }
    );
  }
}
