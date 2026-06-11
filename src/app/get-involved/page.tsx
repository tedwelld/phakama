import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "@/components/shared/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/shared/ScrollReveal";
import PageHero from "@/components/shared/PageHero";
import SiteImage from "@/components/shared/SiteImage";
import { waysToHelp } from "@/data/getInvolved";
import { siteConfig } from "@/data/siteConfig";
import { siteImages } from "@/data/images";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Volunteer, partner, donate, or become a community ambassador with Phakama Women's Organization.",
};

export default function GetInvolvedPage() {
  const waHref = `https://wa.me/${siteConfig.whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;

  return (
    <>
      <PageHero
        label="Get Involved"
        image={siteImages.hero}
        imageAlt="Get involved with Phakama"
        title={
          <>
            Be part of
            <br />
            <span className="text-[var(--accent)] italic" style={{ fontFamily: "var(--font-editorial)" }}>
              the change.
            </span>
          </>
        }
      />

      <SectionWrapper background="charcoal">
        <ScrollReveal>
          <SectionLabel>Ways to Help</SectionLabel>
          <h2 className="mb-8 max-w-2xl text-4xl text-[var(--fg)]" style={{ fontFamily: "var(--font-display)" }}>
            How you can support our mission
          </h2>
          <p className="max-w-3xl text-lg leading-relaxed text-[var(--fg-70)]">
            Every contribution — whether time, partnership, or resources — helps us reach more
            women with life-saving health information and community support.
          </p>
        </ScrollReveal>
      </SectionWrapper>

      <SectionWrapper background="dark">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {waysToHelp.map((way, i) => (
            <ScrollReveal key={way.title} delay={i * 0.08}>
              <div className="h-full rounded-sm border border-[var(--fg-10)] p-8 transition-colors hover:border-[var(--accent)]/40">
                <h3 className="mb-4 text-xl text-[var(--fg)]" style={{ fontFamily: "var(--font-display)" }}>
                  {way.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--fg-60)]">{way.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </SectionWrapper>

      <section className="relative py-24">
        <SiteImage
          src={siteImages.programs}
          alt="Volunteer and partner with Phakama"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 container-luxury text-center">
          <ScrollReveal>
            <h2 className="mb-6 text-4xl text-white md:text-5xl" style={{ fontFamily: "var(--font-display)" }}>
              Ready to partner with us?
            </h2>
            <p className="mx-auto mb-10 max-w-lg text-white/70">
              Reach out to discuss volunteering, partnerships, or hosting a health talk.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="min-w-[200px] rounded bg-[var(--accent)] px-10 py-4 text-sm font-semibold text-white hover:bg-[var(--accent-hover)]"
              >
                Contact Us
              </Link>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-[200px] rounded border border-white/40 px-10 py-4 text-sm text-white hover:border-white hover:bg-white/5"
              >
                WhatsApp
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
