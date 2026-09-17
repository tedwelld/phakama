"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import SiteImage from "@/components/shared/SiteImage";
import { siteConfig } from "@/data/siteConfig";
import { siteImages } from "@/data/images";

export default function HeroSection() {
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = headlineRef.current;
    if (!el) return;

    const text = el.innerText;
    const words = text.split(" ");
    el.innerHTML = words
      .map(
        (w) =>
          `<span class="inline-block overflow-hidden"><span class="hero-word inline-block">${w}</span></span>`
      )
      .join(" ");

    gsap.fromTo(
      ".hero-word",
      { y: "100%", opacity: 0 },
      { y: "0%", opacity: 1, stagger: 0.12, duration: 1.0, ease: "power3.out", delay: 0.3 }
    );
  }, []);

  return (
    <section className="relative flex h-screen min-h-[600px] items-center justify-center overflow-hidden">
      <SiteImage
        src={siteImages.homepage}
        alt="Community group gathered at Hwange Safari Lodge"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/70" />

      <div className="relative z-10 container-luxury px-4 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mb-8 text-xs tracking-[0.3em] text-[var(--accent)] uppercase"
        >
          {siteConfig.location}
        </motion.p>

        <h1
          ref={headlineRef}
          className="mb-6 text-5xl leading-none text-white sm:text-7xl md:text-8xl lg:text-9xl"
          style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
        >
          Raising Awareness. Inspiring Hope.
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mx-auto mb-12 max-w-xl text-lg text-white/80 md:text-xl"
          style={{ fontFamily: "var(--font-editorial)", fontStyle: "italic" }}
        >
          {siteConfig.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            href="/breast-cancer-awareness"
            className="min-w-[200px] rounded bg-[var(--accent)] px-8 py-4 text-center text-sm font-semibold tracking-wide text-white hover:bg-[var(--accent-hover)]"
          >
            Learn About Breast Cancer
          </Link>
          <Link
            href="/contact"
            className="min-w-[200px] rounded border border-white/40 px-8 py-4 text-center text-sm tracking-wide text-white hover:border-white hover:bg-white/5"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-24 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 lg:bottom-8"
      >
        <span className="text-xs tracking-widest text-white/40 uppercase">Scroll</span>
        <div className="animate-bounce-slow text-[var(--accent)]">
          <i className="pi pi-arrow-down" style={{ fontSize: "20px" }} />
        </div>
      </motion.div>
    </section>
  );
}
