import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import "primeicons/primeicons.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import BottomNav from "@/components/layout/BottomNav";
import LenisProvider from "@/components/layout/LenisProvider";
import { NavbarThemeProvider } from "@/contexts/NavbarThemeContext";
import { siteConfig } from "@/data/siteConfig";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: `%s | ${siteConfig.shortName}`,
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  alternates: { canonical: "/" },
  icons: {
    icon: { url: "/images/phakama-logo.png", type: "image/png", sizes: "1254x1254" },
    apple: { url: "/images/phakama-logo.png", type: "image/png", sizes: "1254x1254" },
  },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    locale: "en_US",
    images: [{ url: "/images/phakama-logo.png", width: 1254, height: 1254, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["/images/phakama-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${cormorant.variable} ${inter.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{if(localStorage.getItem('phakama-theme')==='light')document.documentElement.classList.add('theme-light');}catch(e){}})();`,
          }}
        />
      </head>
      <body>
        <NavbarThemeProvider>
          <LenisProvider>
            <Navbar />
            <main className="pb-bottom-nav lg:pb-0">{children}</main>
            <Footer />
            <WhatsAppButton />
            <BottomNav />
          </LenisProvider>
        </NavbarThemeProvider>
      </body>
    </html>
  );
}
