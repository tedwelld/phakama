import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  layout?: "horizontal" | "stacked" | "mark-only";
  className?: string;
};

export default function Logo({ layout = "horizontal", className }: LogoProps) {
  const compact = layout !== "horizontal";

  return (
    <span className={cn("inline-flex shrink-0 items-center gap-3", className)}>
    <Image
      src="/images/phakama-womens-logo-638d84bf.png"
      alt="Phakama Women's Organization"
      width={1536}
      height={1024}
      sizes={compact ? "96px" : "240px"}
      preload={compact}
      className={cn(
        "shrink-0 object-contain",
        compact ? "h-16 w-24" : "h-40 w-60",
      )}
    />
    </span>
  );
}
