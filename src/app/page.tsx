import HeroSection from "@/components/home/HeroSection";
import BrandIntroSection from "@/components/home/BrandIntroSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import ThreePillarsSection from "@/components/home/ThreePillarsSection";
import ProgramsPreviewSection from "@/components/home/ProgramsPreviewSection";
import CampaignHighlightsSection from "@/components/home/CampaignHighlightsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FinalCtaSection from "@/components/home/FinalCtaSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BrandIntroSection />
      <HowItWorksSection />
      <ThreePillarsSection />
      <ProgramsPreviewSection />
      <CampaignHighlightsSection />
      <TestimonialsSection />
      <FinalCtaSection />
    </>
  );
}
