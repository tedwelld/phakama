import type { Metadata } from "next";
import { searchPages, type SearchPagePath } from "@/data/searchPages";
import { siteConfig } from "@/data/siteConfig";

export function pageMetadata(path: SearchPagePath): Metadata {
  const page = searchPages[path];
  const title = path === "/" ? page.title : `${page.title} | ${siteConfig.shortName}`;
  return {
    title: { absolute: title },
    description: page.description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: path,
      siteName: siteConfig.name,
      title,
      description: page.description,
      locale: "en_ZW",
      images: [{ url: page.image, alt: page.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: page.description,
      images: [{ url: page.image, alt: page.imageAlt }],
    },
  };
}

export const organizationStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      alternateName: "Phakama Women's Organisation",
      url: siteConfig.url,
      description: siteConfig.description,
      logo: `${siteConfig.url}/images/phakama-womens-logo-638d84bf.png`,
      email: siteConfig.email,
      telephone: siteConfig.phone,
      areaServed: { "@type": "Place", name: "Hwange district, Zimbabwe" },
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      alternateName: siteConfig.shortName,
      inLanguage: "en-ZW",
      publisher: { "@id": `${siteConfig.url}/#organization` },
    },
  ],
};
