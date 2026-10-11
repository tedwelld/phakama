import { pageMetadata, organizationStructuredData } from "@/lib/seo";
import HeroSection from "@/components/home/HeroSection";
import BrandIntroSection from "@/components/home/BrandIntroSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import ThreePillarsSection from "@/components/home/ThreePillarsSection";
import ProgramsPreviewSection from "@/components/home/ProgramsPreviewSection";
import CampaignHighlightsSection from "@/components/home/CampaignHighlightsSection";
import FinalCtaSection from "@/components/home/FinalCtaSection";

export const metadata = pageMetadata("/");

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationStructuredData).replace(/</g, "\\u003c") }}
      />
      <HeroSection />
      <BrandIntroSection />
      <HowItWorksSection />
      <ThreePillarsSection />
      <ProgramsPreviewSection />
      <CampaignHighlightsSection />
      <FinalCtaSection />
    </>
  );
}
