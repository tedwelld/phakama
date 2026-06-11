import Link from "next/link";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SiteImage from "@/components/shared/SiteImage";
import { siteConfig } from "@/data/siteConfig";
import { siteImages } from "@/data/images";

export default function FinalCtaSection() {
  const waHref = `https://wa.me/${siteConfig.whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;

  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden">
      <SiteImage
        src={siteImages.community}
        alt="Phakama community outreach"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

      <div className="relative z-10 container-luxury text-center">
        <ScrollReveal>
          <p className="mb-6 text-xs tracking-[0.3em] text-[var(--accent)] uppercase">Get Involved</p>
          <h2
            className="mb-8 text-5xl leading-none text-white md:text-7xl lg:text-8xl"
            style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
          >
            Together we can
            <br />
            <span className="text-[var(--accent)] italic" style={{ fontFamily: "var(--font-editorial)" }}>
              make a difference.
            </span>
          </h2>
          <p
            className="mx-auto mb-12 max-w-lg text-lg text-white/70 md:text-xl"
            style={{ fontFamily: "var(--font-editorial)", fontStyle: "italic" }}
          >
            Volunteer, partner with us, or invite Phakama to your community.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/get-involved"
              className="min-w-[220px] rounded bg-[var(--accent)] px-10 py-4 text-center text-sm font-semibold tracking-wide text-white hover:bg-[var(--accent-hover)]"
            >
              Get Involved
            </Link>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-[220px] rounded border border-white/40 px-10 py-4 text-center text-sm tracking-wide text-white hover:border-white hover:bg-white/5"
            >
              Chat on WhatsApp
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
