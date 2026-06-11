"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => {
      setActive((a) => (a + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(id);
  }, [isPaused]);

  const t = testimonials[active];

  return (
    <section
      className="section-padding bg-[var(--bg-alt)] transition-colors duration-400"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container-luxury">
        <div className="mb-12 text-center">
          <SectionLabel>Community Voices</SectionLabel>
          <h2
            className="text-4xl text-[var(--fg)] md:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Stories from our community
          </h2>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="mb-10 flex min-h-40 items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center text-xl leading-relaxed text-[var(--fg)] md:text-2xl"
                style={{ fontFamily: "var(--font-editorial)", fontStyle: "italic" }}
              >
                &ldquo;{t.quote}&rdquo;
              </motion.blockquote>
            </AnimatePresence>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active + "author"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <p className="font-medium text-[var(--fg)]">{t.name}</p>
              <p className="mt-1 text-sm text-[var(--accent)]">{t.location}</p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-10 flex justify-center gap-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === active ? "w-6 bg-[var(--accent)]" : "w-2 bg-[var(--fg-20)]"
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
