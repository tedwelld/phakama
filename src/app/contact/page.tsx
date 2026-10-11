import CommunityInvitation from "@/components/shared/CommunityInvitation";
import { pageMetadata } from "@/lib/seo";
import SectionWrapper from "@/components/shared/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/shared/ScrollReveal";
import ContactForm from "@/components/forms/ContactForm";
import { siteConfig } from "@/data/siteConfig";

export const metadata = pageMetadata("/contact");

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
              Join a community meeting, support a clean-up campaign, discuss women&apos;s wellbeing or partner with Phakama. Tell us where you are in Hwange district and how you would like to get involved.
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
                  <p className="text-sm text-[var(--fg-50)]">Ask about activities and ways to take part</p>
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
              <p className="mb-3 text-xs tracking-widest text-[var(--accent)] uppercase">Plan an Activity</p>
              <p className="text-sm text-[var(--fg-70)]">
                Share your location, the activity you have in mind and any proposed dates so we can discuss the next steps.
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
      <CommunityInvitation title="Every connection starts somewhere." href="/programs" label="See what brings us together">
        <p>You do not need a finished proposal to get in touch. Whether you are a woman looking to connect with the group, a neighbour interested in community action or an organisation exploring a partnership, we welcome the conversation.</p>
      </CommunityInvitation>
    </>
  );
}
