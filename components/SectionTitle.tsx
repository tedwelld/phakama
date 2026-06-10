import { cn } from "@/lib/utils";

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
};

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  centered = false,
  light = false,
}: SectionTitleProps) {
  return (
    <div className={cn(centered && "text-center")}>
      {eyebrow && (
        <p
          className={cn(
            "mb-3 text-xs font-semibold uppercase tracking-[0.2em]",
            light ? "text-pink-light" : "text-purple"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "text-2xl font-bold tracking-tight sm:text-3xl md:text-[2rem] md:leading-tight",
          light ? "text-white" : "text-grey-dark"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 max-w-2xl text-base leading-relaxed",
            centered && "mx-auto",
            light ? "text-white/85" : "text-grey-muted"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
