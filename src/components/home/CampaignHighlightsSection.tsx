import Link from "next/link";
import SectionWrapper from "@/components/shared/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/shared/ScrollReveal";
import InitiativeStories from "@/components/shared/InitiativeStories";

export default function CampaignHighlightsSection() {
  return (
    <SectionWrapper background="dark">
      <ScrollReveal className="mb-12 text-center">
        <SectionLabel>Our Community Stories</SectionLabel>
        <h2
          className="mt-4 text-4xl text-[var(--fg)] md:text-5xl"
          style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
        >
          Small actions. Shared purpose.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-[var(--fg-60)]">
          Annual meetings, cleaner shared spaces and conversations about wellbeing in
          Hwange, and Matabeleland North.
        </p>
      </ScrollReveal>

      <InitiativeStories />
      <div className="mt-10 flex flex-wrap justify-center gap-6">
        <Link href="/updates" className="rounded bg-[var(--accent)] px-6 py-3 text-sm text-white hover:bg-[var(--accent-hover)]">All community updates →</Link>
        <Link href="/gallery" className="rounded border border-[var(--fg-20)] px-6 py-3 text-sm text-[var(--fg)] hover:border-[var(--accent)]">View our photo gallery →</Link>
      </div>
    </SectionWrapper>
  );
}
