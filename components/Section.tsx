import Container from "@/components/Container";
import { cn } from "@/lib/utils";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  variant?: "default" | "muted" | "accent" | "dark";
  id?: string;
};

const variants = {
  default: "bg-surface",
  muted: "bg-surface-muted",
  accent: "bg-surface-accent",
  dark: "bg-footer-bg text-white",
};

export default function Section({
  children,
  className,
  containerClassName,
  variant = "default",
  id,
}: SectionProps) {
  return (
    <section id={id} className={cn("py-16 md:py-20", variants[variant], className)}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
