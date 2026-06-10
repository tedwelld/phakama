"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  MOBILE_BOTTOM_NAV_LINKS,
  MOBILE_MORE_NAV_LINKS,
} from "@/lib/constants";
import { cn } from "@/lib/utils";

const icons = {
  home: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.75}
      d="M3 10.5L12 4l9 6.5V20a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1v-9.5z"
    />
  ),
  about: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.75}
      d="M12 11c2.21 0 4-1.79 4-4S14.21 3 12 3 8 4.79 8 7s1.79 4 4 4zm0 2c-3.33 0-6 1.57-6 3.5V19h12v-2.5C18 14.57 15.33 13 12 13z"
    />
  ),
  awareness: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.75}
      d="M12 21s-7-4.35-7-10a4 4 0 117 0 4 4 0 117 0c0 5.65-7 10-7 10z"
    />
  ),
  programs: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.75}
      d="M4 6h16M4 12h16M4 18h10M8 6v12"
    />
  ),
  contact: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.75}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  ),
  more: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.75}
      d="M4 6h16M4 12h16M4 18h16"
    />
  ),
};

function NavIcon({ name }: { name: keyof typeof icons }) {
  return (
    <svg
      className="h-5 w-5 shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      {icons[name]}
    </svg>
  );
}

export default function BottomNav() {
  const pathname = usePathname();
  const [moreOpen, setMoreOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const isMoreActive = MOBILE_MORE_NAV_LINKS.some(({ href }) => isActive(href));

  useEffect(() => {
    setMoreOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = moreOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [moreOpen]);

  return (
    <>
      {moreOpen && (
        <button
          type="button"
          aria-label="Close menu"
          className="fixed inset-0 z-40 bg-grey-dark/30 xl:hidden"
          onClick={() => setMoreOpen(false)}
        />
      )}

      <div
        className={cn(
          "fixed inset-x-0 bottom-0 z-50 xl:hidden",
          moreOpen && "pointer-events-none"
        )}
      >
        {moreOpen && (
          <div className="pointer-events-auto mx-3 mb-2 overflow-hidden rounded-2xl border border-border-subtle bg-surface-elevated shadow-lg">
            <div className="border-b border-pink-light/60 px-4 py-3">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-purple">
                More Pages
              </p>
            </div>
            <ul className="p-2">
              {MOBILE_MORE_NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={cn(
                      "flex items-center rounded-xl px-3 py-3 text-sm font-medium transition-colors",
                      isActive(href)
                        ? "bg-pink-light text-pink-dark"
                        : "text-grey-dark hover:bg-blush"
                    )}
                    onClick={() => setMoreOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        <nav
          aria-label="Mobile bottom navigation"
          className="pointer-events-auto border-t border-border-subtle bg-surface/95 pb-[env(safe-area-inset-bottom)] shadow-[0_-4px_24px_var(--shadow-color)] backdrop-blur-md"
        >
          <ul className="mx-auto grid h-14 max-w-lg grid-cols-6">
            {MOBILE_BOTTOM_NAV_LINKS.map(({ href, shortLabel, icon }) => {
              const active = isActive(href);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "flex h-full flex-col items-center justify-center gap-0.5 px-1 transition-colors",
                      active ? "text-pink-dark" : "text-grey-muted hover:text-pink"
                    )}
                  >
                    <NavIcon name={icon} />
                    <span className="max-w-full truncate text-[10px] font-semibold leading-none">
                      {shortLabel}
                    </span>
                  </Link>
                </li>
              );
            })}

            <li>
              <button
                type="button"
                aria-expanded={moreOpen}
                aria-label={moreOpen ? "Close more menu" : "Open more menu"}
                onClick={() => setMoreOpen((open) => !open)}
                className={cn(
                  "flex h-full w-full flex-col items-center justify-center gap-0.5 px-1 transition-colors",
                  moreOpen || isMoreActive
                    ? "text-pink-dark"
                    : "text-grey-muted hover:text-pink"
                )}
              >
                <NavIcon name="more" />
                <span className="text-[10px] font-semibold leading-none">More</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
