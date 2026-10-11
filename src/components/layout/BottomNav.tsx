"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/siteConfig";

const extraIcons: Record<string, string> = {
  "/updates": "pi-book",
  "/gallery": "pi-images",
  "/womens-health": "pi-heart",
  "/get-involved": "pi-users",
};

const links = [
  ...siteConfig.bottomNavLinks,
  ...siteConfig.bottomNavMoreLinks.map((link) => ({
    ...link,
    icon: extraIcons[link.href] ?? "pi-arrow-right",
  })),
  { label: "Breast Cancer Awareness", href: "/breast-cancer-awareness", icon: "pi-heart-fill" },
].filter((link, index, all) => all.findIndex((item) => item.href === link.href) === index);

export default function BottomNav() {
  const pathname = usePathname();
  const panelId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    panelRef.current?.hidePopover();
  }, [pathname]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => {
      if (desktop.matches) panelRef.current?.hidePopover();
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  return (
    <>
      <button
        type="button"
        popoverTarget={panelId}
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        aria-controls={panelId}
        className="mobile-nav-fab"
      >
        <i className={`pi ${open ? "pi-times" : "pi-bars"}`} aria-hidden="true" />
      </button>
      <div
        ref={panelRef}
        id={panelId}
        popover="auto"
        className="mobile-nav-panel"
        onToggle={(event) => {
          const isOpen = event.newState === "open";
          setOpen(isOpen);
          if (isOpen) panelRef.current?.querySelector<HTMLAnchorElement>("a[aria-current]")?.focus();
        }}
      >
        <nav aria-label="Mobile quick navigation">
          {links.map((link) => {
            const active = pathname === link.href || (link.href !== "/" && pathname.startsWith(`${link.href}/`));
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                onClick={() => panelRef.current?.hidePopover()}
                className={`mobile-nav-link${active ? " is-active" : ""}`}
              >
                <i className={`pi ${link.icon}`} aria-hidden="true" />
                <span>{link.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}
