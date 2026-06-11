import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "@/components/shared/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/shared/ScrollReveal";
import PageHero from "@/components/shared/PageHero";
import DisclaimerBanner from "@/components/shared/DisclaimerBanner";
import { mythsAndFacts, selfExamSteps, symptoms } from "@/data/awareness";
import { siteImages } from "@/data/images";

export const metadata: Metadata = {
  title: "Breast Cancer Awareness",
  description:
    "Learn about breast cancer signs, symptoms, myths vs facts, and self-exam guidance from Phakama Women's Organization.",
};

export default function BreastCancerAwarenessPage() {
  return (
    <>
      <PageHero
        label="Awareness"
        image={siteImages.awareness}
        imageAlt="Breast cancer awareness"
        title={
          <>
            Breast Cancer
            <br />
            <span className="text-[var(--accent)] italic" style={{ fontFamily: "var(--font-editorial)" }}>
              Awareness.
            </span>
          </>
        }
      />

      <DisclaimerBanner />

      <SectionWrapper background="charcoal">
        <ScrollReveal>
          <SectionLabel>Understanding</SectionLabel>
          <h2 className="mb-8 max-w-2xl text-4xl text-[var(--fg)]" style={{ fontFamily: "var(--font-display)" }}>
            Why awareness matters
          </h2>
          <p className="max-w-3xl text-lg leading-relaxed text-[var(--fg-70)]">
            Early detection saves lives. Understanding the signs and symptoms of breast cancer,
            knowing your body, and seeking professional care when something changes are essential
            steps every woman can take.
          </p>
        </ScrollReveal>
      </SectionWrapper>

      <SectionWrapper background="dark">
        <ScrollReveal className="mb-12">
          <SectionLabel>Signs &amp; Symptoms</SectionLabel>
          <h2 className="text-4xl text-[var(--fg)]" style={{ fontFamily: "var(--font-display)" }}>
            What to watch for
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {symptoms.map((s, i) => (
            <ScrollReveal key={s} delay={i * 0.06}>
              <div className="flex gap-4 rounded-sm border border-[var(--fg-10)] p-6">
                <span className="text-[var(--accent)]">
                  <i className="pi pi-check-circle" />
                </span>
                <p className="text-[var(--fg-70)]">{s}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper background="charcoal">
        <ScrollReveal className="mb-12">
          <SectionLabel>Myths vs Facts</SectionLabel>
          <h2 className="text-4xl text-[var(--fg)]" style={{ fontFamily: "var(--font-display)" }}>
            Separating fact from fiction
          </h2>
        </ScrollReveal>
        <div className="space-y-8">
          {mythsAndFacts.map((item, i) => (
            <ScrollReveal key={item.myth} delay={i * 0.08}>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-sm border border-red-400/20 bg-red-400/5 p-6">
                  <p className="mb-2 text-xs tracking-widest text-red-400 uppercase">Myth</p>
                  <p className="text-[var(--fg-70)]">{item.myth}</p>
                </div>
                <div className="rounded-sm border border-[var(--accent)]/20 bg-[var(--accent)]/5 p-6">
                  <p className="mb-2 text-xs tracking-widest text-[var(--accent)] uppercase">Fact</p>
                  <p className="text-[var(--fg-70)]">{item.fact}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper background="dark">
        <ScrollReveal className="mb-12">
          <SectionLabel>Self-Awareness</SectionLabel>
          <h2 className="text-4xl text-[var(--fg)]" style={{ fontFamily: "var(--font-display)" }}>
            Breast self-exam steps
          </h2>
        </ScrollReveal>
        <ol className="space-y-4">
          {selfExamSteps.map((step, i) => (
            <ScrollReveal key={step} delay={i * 0.06}>
              <li className="flex gap-4 rounded-sm border border-[var(--fg-10)] p-6">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[var(--accent)] text-sm font-semibold text-white">
                  {i + 1}
                </span>
                <p className="text-[var(--fg-70)]">{step}</p>
              </li>
            </ScrollReveal>
          ))}
        </ol>
      </SectionWrapper>

      <SectionWrapper background="charcoal">
        <div className="text-center">
          <ScrollReveal>
            <h2 className="mb-6 text-4xl text-[var(--fg)]" style={{ fontFamily: "var(--font-display)" }}>
              Need support or have questions?
            </h2>
            <p className="mx-auto mb-10 max-w-lg text-[var(--fg-60)]">
              Our team is here to provide information and connect you with resources.
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
    </>
  );
}
