"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export default function BottomNav() {
  const pathname = usePathname();
  const [moreOpen, setMoreOpen] = useState(false);
  const moreActive = siteConfig.bottomNavMoreLinks.some((link) => isActive(pathname, link.href));

  return (
    <>
      <AnimatePresence>
        {moreOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/40 lg:hidden"
            onClick={() => setMoreOpen(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {moreOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.2 }}
            className="fixed right-4 bottom-[calc(4.75rem+env(safe-area-inset-bottom))] left-4 z-50 rounded-sm border border-[var(--fg-10)] bg-[var(--bg)] p-2 shadow-xl lg:hidden"
          >
            {siteConfig.bottomNavMoreLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMoreOpen(false)}
                className={`block rounded-sm px-4 py-3 text-sm transition-colors ${
                  isActive(pathname, link.href)
                    ? "bg-[var(--accent)]/10 text-[var(--accent)]"
                    : "text-[var(--fg)] hover:bg-[var(--fg-05)]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <nav
        aria-label="Mobile bottom navigation"
        className="fixed right-0 bottom-0 left-0 z-50 border-t border-[var(--fg-10)] bg-[var(--bg)]/95 backdrop-blur-md lg:hidden"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <div className="mx-auto flex max-w-lg items-stretch justify-around px-1 py-1.5">
          {siteConfig.bottomNavLinks.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex min-w-0 flex-1 flex-col items-center gap-0.5 rounded-sm px-1 py-2 text-[10px] tracking-wide transition-colors ${
                  active ? "text-[var(--accent)]" : "text-[var(--fg-50)] hover:text-[var(--fg)]"
                }`}
              >
                <i className={`pi ${link.icon}`} style={{ fontSize: "18px" }} />
                <span className="truncate">{link.label}</span>
              </Link>
            );
          })}

          <button
            type="button"
            onClick={() => setMoreOpen((open) => !open)}
            aria-expanded={moreOpen}
            aria-label="More pages"
            className={`flex min-w-0 flex-1 flex-col items-center gap-0.5 rounded-sm px-1 py-2 text-[10px] tracking-wide transition-colors ${
              moreActive || moreOpen ? "text-[var(--accent)]" : "text-[var(--fg-50)] hover:text-[var(--fg)]"
            }`}
          >
            <i className="pi pi-ellipsis-h" style={{ fontSize: "18px" }} />
            <span>More</span>
          </button>
        </div>
      </nav>
    </>
  );
}
