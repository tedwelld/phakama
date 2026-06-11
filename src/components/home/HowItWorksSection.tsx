"use client";

import SectionWrapper from "@/components/shared/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/shared/ScrollReveal";

const steps = [
  {
    number: "01",
    title: "Educate",
    description:
      "We share clear, accessible health information through talks, workshops, and awareness campaigns in communities.",
    icon: <i className="pi pi-book" style={{ fontSize: "40px" }} />,
  },
  {
    number: "02",
    title: "Support",
    description:
      "We create safe spaces where women can ask questions, find resources, and connect with community support.",
    icon: <i className="pi pi-heart" style={{ fontSize: "40px" }} />,
  },
  {
    number: "03",
    title: "Empower",
    description:
      "We help women take informed action — from self-awareness to professional screening and preventive care.",
    icon: <i className="pi pi-verified" style={{ fontSize: "40px" }} />,
  },
];

export default function HowItWorksSection() {
  return (
    <SectionWrapper id="how-it-works" background="dark">
      <ScrollReveal>
        <SectionLabel>Our Approach</SectionLabel>
        <h2
          className="mb-16 max-w-lg text-4xl text-[var(--fg)] md:text-5xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Educate. Support. Empower.
        </h2>
      </ScrollReveal>

      <div className="relative grid grid-cols-1 gap-12 md:grid-cols-3">
        <div className="absolute top-12 right-[16.66%] left-[16.66%] hidden h-px bg-[var(--accent)]/20 md:block" />

        {steps.map((step, i) => (
          <ScrollReveal key={step.number} delay={i * 0.15} direction="up">
            <div className="group relative">
              <div
                className="absolute -top-4 -left-2 text-8xl font-bold text-[var(--accent)]/10 select-none"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {step.number}
              </div>
              <div className="relative z-10 mt-4 mb-6 text-[var(--accent)]">{step.icon}</div>
              <h3 className="mb-4 text-2xl text-[var(--fg)]" style={{ fontFamily: "var(--font-display)" }}>
                {step.title}
              </h3>
              <p className="leading-relaxed text-[var(--fg)]/60">{step.description}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
