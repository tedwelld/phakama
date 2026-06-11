import { cn } from "@/lib/utils";

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
        <linearGradient id="phakama-badge" x1="24" y1="1" x2="24" y2="47" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#e2dcd0" />
          <stop offset="1" stopColor="#c4ddd9" />
        </linearGradient>
        <linearGradient id="phakama-ribbon" x1="12" y1="10" x2="36" y2="44" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#0d9488" />
          <stop offset="1" stopColor="#6d28d9" />
        </linearGradient>
      </defs>
      <circle cx="24" cy="24" r="23" fill="url(#phakama-badge)" />
      <circle cx="24" cy="24" r="23" fill="none" stroke="#0d9488" strokeOpacity="0.25" strokeWidth="1.5" />
      <g fill="none" stroke="url(#phakama-ribbon)" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 12 C 15.5 12, 12.5 23, 20 28.5 L 30.5 43" />
        <path d="M24 12 C 32.5 12, 35.5 23, 28 28.5 L 17.5 43" />
      </g>
    </svg>
  );
}

type LogoProps = {
  layout?: "horizontal" | "stacked" | "mark-only";
  className?: string;
  markClassName?: string;
  labelClassName?: string;
};

export default function Logo({
  layout = "horizontal",
  className,
  markClassName,
  labelClassName,
}: LogoProps) {
  if (layout === "mark-only") {
    return <LogoMark className={markClassName} />;
  }

  if (layout === "stacked") {
    return (
      <span className={cn("flex flex-col items-center gap-1.5 leading-none", className)}>
        <LogoMark className={cn("h-11 w-11", markClassName)} />
        <span className="flex flex-col items-center gap-0.5">
          <span className={cn("text-base font-bold tracking-tight text-[var(--fg)]", labelClassName)}>
            Phakama
          </span>
          <span className="text-[10px] font-semibold tracking-[0.2em] text-[var(--accent)] uppercase">
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
        <span className={cn("truncate text-base font-bold text-[var(--fg)]", labelClassName)}>Phakama</span>
        <span className="truncate text-xs text-[var(--fg-60)]">Women&apos;s Organization</span>
      </span>
    </span>
  );
}
