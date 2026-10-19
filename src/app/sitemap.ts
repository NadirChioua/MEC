import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";
import { articles } from "@/data/articles";
import type { Locale } from "@/data/i18n";
import { allLandingPages, landingAlternates, landingPath, pageLocale } from "@/data/landing-pages";
import { localizedPath, pageAlternates } from "@/lib/i18n-server";
import { hreflangMap } from "@/lib/seo";

const LANGS: Locale[] = ["fr", "nl", "en", "es", "ar"];
const updatedAt = new Date("2026-10-19T00:00:00.000Z");

type Freq = "weekly" | "monthly";

/** One sitemap entry per language for a page that exists in every language, with hreflang alternates. */
function localized(path: string, priority: number, changeFrequency: Freq = "monthly", lastModified = updatedAt) {
  const alternates = pageAlternates(path);
  return LANGS.map((lang) => {
    const own = localizedPath(lang, path);
    return {
      url: `${siteConfig.url}${own === "/" ? "" : own}`,
      lastModified,
      changeFrequency,
      // translated versions rank slightly below the French original
      priority: lang === "fr" ? priority : Math.round(priority * 90) / 100,
      alternates: { languages: hreflangMap(lang, own, alternates) }
    };
  });
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...localized("/", 1, "weekly"),
    ...localized("/services", 0.9),
    ...localized("/contact", 0.9),
    ...localized("/about", 0.7),
    ...localized("/notre-equipe", 0.7),
    ...localized("/resources", 0.7),
    ...services.flatMap((service) => localized(`/services/${service.slug}`, 0.85)),
    ...articles.flatMap((article) => localized(`/resources/${article.slug}`, 0.8, "monthly", new Date(article.updatedAt))),
    ...allLandingPages.map((page) => ({
      url: `${siteConfig.url}${landingPath(page)}`,
      lastModified: updatedAt,
      changeFrequency: "monthly" as const,
      priority: pageLocale(page) === "fr" ? 0.95 : 0.9,
      alternates: { languages: hreflangMap(pageLocale(page), landingPath(page), landingAlternates(page)) }
    })),
    ...["/legal/mentions-legales", "/legal/confidentialite"].map((route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified: updatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.3
    }))
  ];
}
