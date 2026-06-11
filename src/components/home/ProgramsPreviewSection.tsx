"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SiteImage from "@/components/shared/SiteImage";
import SectionWrapper from "@/components/shared/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { programs } from "@/data/programs";

export default function ProgramsPreviewSection() {
  const featured = programs[0];
  const others = programs.slice(1);

  return (
    <SectionWrapper id="programs" background="charcoal">
      <ScrollReveal className="mb-12">
        <SectionLabel>Our Programs</SectionLabel>
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <h2
            className="max-w-lg text-4xl text-[var(--fg)] md:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Reaching women where they are.
          </h2>
          <Link
            href="/programs"
            className="text-sm tracking-wide text-[var(--accent)] hover:text-[var(--accent-hover)]"
          >
            View all programs →
          </Link>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <ScrollReveal delay={0} className="md:row-span-2">
          <ProgramCard program={featured} large />
        </ScrollReveal>
        {others.map((p, i) => (
          <ScrollReveal key={p.slug} delay={0.1 + i * 0.08}>
            <ProgramCard program={p} />
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  );
}

function ProgramCard({
  program,
  large,
}: {
  program: (typeof programs)[number];
  large?: boolean;
}) {
  return (
    <motion.div
      whileHover="hover"
      className={`group relative cursor-pointer overflow-hidden rounded-sm ${large ? "h-80 md:h-full md:min-h-[480px]" : "h-52 md:h-56"}`}
    >
      <motion.div
        variants={{ hover: { scale: 1.05 } }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0"
      >
        <SiteImage
          src={program.image}
          alt={program.title}
          fill
          className="object-cover"
          sizes={large ? "100vw" : "(max-width: 768px) 100vw, 33vw"}
        />
      </motion.div>
      <div className={`absolute inset-0 ${program.gradient} mix-blend-multiply opacity-60`} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <motion.div
        variants={{ hover: { opacity: 0.15 } }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 bg-[var(--accent)]"
      />
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <p className="mb-1 text-xs tracking-widest text-[var(--accent)] uppercase">{program.category}</p>
        <h3 className="mb-3 text-2xl text-white" style={{ fontFamily: "var(--font-display)" }}>
          {program.title}
        </h3>
        <motion.div
          variants={{ hover: { opacity: 1, y: 0 } }}
          initial={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            href={program.href}
            className="text-sm text-[var(--accent)] hover:text-[var(--accent-hover)]"
          >
            Learn More →
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
