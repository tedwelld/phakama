import type { Metadata } from "next";
import Link from "next/link";
import CommunityUpdates from "@/components/shared/CommunityUpdates";
import SectionWrapper from "@/components/shared/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Awareness & Community Updates",
  description: "Reported awareness campaigns, women's health initiatives, and community stories from Dete, Hwange, and Matabeleland North.",
  alternates: { canonical: "/updates" },
};

export default function UpdatesPage() {
  return (
    <>
      <section className="bg-[var(--bg-alt)] pt-36 pb-16 md:pt-44">
        <div className="container-luxury">
          <SectionLabel>Dete · Hwange · Matabeleland North</SectionLabel>
          <h1 className="mt-4 max-w-4xl font-display text-5xl text-[var(--fg)] md:text-7xl">Awareness in action.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--fg-70)]">Stories of health education, community support, and local campaigns in and around Dete, Zimbabwe.</p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--fg-60)]">Explore Phakama in the news alongside initiatives led by others in the region. Each story links to its source and shows when it was reported.</p>
        </div>
      </section>
      <SectionWrapper background="charcoal">
        <h2 className="mb-10 font-display text-3xl text-[var(--fg)]">Community reports, 2023–2026</h2>
        <CommunityUpdates />
        <div className="mt-12 flex flex-wrap gap-6">
          <Link href="/gallery" className="rounded bg-[var(--accent)] px-6 py-3 text-sm text-white hover:bg-[var(--accent-hover)]">Explore the photo gallery</Link>
          <Link href="/contact" className="rounded border border-[var(--fg-20)] px-6 py-3 text-sm text-[var(--fg)] hover:border-[var(--accent)]">Ask about upcoming activities</Link>
        </div>
      </SectionWrapper>
    </>
  );
}
