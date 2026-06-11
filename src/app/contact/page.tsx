import type { Metadata } from "next";
import SectionWrapper from "@/components/shared/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/shared/ScrollReveal";
import ContactForm from "@/components/forms/ContactForm";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Phakama Women's Organization via WhatsApp, email, or our contact form.",
};

export default function ContactPage() {
  const waHref = `https://wa.me/${siteConfig.whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;

  return (
    <>
      <div className="h-20 bg-[var(--bg)] transition-colors duration-400" />

      <SectionWrapper background="charcoal">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <ScrollReveal>
            <SectionLabel>Get in Touch</SectionLabel>
            <h1
              className="mb-8 text-5xl leading-tight text-[var(--fg)] md:text-6xl"
              style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
            >
              We&apos;re here
              <br />
              <span className="text-[var(--accent)] italic" style={{ fontFamily: "var(--font-editorial)" }}>
                to help.
              </span>
            </h1>
            <p className="mb-10 max-w-md leading-relaxed text-[var(--fg-60)]">
              Whether you have questions about breast cancer awareness, want to volunteer, or
              would like to invite us for a health talk — reach out and we will respond within
              24 hours.
            </p>

            <div className="space-y-4">
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-sm border border-[var(--accent)]/30 p-5 transition-all hover:border-[var(--accent)] hover:bg-[var(--accent)]/5"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#25D366]">
                  <i className="pi pi-whatsapp text-white" style={{ fontSize: "20px" }} />
                </div>
                <div>
                  <p className="font-medium text-[var(--fg)]">Start a WhatsApp Chat</p>
                  <p className="text-sm text-[var(--fg-50)]">Fastest response — usually within minutes</p>
                </div>
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-4 rounded-sm border border-[var(--fg-10)] p-5 transition-all hover:border-[var(--fg-30)]"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[var(--fg-10)]">
                  <i className="pi pi-envelope" style={{ color: "var(--accent)", fontSize: "18px" }} />
                </div>
                <div>
                  <p className="font-medium text-[var(--fg)]">Send an Email</p>
                  <p className="text-sm text-[var(--fg-50)]">{siteConfig.email}</p>
                </div>
              </a>

              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-4 rounded-sm border border-[var(--fg-10)] p-5 transition-all hover:border-[var(--fg-30)]"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[var(--fg-10)]">
                  <i className="pi pi-phone" style={{ color: "var(--accent)", fontSize: "18px" }} />
                </div>
                <div>
                  <p className="font-medium text-[var(--fg)]">Call Us</p>
                  <p className="text-sm text-[var(--fg-50)]">{siteConfig.phoneDisplay}</p>
                </div>
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.15}>
            <div className="rounded-sm border border-[var(--fg-10)] p-8 lg:mt-8">
              <h2 className="mb-6 text-2xl text-[var(--fg)]" style={{ fontFamily: "var(--font-display)" }}>
                Send a message
              </h2>
              <ContactForm />
            </div>
          </ScrollReveal>
        </div>
      </SectionWrapper>

      <SectionWrapper background="dark">
        <ScrollReveal>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            <div>
              <p className="mb-3 text-xs tracking-widest text-[var(--accent)] uppercase">Location</p>
              <p className="text-[var(--fg)]">{siteConfig.location}</p>
            </div>
            <div>
              <p className="mb-3 text-xs tracking-widest text-[var(--accent)] uppercase">Response Time</p>
              <p className="text-sm text-[var(--fg-70)]">
                We respond to all enquiries within 24 hours. WhatsApp is fastest.
              </p>
            </div>
            <div>
              <p className="mb-3 text-xs tracking-widest text-[var(--accent)] uppercase">Follow Us</p>
              <div className="flex gap-4">
                <a href={siteConfig.socials.facebook} target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--fg-50)] hover:text-[var(--accent)]">
                  Facebook
                </a>
                <a href={siteConfig.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--fg-50)] hover:text-[var(--accent)]">
                  Instagram
                </a>
                <a href={siteConfig.socials.x} target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--fg-50)] hover:text-[var(--accent)]">
                  X
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </SectionWrapper>
    </>
  );
}
