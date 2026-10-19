import type { Metadata } from "next";
import type { Locale } from "@/data/i18n";
import { localizedPath, pageAlternates, trIn } from "@/lib/i18n-server";
import { createPageMetadata } from "@/lib/seo";

type PageMetaOptions = {
  /** French path of the page, e.g. "/about" */
  path: string;
  title: string;
  description: string;
  image?: string;
  keywords?: string[];
  absoluteTitle?: boolean;
  /** title and description are already in the target language */
  translated?: boolean;
};

/** Metadata of a page that exists in every language: translated title/description, canonical and hreflang. */
export function localizedMetadata(lang: Locale, { path, title, description, image, keywords, absoluteTitle, translated }: PageMetaOptions): Metadata {
  const t = (text: string) => (translated ? text : trIn(lang, text));
  return createPageMetadata({
    title: t(title),
    description: t(description),
    path: localizedPath(lang, path),
    image,
    keywords: keywords?.map((k) => trIn(lang, k)),
    absoluteTitle,
    lang,
    alternates: Object.fromEntries(Object.entries(pageAlternates(path)).filter(([code]) => code !== lang))
  });
}
