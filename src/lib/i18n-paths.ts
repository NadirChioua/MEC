import type { Locale } from "@/data/i18n";

/**
 * URL helpers shared by server and client code. Kept free of the translation
 * dictionary so client components can import them without bundling it.
 */

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
