import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  layout?: "horizontal" | "stacked" | "mark-only";
  className?: string;
};

export default function Logo({ layout = "horizontal", className }: LogoProps) {
  const compact = layout !== "horizontal";

  return (
    <Image
      src="/images/phakama-logo.png"
      alt="Phakama Women's Organization — Stronger Together"
      width={1254}
      height={1254}
      sizes={compact ? "72px" : "192px"}
      preload={compact}
      className={cn(
        "shrink-0 rounded-sm bg-white object-contain",
        compact ? "h-[72px] w-[72px]" : "h-48 w-48",
        className,
      )}
    />
  );
}
