import type { Article } from "../articles";
import type { Locale } from "../i18n";
import { articlesAr } from "./ar";
import { articlesEn } from "./en";
import { articlesEs } from "./es";
import { articlesNl } from "./nl";

/** Translated text of an article; slug, dates, image and sources stay those of the French original. */
export type ArticleTranslation = Pick<Article, "category" | "title" | "description" | "readingTime" | "intro" | "imageAlt" | "takeaways" | "sections" | "faq"> & {
  sources?: Article["sources"];
};

const byLocale: Partial<Record<Locale, Record<string, ArticleTranslation>>> = {
  nl: articlesNl,
  en: articlesEn,
  es: articlesEs,
  ar: articlesAr
};

/** The article in the requested language (falls back to French when a translation is missing). */
export function localizedArticle(locale: Locale, article: Article): Article {
  const translation = byLocale[locale]?.[article.slug];
  if (!translation) return article;
  return { ...article, ...translation, sources: translation.sources ?? article.sources };
}
