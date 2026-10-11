import SectionWrapper from "@/components/shared/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/shared/ScrollReveal";

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
              through community action.
            </span>
          </h2>
          <p className="mb-6 text-lg leading-relaxed text-[var(--fg-70)]">
            Phakama Women&apos;s Organization is a community-based group supporting women&apos;s wellbeing in Hwange district, Zimbabwe. We bring women together to connect, participate and care for the communities they call home.
          </p>
          <p className="text-base leading-relaxed text-[var(--fg-60)]">
            From annual meetings across the district to clean-up campaigns and awareness activities, our work puts community at the centre. Breast cancer awareness remains an important part of our broader commitment to women&apos;s wellbeing.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="right" delay={0.1}>
          <div className="grid grid-cols-2 gap-8">
            {[["Connect", "Annual meetings across Hwange district"], ["Care", "Clean-up campaigns and shared spaces"], ["Learn", "Women’s wellbeing and awareness"], ["Participate", "Community action, together"]].map(([title, text]) => (<div key={title} className="border-t border-[var(--accent)]/40 pt-5"><h3 className="mb-3 font-display text-3xl text-[var(--accent)]">{title}</h3><p className="text-sm leading-relaxed text-[var(--fg-70)]">{text}</p></div>))}
          </div>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  );
}
