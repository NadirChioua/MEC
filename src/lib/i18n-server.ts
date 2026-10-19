import { cache } from "react";
import { translations, type Locale } from "@/data/i18n";

/**
 * Server-side translation for the localized pages (/nl, /en, /es, /ar).
 *
 * Components keep their French text and wrap it in tr("…"). On a French page tr()
 * returns the text unchanged; on a localized page it returns the translation from
 * the shared dictionary (src/data/i18n.ts), so every language is real, indexable
 * HTML. The page sets its locale once with setPageLocale(); the value lives in a
 * per-request React cache, so concurrent renders never mix languages.
 */

const store = cache(() => ({ locale: "fr" as Locale }));

export function setPageLocale(locale: Locale) {
  store().locale = locale;
}

export function getPageLocale(): Locale {
  return store().locale;
}

const norm = (text: string) => text.replace(/[’‘]/g, "'").replace(/\s+/g, " ").trim();

let index: Map<string, Record<Locale, string>> | null = null;
function lookup(fr: string) {
  if (!index) {
    index = new Map();
    for (const entry of translations) index.set(norm(entry.fr), entry);
  }
  return index.get(norm(fr));
}

const missing = new Set<string>();

/** Translate a French string into an explicit locale. */
export function trIn(locale: Locale, fr: string): string {
  if (locale === "fr" || !fr) return fr;
  const entry = lookup(fr);
  if (entry?.[locale]) return entry[locale];
  if (process.env.I18N_REPORT && !missing.has(fr)) {
    missing.add(fr);
    console.warn(`[i18n missing] ${JSON.stringify(fr)}`);
  }
  return fr;
}

/** Translate a French string into the current page's locale. */
export function tr(fr: string): string {
  return trIn(getPageLocale(), fr);
}

/** Pages that exist in every language. Anything else (legal pages…) stays French. */
const LOCALIZED = [/^\/$/, /^\/about$/, /^\/notre-equipe$/, /^\/services(\/[^/]+)?$/, /^\/contact$/, /^\/resources(\/[^/]+)?$/];

export function isLocalizedPath(path: string) {
  return LOCALIZED.some((re) => re.test(path));
}

/** Path of a French page in a given locale. */
export function localizedPath(locale: Locale, path: string) {
  if (locale === "fr" || !path.startsWith("/") || !isLocalizedPath(path)) return path;
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}

/** Internal link in the current page's locale. */
export function lp(path: string) {
  return localizedPath(getPageLocale(), path);
}

/** hreflang alternates of a localized page, as site paths. */
export function pageAlternates(path: string) {
  return {
    fr: path,
    nl: localizedPath("nl", path),
    en: localizedPath("en", path),
    es: localizedPath("es", path),
    ar: localizedPath("ar", path)
  };
}
