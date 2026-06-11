import Link from "next/link";
import SectionWrapper from "@/components/shared/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { campaigns } from "@/data/programs";

export default function CampaignHighlightsSection() {
  return (
    <SectionWrapper background="dark">
      <ScrollReveal className="mb-12 text-center">
        <SectionLabel>Campaign Highlights</SectionLabel>
        <h2
          className="mt-4 text-4xl text-[var(--fg)] md:text-5xl"
          style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
        >
          Making a difference together
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-[var(--fg-60)]">
          Join our awareness campaigns and community health initiatives throughout the year.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {campaigns.map((c, i) => (
          <ScrollReveal key={c.title} delay={i * 0.1}>
            <div className="rounded-sm border border-[var(--fg-10)] p-8 transition-colors hover:border-[var(--accent)]/40">
              <h3 className="mb-4 text-xl text-[var(--fg)]" style={{ fontFamily: "var(--font-display)" }}>
                {c.title}
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-[var(--fg-60)]">{c.description}</p>
              <Link href={c.href} className="text-sm text-[var(--accent)] hover:text-[var(--accent-hover)]">
                Learn more →
              </Link>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
