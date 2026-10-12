import Link from "next/link";

export default function TermsBanner() {
  return (
    <aside aria-label="Terms and conditions" className="border-y border-[var(--accent)]/20 bg-[var(--accent)]/5 py-6">
      <div className="container-luxury flex flex-col items-start justify-between gap-4 pr-20 sm:flex-row sm:items-center lg:pr-28">
        <div>
          <h2 className="mb-1 text-sm font-semibold text-[var(--fg)]">Terms &amp; Conditions</h2>
          <p className="max-w-2xl text-sm leading-relaxed text-[var(--fg-70)]">
            Please read our guidelines for using this website, sharing its content and getting involved in our community activities.
          </p>
        </div>
        <Link href="/terms-and-conditions" className="shrink-0 rounded border border-[var(--accent)] px-5 py-3 text-sm font-medium text-[var(--accent)] hover:bg-[var(--accent)]/10 focus-visible:outline-2 focus-visible:outline-offset-4">
          Read the terms <span aria-hidden="true">→</span>
        </Link>
      </div>
    </aside>
  );
}
