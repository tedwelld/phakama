import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/siteConfig";
import { searchPages } from "@/data/searchPages";
import { galleryPhotos } from "@/data/gallery";

export default function sitemap(): MetadataRoute.Sitemap {
  // Omit lastModified until a reliable per-page content date is available.
  // Rebuilding the app is not a content change.
  return Object.entries(searchPages).map(([route, page]) => ({
    url: new URL(route, siteConfig.url).href,
    images: [...new Set([
      page.image,
      ...(route === "/gallery" ? galleryPhotos.map((photo) => photo.src) : []),
    ])].map((image) => new URL(image, siteConfig.url).href),
  }));
}
