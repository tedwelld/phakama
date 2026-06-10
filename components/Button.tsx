import Link from "next/link";
import { cn } from "@/lib/utils";

const variants = {
  primary: "bg-pink text-white hover:bg-pink-dark shadow-sm",
  secondary: "bg-purple text-white hover:opacity-90 shadow-sm",
  outline:
    "border border-purple/30 bg-surface text-purple hover:bg-purple-light",
  white: "bg-surface-elevated text-purple hover:bg-purple-light shadow-sm",
  ghost: "text-pink-dark hover:bg-surface-muted",
  whatsapp: "bg-green-600 text-white hover:bg-green-700 shadow-sm",
};

type ButtonProps = {
  href?: string;
  variant?: keyof typeof variants;
  className?: string;
  children: React.ReactNode;
  external?: boolean;
  type?: "button" | "submit";
  onClick?: () => void;
  fullWidth?: boolean;
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold leading-none transition-colors";

export default function Button({
  href,
  variant = "primary",
  className,
  children,
  external,
  type = "button",
  onClick,
  fullWidth,
}: ButtonProps) {
  const styles = cn(
    baseStyles,
    variants[variant],
    fullWidth && "w-full sm:w-auto",
    className
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={styles}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={styles}>
      {children}
    </button>
  );
}
