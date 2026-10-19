import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const DEFAULT_OG_IMAGE = "/images/og-default.jpg";

/** hreflang codes used across the site. French targets every French speaker (Morocco, France, Belgium…). */
export type HrefLang = "fr" | "nl" | "en" | "es" | "ar";

const ogLocale: Record<HrefLang, string> = {
  fr: "fr_MA",
  nl: "nl_BE",
  en: "en_GB",
  es: "es_ES",
  ar: "ar_MA"
};

type MetadataOptions = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  keywords?: string[];
  noIndex?: boolean;
  /** language of this page (default: fr) */
  lang?: HrefLang;
  /** alternate language versions of this page, as site paths */
  alternates?: Partial<Record<HrefLang, string>>;
  /** use the title as-is, without the site-wide " | MEC Finance" suffix */
  absoluteTitle?: boolean;
};

export function absoluteUrl(path = "") {
  if (!path) return siteConfig.url;
  if (path.startsWith("http")) return path;
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export function hreflangMap(lang: HrefLang, path: string, alternates?: Partial<Record<HrefLang, string>>) {
  const all: Partial<Record<HrefLang, string>> = { ...alternates, [lang]: path };
  const languages: Record<string, string> = {};
  for (const [code, p] of Object.entries(all)) if (p !== undefined) languages[code] = absoluteUrl(p);
  // x-default points at the French version when there is one, otherwise at this page
  languages["x-default"] = absoluteUrl(all.fr ?? path);
  return languages;
}

export function createPageMetadata({
  title,
  description,
  path = "",
  image = DEFAULT_OG_IMAGE,
  keywords,
  noIndex = false,
  lang = "fr",
  alternates,
  absoluteTitle = false
}: MetadataOptions): Metadata {
  const url = absoluteUrl(path);
  // social networks (LinkedIn, WhatsApp) need JPEG/PNG previews: every .webp has a 1200×630 -og.jpg sibling
  const imageUrl = absoluteUrl(image.replace(/\.webp$/, "-og.jpg"));

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords,
    alternates: {
      canonical: url,
      languages: hreflangMap(lang, path, alternates)
    },
    openGraph: {
      type: "website",
      locale: ogLocale[lang],
      alternateLocale: Object.keys(alternates ?? {}).map((code) => ogLocale[code as HrefLang]),
      url,
      siteName: siteConfig.name,
      title,
      description,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: `${siteConfig.name} - ${title}` }]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl]
    },
    robots: noIndex
      ? { index: false, follow: false, nocache: true }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1
          }
        }
  };
}
