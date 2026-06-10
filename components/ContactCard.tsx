import Link from "next/link";
import Button from "@/components/Button";
import { CONTACT } from "@/lib/constants";

type ContactCardProps = {
  variant?: "default" | "compact";
};

export default function ContactCard({ variant = "default" }: ContactCardProps) {
  const isCompact = variant === "compact";

  return (
    <div
      className={`rounded-2xl border border-border-subtle bg-surface ${
        isCompact ? "p-5" : "p-6 sm:p-7"
      }`}
    >
      <h3 className={`font-bold text-grey-dark ${isCompact ? "text-base" : "text-lg"}`}>
        Get in Touch
      </h3>
      {!isCompact && (
        <p className="mt-2 text-sm leading-relaxed text-grey-muted">
          We welcome your questions, partnership ideas, and support.
        </p>
      )}

      <ul className={`space-y-4 ${isCompact ? "mt-4" : "mt-6"}`}>
        <li className="flex items-start gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-pink-light text-pink-dark">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </span>
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-grey-muted">Email</p>
            <a
              href={`mailto:${CONTACT.email}`}
              className="text-sm font-semibold text-pink-dark hover:underline"
            >
              {CONTACT.email}
            </a>
          </div>
        </li>

        <li className="flex items-start gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-purple-light text-purple">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </span>
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-grey-muted">Phone</p>
            <a
              href={`tel:${CONTACT.phone}`}
              className="text-sm font-semibold text-purple hover:underline"
            >
              {CONTACT.phoneDisplay}
            </a>
          </div>
        </li>

        <li>
          <Button href={CONTACT.whatsapp} variant="whatsapp" external fullWidth>
            Chat on WhatsApp
          </Button>
        </li>
      </ul>
    </div>
  );
}
