import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import Navbar from "@/components/Navbar";
import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/constants";
import { themeInitScript } from "@/lib/theme";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} | Women's Health & Breast Cancer Awareness`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Phakama Women's Organization",
    "Women's health Zimbabwe",
    "Breast cancer awareness",
    "Breast cancer education",
    "Women empowerment",
    "Health awareness organization",
    "Community health outreach",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full scroll-smooth`}
      data-theme="light"
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col antialiased">
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
        <Navbar />
        <main className="flex-1 pb-[calc(3.5rem+env(safe-area-inset-bottom))] xl:pb-0">
          {children}
        </main>
        <Footer />
        <BottomNav />
      </body>
    </html>
  );
}
