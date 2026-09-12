import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";
import { articles } from "@/data/articles";
import { seoLandingPages } from "@/data/landing-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/notre-equipe",
    "/services",
    "/resources",
    "/contact",
    "/legal/mentions-legales",
    "/legal/confidentialite"
  ];

  const updatedAt = new Date("2026-09-11T00:00:00.000Z");

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified: updatedAt,
      changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
      priority: route === "" ? 1 : route === "/contact" || route === "/services" ? 0.9 : 0.7
    })),
    ...services.map((service) => ({
      url: `${siteConfig.url}/services/${service.slug}`,
      lastModified: updatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.85
    })),
    ...seoLandingPages.map((page) => ({
      url: `${siteConfig.url}/${page.slug}`,
      lastModified: updatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.95
    })),
    ...articles.map((article) => ({
      url: `${siteConfig.url}/resources/${article.slug}`,
      lastModified: new Date(article.updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.8
    }))
  ];
}
