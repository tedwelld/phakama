import Image from "next/image";
import { cn } from "@/lib/utils";

type PhotoProps = {
  src: string;
  alt: string;
  /** Sizing/aspect classes for the wrapper, e.g. "aspect-[4/3] w-full". */
  className?: string;
  /** Load eagerly + high priority (use for above-the-fold hero images). */
  priority?: boolean;
  /** Responsive sizes hint passed to next/image. */
  sizes?: string;
};

export default function Photo({
  src,
  alt,
  className = "aspect-video w-full",
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
}: PhotoProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl bg-pink-light/40 shadow-sm ring-1 ring-pink/10",
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
    </div>
  );
}
