import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "@/components/shared/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/shared/ScrollReveal";
import PageHero from "@/components/shared/PageHero";
import SiteImage from "@/components/shared/SiteImage";
import { outreachActivities, programs } from "@/data/programs";
import { siteImages } from "@/data/images";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Discover Phakama's awareness campaigns, wellness workshops, community outreach, and volunteer programs.",
};

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        label="Programs"
        image={siteImages.programs}
        imageAlt="Phakama programs"
        title={
          <>
            Programs that
            <br />
            <span className="text-[var(--accent)] italic" style={{ fontFamily: "var(--font-editorial)" }}>
              reach communities.
            </span>
          </>
        }
      />

      <SectionWrapper background="charcoal">
        <ScrollReveal className="mb-12">
          <SectionLabel>What We Offer</SectionLabel>
          <h2 className="text-4xl text-[var(--fg)]" style={{ fontFamily: "var(--font-display)" }}>
            Our core programs
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {programs.map((p, i) => (
            <ScrollReveal key={p.slug} delay={i * 0.08}>
              <div className="overflow-hidden rounded-sm">
                <div className="relative h-48">
                  <SiteImage src={p.image} alt={p.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                  <div className={`absolute inset-0 ${p.gradient} mix-blend-multiply opacity-50`} />
                </div>
                <div className="border border-t-0 border-[var(--fg-10)] p-8">
                  <p className="mb-2 text-xs tracking-widest text-[var(--accent)] uppercase">{p.category}</p>
                  <h3 className="mb-4 text-2xl text-[var(--fg)]" style={{ fontFamily: "var(--font-display)" }}>
                    {p.title}
                  </h3>
                  <p className="mb-6 text-sm leading-relaxed text-[var(--fg-60)]">{p.description}</p>
                  <Link href={p.href} className="text-sm text-[var(--accent)] hover:text-[var(--accent-hover)]">
                    Learn more →
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper background="dark">
        <ScrollReveal className="mb-12">
          <SectionLabel>Outreach</SectionLabel>
          <h2 className="text-4xl text-[var(--fg)]" style={{ fontFamily: "var(--font-display)" }}>
            Community activities
          </h2>
        </ScrollReveal>
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {outreachActivities.map((activity, i) => (
            <ScrollReveal key={activity} delay={i * 0.05}>
              <li className="flex gap-3 rounded-sm border border-[var(--fg-10)] p-5">
                <i className="pi pi-circle-fill mt-1.5 text-[8px] text-[var(--accent)]" />
                <span className="text-[var(--fg-70)]">{activity}</span>
              </li>
            </ScrollReveal>
          ))}
        </ul>
      </SectionWrapper>

      <section className="relative py-24">
        <SiteImage
          src={siteImages.community}
          alt="Community health talk"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 container-luxury text-center">
          <ScrollReveal>
            <h2 className="mb-6 text-4xl text-white md:text-5xl" style={{ fontFamily: "var(--font-display)" }}>
              Bring Phakama to your community
            </h2>
            <p className="mx-auto mb-10 max-w-lg text-white/70">
              Invite us for a health talk at your school, church, or workplace.
            </p>
            <Link
              href="/contact"
              className="inline-block rounded bg-[var(--accent)] px-10 py-4 text-sm font-semibold text-white hover:bg-[var(--accent-hover)]"
            >
              Request a Health Talk
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
