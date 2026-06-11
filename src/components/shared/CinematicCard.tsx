"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SiteImage from "@/components/shared/SiteImage";
import SectionLabel from "@/components/ui/SectionLabel";

interface CinematicCardProps {
  gradient?: string;
  image?: string;
  category: string;
  title: string;
  description: string;
  href: string;
  height?: string;
  linkLabel?: string;
}

export default function CinematicCard({
  gradient = "card-gradient-pink",
  image,
  category,
  title,
  description,
  href,
  height = "h-[600px]",
  linkLabel = "Learn More",
}: CinematicCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative ${height} cursor-pointer overflow-hidden rounded-sm`}
    >
      {image ? (
        <SiteImage src={image} alt={title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
      ) : (
        <div className={`absolute inset-0 ${gradient}`} />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="absolute inset-0 flex flex-col justify-end p-8">
        <SectionLabel>{category}</SectionLabel>
        <h3
          className="mb-3 text-3xl leading-tight text-white"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {title}
        </h3>
        <p className="mb-5 max-w-xs text-sm leading-relaxed text-white/70">{description}</p>
        <Link
          href={href}
          className="inline-flex items-center gap-2 text-sm tracking-wide text-[var(--accent)] transition-colors hover:text-[var(--accent-hover)]"
        >
          {linkLabel} →
        </Link>
      </div>
    </motion.div>
  );
}
