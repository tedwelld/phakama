"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "@/components/Container";
import Logo from "@/components/Logo";
import ThemeToggle from "@/components/ThemeToggle";
import { PRIMARY_NAV_LINKS, SITE_TAGLINE } from "@/lib/constants";
import { cn } from "@/lib/utils";

const byHref = (href: string) =>
  PRIMARY_NAV_LINKS.find((link) => link.href === href)!;

// Left of the logo: Programs, Get Involved, Women's Health.
const LEFT_LINKS = ["/programs", "/get-involved", "/womens-health"].map(byHref);
// Right of the logo: the remaining three pages.
const RIGHT_LINKS = ["/about", "/breast-cancer-awareness", "/contact"].map(byHref);

const linkClass = (active: boolean) =>
  cn(
    "whitespace-nowrap rounded-md px-2.5 py-2 text-[13px] font-medium transition-colors 2xl:px-3 2xl:text-sm",
    active
      ? "bg-pink-light text-pink-dark"
      : "text-grey-dark hover:bg-blush hover:text-pink-dark"
  );

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="relative sticky top-0 z-50 bg-header-bg shadow-sm transition-colors">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[60] flex h-9 items-center justify-end pe-2 sm:pe-4 lg:pe-5">
        <div className="pointer-events-auto">
          <ThemeToggle />
        </div>
      </div>

      <div className="border-b border-border-subtle bg-surface-muted">
        <Container className="flex h-9 items-center justify-between gap-3 pe-14 sm:pe-16 lg:pe-[4.5rem]">
          <p className="hidden truncate text-xs font-medium uppercase tracking-[0.18em] text-grey-muted sm:block">
            Women&apos;s Health · Breast Cancer Awareness · Zimbabwe
          </p>
          <p className="ml-auto hidden text-xs text-grey-muted lg:block">{SITE_TAGLINE}</p>
        </Container>
      </div>

      <Container
        as="nav"
        aria-label="Main navigation"
        className="relative grid h-16 grid-cols-[1fr_auto_1fr] items-center gap-2 xl:h-20"
      >
        <ul className="hidden items-center justify-end gap-0.5 xl:flex">
          {LEFT_LINKS.map(({ href, label, shortLabel }) => (
            <li key={href}>
              <Link href={href} className={linkClass(isActive(href))}>
                <span className="2xl:hidden">{shortLabel}</span>
                <span className="hidden 2xl:inline">{label}</span>
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/"
          aria-label="Phakama Women's Organization — Home"
          className="flex justify-center"
        >
          <Logo layout="stacked" markClassName="xl:h-11 xl:w-11" />
        </Link>

        <ul className="hidden items-center justify-start gap-0.5 xl:flex">
          {RIGHT_LINKS.map(({ href, label, shortLabel }) => (
            <li key={href}>
              <Link href={href} className={linkClass(isActive(href))}>
                <span className="2xl:hidden">{shortLabel}</span>
                <span className="hidden 2xl:inline">{label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </header>
  );
}
