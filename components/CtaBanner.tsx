import Button from "@/components/Button";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";

type CtaBannerProps = {
  eyebrow?: string;
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
};

export default function CtaBanner({
  eyebrow,
  title,
  description,
  buttonLabel,
  buttonHref,
}: CtaBannerProps) {
  return (
    <section className="bg-gradient-to-r from-purple to-pink py-14 md:py-16">
      <Container className="text-center">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/75">
            {eyebrow}
          </p>
        )}
        <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/90">
          {description}
        </p>
        <div className="mt-8">
          <Button href={buttonHref} variant="white">
            {buttonLabel}
          </Button>
        </div>
      </Container>
    </section>
  );
}
