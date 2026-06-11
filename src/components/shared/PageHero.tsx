import SiteImage from "@/components/shared/SiteImage";
import SectionLabel from "@/components/ui/SectionLabel";
import { siteImages } from "@/data/images";

interface PageHeroProps {
  label: string;
  title: React.ReactNode;
  image?: string;
  imageAlt?: string;
}

export default function PageHero({
  label,
  title,
  image = siteImages.hero,
  imageAlt,
}: PageHeroProps) {
  return (
    <section className="relative flex h-[60vh] min-h-[400px] items-end overflow-hidden pb-20">
      <SiteImage
        src={image}
        alt={imageAlt ?? label}
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/80" />
      <div className="relative z-10 container-luxury">
        <SectionLabel>{label}</SectionLabel>
        <h1
          className="text-5xl leading-none text-white md:text-7xl"
          style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
        >
          {title}
        </h1>
      </div>
    </section>
  );
}
