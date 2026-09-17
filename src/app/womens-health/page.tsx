import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "@/components/shared/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/shared/ScrollReveal";
import PageHero from "@/components/shared/PageHero";
import CinematicCard from "@/components/shared/CinematicCard";
import { healthTopics } from "@/data/healthTopics";
import { siteImages } from "@/data/images";

export const metadata: Metadata = {
  title: "Women's Health",
  description:
    "Explore women's health topics including wellness, reproductive health, mental health, nutrition, and preventive care.",
};

const topicImages = [
  siteImages.awarenessPortrait,
  siteImages.discussion,
  siteImages.support,
  siteImages.nutrition,
  siteImages.clinic,
  siteImages.gathering,
];

export default function WomensHealthPage() {
  return (
    <>
      <PageHero
        label="Women's Health"
        image={siteImages.community}
        imageAlt="Women's health and wellness"
        title={
          <>
            Your health,
            <br />
            <span className="text-[var(--accent)] italic" style={{ fontFamily: "var(--font-editorial)" }}>
              your priority.
            </span>
          </>
        }
      />

      <SectionWrapper background="charcoal">
        <ScrollReveal>
          <SectionLabel>Overview</SectionLabel>
          <h2 className="mb-8 max-w-2xl text-4xl text-[var(--fg)]" style={{ fontFamily: "var(--font-display)" }}>
            Holistic wellness for every woman
          </h2>
          <p className="max-w-3xl text-lg leading-relaxed text-[var(--fg-70)]">
            Women&apos;s health encompasses physical, emotional, and social wellbeing. Phakama
            provides education and community support to help women make informed health decisions
            at every stage of life.
          </p>
        </ScrollReveal>
      </SectionWrapper>

      <section className="section-padding bg-[var(--bg-alt)]">
        <div className="container-luxury">
          <ScrollReveal className="mb-12">
            <SectionLabel>Topics</SectionLabel>
            <h2 className="text-4xl text-[var(--fg)]" style={{ fontFamily: "var(--font-display)" }}>
              Explore health topics
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {healthTopics.map((topic, i) => (
              <ScrollReveal key={topic.title} delay={i * 0.08}>
                <CinematicCard
                  image={topicImages[i % topicImages.length]}
                  category="Women's Health"
                  title={topic.title}
                  description={topic.content}
                  href="/contact"
                  height="h-[420px]"
                  linkLabel="Learn More"
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <SectionWrapper background="charcoal">
        <div className="text-center">
          <ScrollReveal>
            <h2 className="mb-6 text-4xl text-[var(--fg)]" style={{ fontFamily: "var(--font-display)" }}>
              Join a wellness workshop
            </h2>
            <p className="mx-auto mb-10 max-w-lg text-[var(--fg-60)]">
              Contact us to learn about upcoming workshops and health talks in your area.
            </p>
            <Link
              href="/contact"
              className="inline-block rounded bg-[var(--accent)] px-10 py-4 text-sm font-semibold text-white hover:bg-[var(--accent-hover)]"
            >
              Get in Touch
            </Link>
          </ScrollReveal>
        </div>
      </SectionWrapper>
    </>
  );
}
