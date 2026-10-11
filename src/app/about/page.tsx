import CommunityInvitation from "@/components/shared/CommunityInvitation";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import SectionWrapper from "@/components/shared/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/shared/ScrollReveal";
import PageHero from "@/components/shared/PageHero";
import SiteImage from "@/components/shared/SiteImage";
import { values } from "@/data/getInvolved";
import { siteImages } from "@/data/images";

export const metadata = pageMetadata("/about");

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About Phakama"
        image={siteImages.community}
        imageAlt="Phakama community"
        title={
          <>
            Rooted in
            <br />
            <span className="text-[var(--accent)] italic" style={{ fontFamily: "var(--font-editorial)" }}>
              community.
            </span>
          </>
        }
      />

      <SectionWrapper background="charcoal">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <ScrollReveal>
            <SectionLabel>Our Story</SectionLabel>
            <h2 className="mb-8 text-4xl text-[var(--fg)]" style={{ fontFamily: "var(--font-display)" }}>
              Women at the heart of community
            </h2>
            <p className="mb-6 leading-relaxed text-[var(--fg-70)]">
              Phakama Women&apos;s Organization is a community-based group in Hwange district, Zimbabwe. Our purpose is to support women&apos;s wellbeing through connection, participation and care for the communities where women live.
            </p>
            <p className="leading-relaxed text-[var(--fg-60)]">
              Our initiatives include annual meetings across the district, clean-up campaigns and awareness activities. Breast cancer awareness remains part of this wider commitment: a community where women feel informed, included and supported.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.1}>
            <div className="relative h-[420px] overflow-hidden rounded-sm">
              <SiteImage
                src={siteImages.gathering}
                alt="Community members gathered for a conversation"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </ScrollReveal>
        </div>
      </SectionWrapper>

      <SectionWrapper background="dark">
        <div className="grid gap-6 md:grid-cols-2">
          <ScrollReveal>
            <div className="rounded-sm border border-[var(--accent)]/30 p-8">
              <SectionLabel>Mission</SectionLabel>
              <h2 className="mb-4 text-2xl text-[var(--fg)]" style={{ fontFamily: "var(--font-display)" }}>
                Our Mission
              </h2>
              <p className="leading-relaxed text-[var(--fg-60)]">
                To bring women together, support their wellbeing and encourage active participation through community meetings, practical local action and awareness.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="rounded-sm border border-[var(--purple)]/30 p-8">
              <SectionLabel>Vision</SectionLabel>
              <h2 className="mb-4 text-2xl text-[var(--fg)]" style={{ fontFamily: "var(--font-display)" }}>
                Our Vision
              </h2>
              <p className="leading-relaxed text-[var(--fg-60)]">
                A connected Hwange district where women feel valued, have a voice in community life and can find support for their wellbeing.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </SectionWrapper>

      <SectionWrapper background="charcoal">
        <ScrollReveal className="mb-14">
          <SectionLabel>Our Values</SectionLabel>
          <h2 className="max-w-lg text-4xl text-[var(--fg)] md:text-5xl" style={{ fontFamily: "var(--font-display)" }}>
            What guides our work
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => (
            <ScrollReveal key={v.title} delay={i * 0.08}>
              <div className="border-l-2 border-[var(--accent)] pl-8">
                <h3 className="mb-3 text-xl text-[var(--fg)]" style={{ fontFamily: "var(--font-display)" }}>
                  {v.title}
                </h3>
                <p className="leading-relaxed text-[var(--fg-60)]">{v.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper background="dark">
        <div className="text-center">
          <ScrollReveal>
            <h2 className="mb-6 text-4xl text-[var(--fg)] md:text-5xl" style={{ fontFamily: "var(--font-display)" }}>
              Join our mission
            </h2>
            <p className="mx-auto mb-10 max-w-lg text-[var(--fg-60)]">
              Whether you want to volunteer, partner, or learn more — we would love to hear from you.
            </p>
            <Link
              href="/contact"
              className="inline-block rounded bg-[var(--accent)] px-10 py-4 text-sm font-semibold text-white hover:bg-[var(--accent-hover)]"
            >
              Contact Us
            </Link>
          </ScrollReveal>
        </div>
      </SectionWrapper>
      <CommunityInvitation title="Local roots. A shared purpose." href="/updates" label="Explore our community stories">
        <p>Our work connects three everyday priorities: bringing women together, caring for shared surroundings and keeping wellbeing in the conversation. Annual meetings, clean-up campaigns and awareness activities give that purpose a practical expression.</p>
      </CommunityInvitation>
    </>
  );
}
