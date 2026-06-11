import SectionWrapper from "@/components/shared/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/shared/ScrollReveal";
import AnimatedCounter from "@/components/shared/AnimatedCounter";
import { siteConfig } from "@/data/siteConfig";

export default function BrandIntroSection() {
  return (
    <SectionWrapper id="about-intro" background="charcoal">
      <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
        <ScrollReveal direction="left">
          <SectionLabel>Who We Are</SectionLabel>
          <h2
            className="mb-8 text-4xl leading-tight text-[var(--fg)] md:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Empowering women
            <br />
            <span className="text-[var(--accent)] italic" style={{ fontFamily: "var(--font-editorial)" }}>
              through health awareness.
            </span>
          </h2>
          <p className="mb-6 text-lg leading-relaxed text-[var(--fg-70)]">
            Phakama Women&apos;s Organization is dedicated to educating, supporting, and
            empowering women through breast cancer awareness, women&apos;s health education,
            and community outreach across Zimbabwe.
          </p>
          <p className="text-base leading-relaxed text-[var(--fg-60)]">
            Through workshops, awareness campaigns, and one-on-one support, we help women
            access reliable health information and feel confident in prioritizing preventive
            care and regular check-ups.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="right" delay={0.1}>
          <div className="grid grid-cols-2 gap-8">
            {siteConfig.counters.map((c) => (
              <AnimatedCounter key={c.label} end={c.end} label={c.label} suffix={c.suffix} />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  );
}
