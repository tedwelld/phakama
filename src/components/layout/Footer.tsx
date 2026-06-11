import Link from "next/link";
import Logo from "@/components/Logo";
import { siteConfig } from "@/data/siteConfig";

export default function Footer() {
  const waHref = `https://wa.me/${siteConfig.whatsappNumber.replace(/\D/g, "")}`;

  return (
    <footer className="border-t border-[var(--fg-10)] bg-[var(--bg-alt)] pb-bottom-nav text-[var(--fg-70)] transition-colors duration-400 lg:pb-0">
      <div className="container-luxury py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Logo layout="horizontal" />
            </div>
            <p className="mb-6 max-w-sm text-sm leading-relaxed">{siteConfig.description}</p>
            <div className="flex gap-4">
              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[var(--fg-50)] transition-colors hover:text-[var(--accent)]"
              >
                Facebook
              </a>
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[var(--fg-50)] transition-colors hover:text-[var(--accent)]"
              >
                Instagram
              </a>
              <a
                href={siteConfig.socials.x}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[var(--fg-50)] transition-colors hover:text-[var(--accent)]"
              >
                X
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-xs tracking-widest text-[var(--accent)] uppercase">Quick Links</h3>
            <ul className="space-y-3">
              {siteConfig.footerQuickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm transition-colors hover:text-[var(--fg)]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-xs tracking-widest text-[var(--accent)] uppercase">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={waHref} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--fg)]">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-[var(--fg)]">
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a href={`tel:${siteConfig.phone}`} className="hover:text-[var(--fg)]">
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li className="text-[var(--fg-40)]">{siteConfig.location}</li>
              <li className="pt-2">
                <Link
                  href="/contact"
                  className="inline-block rounded bg-[var(--accent)] px-4 py-2 text-xs font-semibold text-white hover:bg-[var(--accent-hover)]"
                >
                  Contact Us →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[var(--fg-10)] pt-8 text-xs text-[var(--fg-30)] sm:flex-row">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/about" className="hover:text-[var(--fg-60)]">
              About
            </Link>
            <Link href="/contact" className="hover:text-[var(--fg-60)]">
              Contact
            </Link>
            <Link href="/get-involved" className="hover:text-[var(--fg-60)]">
              Get Involved
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
