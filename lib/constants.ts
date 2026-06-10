export const SITE_NAME = "Phakama Women's Organization";

export const SITE_TAGLINE =
  "Raising Awareness. Inspiring Hope. Supporting Women.";

export const SITE_DESCRIPTION =
  "Empowering women through health awareness, breast cancer education, and community support.";

export const CONTACT = {
  email: "admin@phakamawomens.org",
  phone: "+263779945479",
  phoneDisplay: "+263 779 945 479",
  whatsapp: "https://wa.me/263779945479",
} as const;

export const SOCIAL_LINKS = {
  facebook: "https://facebook.com/phakamawomens",
  instagram: "https://instagram.com/phakamawomens",
  x: "https://x.com/phakamawomens",
} as const;

// The six main pages. The header centers the logo (which links Home) and splits
// these into two groups of three — the first three sit left of the logo, the
// last three sit right of it.
export const PRIMARY_NAV_LINKS = [
  { href: "/about", label: "About Us", shortLabel: "About" },
  {
    href: "/breast-cancer-awareness",
    label: "Breast Cancer Awareness",
    shortLabel: "Awareness",
  },
  { href: "/womens-health", label: "Women's Health", shortLabel: "Health" },
  { href: "/programs", label: "Programs", shortLabel: "Programs" },
  { href: "/get-involved", label: "Get Involved", shortLabel: "Get Involved" },
  { href: "/contact", label: "Contact Us", shortLabel: "Contact" },
] as const;

// Full list (Home first) used by the mobile dropdown menu.
export const NAV_LINKS = [
  { href: "/", label: "Home", shortLabel: "Home" },
  ...PRIMARY_NAV_LINKS,
] as const;

export const FOOTER_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/breast-cancer-awareness", label: "Breast Cancer Awareness" },
  { href: "/womens-health", label: "Women's Health" },
  { href: "/programs", label: "Programs" },
  { href: "/contact", label: "Contact Us" },
] as const;

export const MEDICAL_DISCLAIMER =
  "This information is provided for awareness and education only. Anyone experiencing symptoms should consult a qualified healthcare professional.";

// Compact bottom bar on mobile — five slots max; overflow lives under "More".
export const MOBILE_BOTTOM_NAV_LINKS = [
  { href: "/", label: "Home", shortLabel: "Home", icon: "home" as const },
  { href: "/about", label: "About Us", shortLabel: "About", icon: "about" as const },
  {
    href: "/breast-cancer-awareness",
    label: "Breast Cancer Awareness",
    shortLabel: "Awareness",
    icon: "awareness" as const,
  },
  { href: "/programs", label: "Programs", shortLabel: "Programs", icon: "programs" as const },
  { href: "/contact", label: "Contact Us", shortLabel: "Contact", icon: "contact" as const },
] as const;

export const MOBILE_MORE_NAV_LINKS = [
  { href: "/womens-health", label: "Women's Health", shortLabel: "Health" },
  { href: "/get-involved", label: "Get Involved", shortLabel: "Involved" },
] as const;

