import nextEnv from "@next/env";
import { z } from "zod";

// An explicit recipient list is required: running this without arguments sends nothing.
nextEnv.loadEnvConfig(process.cwd());
const recipients = [...new Set(process.argv.slice(2).flatMap((value) => value.split(",")).map((value) => value.trim()))];
if (!recipients.length || recipients.some((address) => !z.email().safeParse(address).success)) {
  console.error("Usage: node scripts/test-smtp.mjs recipient@example.com [second@example.com]");
  process.exit(1);
}

const { transporter, MAIL_FROM, REF_LINK, LOGO_ATTACHMENT } = await import("../src/lib/mailer.ts");

try {
  await transporter.verify();
  console.log("SMTP connection, TLS and authentication verified.");

  for (const recipient of recipients) {
    try {
      const result = await transporter.sendMail({
        from: MAIL_FROM,
        to: recipient,
        subject: "Phakama website — SMTP delivery test",
        text: `This is the SMTP test requested by the Phakama site administrator.\n\nIt was sent using the website's configured mail transport. No action is required.\n\n${REF_LINK}`,
        html: `<div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;padding:24px;color:#222;"><img src="cid:${LOGO_ATTACHMENT.cid}" width="180" height="180" alt="Phakama Women's Organization — Stronger Together" /><h1 style="font-size:24px;">Website email test</h1><p>This is the SMTP test requested by the Phakama site administrator.</p><p>It was sent using the website's configured mail transport. No action is required.</p><p>Phakama Women's Organization<br />Stronger Together</p></div>`,
        attachments: [LOGO_ATTACHMENT],
      });
      console.log(JSON.stringify({ recipient, accepted: result.accepted, rejected: result.rejected, messageId: result.messageId, response: result.response }));
      if (!result.accepted.length || result.rejected.length) process.exitCode = 1;
    } catch (error) {
      console.error(JSON.stringify({ recipient, code: error.code, responseCode: error.responseCode, command: error.command }));
      process.exitCode = 1;
    }
  }
} catch (error) {
  console.error(JSON.stringify({ stage: "SMTP verification", code: error.code, responseCode: error.responseCode, command: error.command }));
  process.exitCode = 1;
} finally {
  transporter.close();
}
