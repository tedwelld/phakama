"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useNavbarScroll } from "@/hooks/useNavbarScroll";
import { useSiteTheme } from "@/contexts/NavbarThemeContext";
import Logo from "@/components/Logo";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { siteConfig } from "@/data/siteConfig";

const leftLinks = siteConfig.leftNavLinks;
const rightLinks = siteConfig.rightNavLinks;
const allLinks = [...leftLinks, ...rightLinks];

function useIsActive() {
  const pathname = usePathname();
  return (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };
}

interface TokenSet {
  scrolledBg: string;
  textDefault: string;
  textHover: string;
  textActive: string;
  underline: string;
  hamburgerBar: string;
  mobileBg: string;
  mobileText: string;
  mobileActive: string;
  mobileHover: string;
  mobileCta: string;
  mobileWa: string;
}

const tokens: Record<string, TokenSet> = {
  dark: {
    scrolledBg: "bg-[var(--bg)]/95 backdrop-blur-sm shadow-lg",
    textDefault: "text-[var(--fg-60)]",
    textHover: "hover:text-[var(--fg)]",
    textActive: "text-[var(--accent)]",
    underline: "bg-[var(--accent)]",
    hamburgerBar: "bg-[var(--fg)]",
    mobileBg: "bg-[var(--bg)]",
    mobileText: "text-[var(--fg)]",
    mobileActive: "text-[var(--accent)]",
    mobileHover: "hover:text-[var(--accent)]",
    mobileCta: "bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)]",
    mobileWa: "text-[var(--fg-50)] hover:text-[var(--accent)]",
  },
  light: {
    scrolledBg: "bg-[var(--bg)]/95 backdrop-blur-sm shadow-sm",
    textDefault: "text-[var(--fg-50)]",
    textHover: "hover:text-[var(--fg)]",
    textActive: "text-[var(--accent)]",
    underline: "bg-[var(--accent)]",
    hamburgerBar: "bg-[var(--fg)]",
    mobileBg: "bg-[var(--bg)]",
    mobileText: "text-[var(--fg)]",
    mobileActive: "text-[var(--accent)] font-semibold",
    mobileHover: "hover:text-[var(--accent)]",
    mobileCta: "bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)]",
    mobileWa: "text-[var(--fg-40)] hover:text-[var(--accent)]",
  },
};

interface NavLinkProps {
  href: string;
  label: string;
  active: boolean;
  t: TokenSet;
  onClick?: () => void;
}

function NavLink({ href, label, active, t, onClick }: NavLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`group relative pb-0.5 text-xs tracking-[0.18em] uppercase transition-colors duration-300 ${
        active ? t.textActive : `${t.textDefault} ${t.textHover}`
      }`}
      style={{ fontFamily: "var(--font-body)" }}
    >
      {label}
      <span
        className={`absolute bottom-0 left-0 h-px ${t.underline} transition-all duration-300 ${
          active ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />
    </Link>
  );
}

export default function Navbar() {
  const isScrolled = useNavbarScroll();
  const [menuOpen, setMenuOpen] = useState(false);
  const isActive = useIsActive();
  const { theme } = useSiteTheme();
  const t = tokens[theme];

  return (
    <>
      <header
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
          isScrolled || menuOpen ? t.scrolledBg : "bg-transparent"
        }`}
      >
        <nav className="container-luxury relative flex h-20 items-center">
          <div className="hidden flex-1 items-center justify-end gap-4 pr-5 lg:flex xl:gap-8 xl:pr-8">
            {leftLinks.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                label={link.label}
                active={isActive(link.href)}
                t={t}
              />
            ))}
          </div>

          <Link
            href="/"
            className="absolute left-1/2 flex-shrink-0 -translate-x-1/2 lg:static lg:translate-x-0"
          >
            <Logo layout="stacked" />
          </Link>

          <div className="hidden flex-1 items-center justify-start gap-4 pl-5 lg:flex xl:gap-8 xl:pl-8">
            {rightLinks.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                label={link.label}
                active={isActive(link.href)}
                t={t}
              />
            ))}

            <div className="ml-auto flex items-center border-l border-[var(--fg-10)] pl-6">
              <ThemeToggle className="theme-checkbox--nav" />
            </div>
          </div>

          <div className="ml-auto flex items-center gap-2 lg:hidden">
            <ThemeToggle className="theme-checkbox--nav" />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex flex-col gap-1.5 p-2"
              aria-label="Toggle menu"
            >
              <span
                className={`block h-0.5 w-6 ${t.hamburgerBar} transition-all duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
              />
              <span
                className={`block h-0.5 w-6 ${t.hamburgerBar} transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 w-6 ${t.hamburgerBar} transition-all duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 lg:hidden ${t.mobileBg} transition-colors duration-400`}
          >
            {allLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`text-3xl transition-colors ${
                    isActive(link.href)
                      ? t.mobileActive
                      : `${t.mobileText} ${t.mobileHover}`
                  }`}
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.42 }}
              className="mt-4 flex flex-col items-center gap-4"
            >
              <Link
                href="/get-involved"
                onClick={() => setMenuOpen(false)}
                className={`rounded px-8 py-3 text-sm font-semibold transition-colors ${t.mobileCta}`}
              >
                Get Involved
              </Link>
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className={`text-sm transition-colors ${t.mobileWa}`}
              >
                WhatsApp
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
