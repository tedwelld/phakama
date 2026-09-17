import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/breast-cancer-awareness",
    "/womens-health",
    "/programs",
    "/updates",
    "/gallery",
    "/get-involved",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
