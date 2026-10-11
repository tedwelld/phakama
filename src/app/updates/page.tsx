import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import InitiativeStories from "@/components/shared/InitiativeStories";
import CommunityUpdates from "@/components/shared/CommunityUpdates";
import SectionWrapper from "@/components/shared/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";

export const metadata = pageMetadata("/updates");

export default function UpdatesPage() {
  return (
    <>
      <section className="bg-[var(--bg-alt)] pt-36 pb-16 md:pt-44">
        <div className="container-luxury">
          <SectionLabel>Dete · Hwange · Matabeleland North</SectionLabel>
          <h1 className="mt-4 max-w-4xl font-display text-5xl text-[var(--fg)] md:text-7xl">Community in action.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--fg-70)]">Discover how Phakama brings women together through annual meetings, clean-up campaigns and awareness activities across Hwange district.</p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--fg-60)]">Start with the initiatives at the heart of our organisation, then explore published reports from Phakama and the wider region.</p>
        </div>
      </section>
      <SectionWrapper background="charcoal">
        <h2 className="mb-10 font-display text-3xl text-[var(--fg)]">Our initiatives, our shared purpose</h2>
        <InitiativeStories expanded />
        <h2 className="mt-20 mb-6 font-display text-3xl text-[var(--fg)]">From the regional press</h2>
        <p className="mb-10 max-w-2xl leading-relaxed text-[var(--fg-70)]">These independently published reports include work by other organisations. Each report identifies its source and publication date.</p>
        <CommunityUpdates />
        <div className="mt-12 flex flex-wrap gap-6">
          <Link href="/gallery" className="rounded bg-[var(--accent)] px-6 py-3 text-sm text-white hover:bg-[var(--accent-hover)]">Explore the photo gallery</Link>
          <Link href="/contact" className="rounded border border-[var(--fg-20)] px-6 py-3 text-sm text-[var(--fg)] hover:border-[var(--accent)]">Ask about upcoming activities</Link>
        </div>
      </SectionWrapper>
    </>
  );
}
