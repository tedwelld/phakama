"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { gsap } from "gsap";

interface AnimatedCounterProps {
  end: number;
  label: string;
  suffix?: string;
  prefix?: string;
}

export default function AnimatedCounter({
  end,
  label,
  suffix = "",
  prefix = "",
}: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const [value, setValue] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (inView && !hasAnimated.current) {
      hasAnimated.current = true;
      const obj = { val: 0 };
      gsap.to(obj, {
        val: end,
        duration: 2,
        ease: "power2.out",
        onUpdate: () => setValue(Math.round(obj.val)),
      });
    }
  }, [inView, end]);

  return (
    <div ref={ref} className="text-center">
      <p
        className="mb-2 text-5xl leading-none text-[var(--accent)] md:text-6xl"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {prefix}
        {value}
        {suffix}
      </p>
      <p className="text-sm tracking-widest text-[var(--fg-60)] uppercase">{label}</p>
    </div>
  );
}
