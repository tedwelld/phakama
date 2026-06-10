import Button from "@/components/Button";
import Container from "@/components/Container";
import Photo from "./Photo";
import PlaceholderImage from "./PlaceholderImage";

type HeroProps = {
  title: string;
  eyebrow?: string;
  description?: string;
  showImage?: boolean;
  imageLabel?: string;
  /** When set, a real photo is shown instead of the placeholder. */
  imageSrc?: string;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  compact?: boolean;
};

export default function Hero({
  title,
  eyebrow,
  description,
  showImage = false,
  imageLabel = "Organization image",
  imageSrc,
  primaryCta,
  secondaryCta,
  compact = false,
}: HeroProps) {
  return (
    <section
      className={`theme-gradient-hero relative overflow-hidden border-b border-border-subtle bg-gradient-to-b from-blush via-surface to-cream ${
        compact ? "py-14 md:py-16" : "py-16 md:py-24"
      }`}
    >
      <Container>
        <div
          className={`grid items-center gap-10 lg:gap-14 ${
            showImage ? "lg:grid-cols-2" : "max-w-3xl"
          }`}
        >
          <div className="max-w-2xl">
            {eyebrow && (
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-purple">
                {eyebrow}
              </p>
            )}
            <h1 className="text-3xl font-bold leading-[1.15] text-grey-dark sm:text-4xl lg:text-5xl">
              {title}
            </h1>
            {description && (
              <p className="mt-5 text-base leading-relaxed text-grey-muted sm:text-lg">
                {description}
              </p>
            )}
            {(primaryCta || secondaryCta) && (
              <div className="mt-8 flex flex-wrap gap-3">
                {primaryCta && (
                  <Button href={primaryCta.href}>{primaryCta.label}</Button>
                )}
                {secondaryCta && (
                  <Button href={secondaryCta.href} variant="outline">
                    {secondaryCta.label}
                  </Button>
                )}
              </div>
            )}
          </div>

          {showImage &&
            (imageSrc ? (
              <Photo
                src={imageSrc}
                alt={imageLabel}
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="aspect-[4/3] w-full lg:aspect-[5/4]"
              />
            ) : (
              <PlaceholderImage
                label={imageLabel}
                className="aspect-[4/3] w-full lg:aspect-[5/4]"
              />
            ))}
        </div>
      </Container>
    </section>
  );
}
