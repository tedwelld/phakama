import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/shared/ScrollReveal";
import CinematicCard from "@/components/shared/CinematicCard";
import { siteImages } from "@/data/images";

const pillars = [
  {
    image: siteImages.gathering,
    category: "Connection",
    title: "Women Coming Together",
    description:
      "Annual meetings across Hwange district bring women together around community life, shared concerns and wellbeing.",
    href: "/updates#annual-meetings",
  },
  {
    image: siteImages.discussion,
    category: "Health",
    title: "Women's Wellness",
    description:
      "Workshops on reproductive health, mental wellness, nutrition, and preventive care for every stage of life.",
    href: "/womens-health",
  },
  {
    image: siteImages.support,
    category: "Outreach",
    title: "Community Programs",
    description:
      "Clean-up campaigns and local participation put care for our communities into action.",
    href: "/programs",
  },
];

export default function ThreePillarsSection() {
  return (
    <section className="section-padding bg-[var(--bg)] transition-colors duration-400">
      <div className="container-luxury">
        <ScrollReveal className="mb-12">
          <SectionLabel>What We Do</SectionLabel>
          <h2
            className="max-w-lg text-4xl text-[var(--fg)] md:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Connection. Wellbeing. Community.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          {pillars.map((p, i) => (
            <ScrollReveal key={p.category} delay={i * 0.12}>
              <CinematicCard
                image={p.image}
                category={p.category}
                title={p.title}
                description={p.description}
                href={p.href}
                height="h-[500px] md:h-[640px]"
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
