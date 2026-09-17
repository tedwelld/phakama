import type { Metadata } from "next";
import Link from "next/link";
import PhotoGallery from "@/components/gallery/PhotoGallery";
import SectionWrapper from "@/components/shared/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Community Gallery",
  description: "Explore Phakama's collection of community gatherings, awareness activities, and moments together.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <section className="bg-[var(--bg-alt)] pt-36 pb-16 md:pt-44">
        <div className="container-luxury">
          <SectionLabel>Our community in pictures</SectionLabel>
          <h1 className="mt-4 text-5xl text-[var(--fg)] md:text-7xl font-display">Moments that bring us together.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--fg-70)]">Faces, conversations, and shared moments from our community photo collection. Explore awareness activities and the everyday connections at the heart of Phakama.</p>
          <Link href="/updates" className="mt-6 inline-block text-sm text-[var(--accent)] hover:text-[var(--accent-hover)]">Read updates from Dete and the region →</Link>
        </div>
      </section>
      <SectionWrapper background="charcoal">
        <PhotoGallery />
      </SectionWrapper>
    </>
  );
}
