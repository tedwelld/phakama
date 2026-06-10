import { cn } from "@/lib/utils";

/**
 * The Phakama mark: an awareness ribbon (breast cancer awareness) drawn in the
 * brand pink-to-purple gradient on a soft badge. The two strands cross and rise,
 * echoing "Phakama" — to rise up / lift.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      role="img"
      aria-hidden="true"
      focusable="false"
      className={cn("h-10 w-10 shrink-0", className)}
    >
      <defs>
        <linearGradient
          id="phakama-badge"
          x1="24"
          y1="1"
          x2="24"
          y2="47"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#fce7f0" />
          <stop offset="1" stopColor="#f3e8ff" />
        </linearGradient>
        <linearGradient
          id="phakama-ribbon"
          x1="12"
          y1="10"
          x2="36"
          y2="44"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#d63384" />
          <stop offset="1" stopColor="#7c3aed" />
        </linearGradient>
      </defs>

      <circle cx="24" cy="24" r="23" fill="url(#phakama-badge)" />
      <circle
        cx="24"
        cy="24"
        r="23"
        fill="none"
        stroke="#d63384"
        strokeOpacity="0.18"
        strokeWidth="1.5"
      />

      <g
        fill="none"
        stroke="url(#phakama-ribbon)"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M24 12 C 15.5 12, 12.5 23, 20 28.5 L 30.5 43" />
        <path d="M24 12 C 32.5 12, 35.5 23, 28 28.5 L 17.5 43" />
      </g>
    </svg>
  );
}

type LogoProps = {
  /** "horizontal" places the wordmark beside the mark; "stacked" centers it below. */
  layout?: "horizontal" | "stacked";
  /** Render lighter text for use on dark backgrounds (e.g. the footer). */
  inverted?: boolean;
  className?: string;
  markClassName?: string;
};

export default function Logo({
  layout = "horizontal",
  inverted = false,
  className,
  markClassName,
}: LogoProps) {
  const nameColor = inverted ? "text-white" : "text-grey-dark";
  const subColor = inverted ? "text-pink-light" : "text-grey-muted";

  if (layout === "stacked") {
    return (
      <span className={cn("flex flex-col items-center gap-1.5 leading-none", className)}>
        <LogoMark className={cn("h-11 w-11", markClassName)} />
        <span className="flex flex-col items-center gap-0.5">
          <span className={cn("text-base font-bold tracking-tight", nameColor)}>
            Phakama
          </span>
          <span
            className={cn(
              "text-[10px] font-semibold uppercase tracking-[0.2em]",
              inverted ? "text-pink-light" : "text-pink-dark"
            )}
          >
            Women&apos;s Organization
          </span>
        </span>
      </span>
    );
  }

  return (
    <span className={cn("flex items-center gap-3", className)}>
      <LogoMark className={cn("h-10 w-10", markClassName)} />
      <span className="flex min-w-0 flex-col leading-snug">
        <span className={cn("truncate text-base font-bold", nameColor)}>Phakama</span>
        <span className={cn("truncate text-xs font-medium", subColor)}>
          Women&apos;s Organization
        </span>
      </span>
    </span>
  );
}
