"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { locales, translations, type Locale } from "@/data/i18n";

const storageKey = "mec-locale";
const selector = "script, style, noscript, svg, input, textarea, select";
const textSources = new WeakMap<Text, string>();
const attributeSources = new WeakMap<HTMLElement, Record<string, string>>();

/** Translated landing pages live under /nl, /en, /es and /ar: the URL decides their language. */
function localeFromPath(pathname: string | null): Locale | null {
  const prefix = pathname?.split("/")[1];
  return prefix && prefix !== "fr" && locales.some((locale) => locale.code === prefix) ? (prefix as Locale) : null;
}

/** Server-rendered language version of the current page, if any (from its hreflang links). */
function alternateUrl(locale: Locale) {
  const link = document.querySelector<HTMLLinkElement>(`link[rel="alternate"][hreflang="${locale}"]`);
  return link?.href ?? null;
}

function getInitialLocale(): Locale {
  if (typeof window === "undefined") return "fr";
  const fromPath = localeFromPath(window.location.pathname);
  if (fromPath) return fromPath;
  const saved = window.localStorage.getItem(storageKey) as Locale | null;
  return locales.some((locale) => locale.code === saved) ? saved! : "fr";
}

function findTranslation(text: string, target: Locale) {
  const clean = text.trim().replace(/\s+/g, " ");
  const entry = translations.find((item) => Object.values(item).some((value) => value.trim().replace(/\s+/g, " ") === clean));
  return entry?.[target];
}

function replaceTextPreservingSpacing(original: string, translated: string) {
  const prefix = original.match(/^\s*/)?.[0] ?? "";
  const suffix = original.match(/\s*$/)?.[0] ?? "";
  return `${prefix}${translated}${suffix}`;
}

function translateDom(locale: Locale) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent || parent.closest(selector)) return NodeFilter.FILTER_REJECT;
      return node.textContent?.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    }
  });

  const textNodes: Text[] = [];
  while (walker.nextNode()) textNodes.push(walker.currentNode as Text);

  textNodes.forEach((node) => {
    const value = node.textContent ?? "";
    const source = textSources.get(node) ?? value;
    textSources.set(node, source);
    const translated = findTranslation(source, locale) ?? findTranslation(value, locale);
    const nextValue = translated ? replaceTextPreservingSpacing(value, translated) : "";
    if (translated && nextValue !== value) node.textContent = nextValue;
  });

  document.querySelectorAll<HTMLElement>("option").forEach((element) => {
    const value = element.textContent ?? "";
    const source = element.dataset.i18nSource ?? value;
    element.dataset.i18nSource = source;
    const translated = findTranslation(source, locale) ?? findTranslation(value, locale);
    const nextValue = translated ? replaceTextPreservingSpacing(value, translated) : "";
    if (translated && nextValue !== value) element.textContent = nextValue;
  });

  document.querySelectorAll<HTMLElement>("[placeholder], [title], [aria-label], [alt]").forEach((element) => {
    ["placeholder", "title", "aria-label", "alt"].forEach((attribute) => {
      const value = element.getAttribute(attribute);
      if (!value) return;
      const sources = attributeSources.get(element) ?? {};
      const source = sources[attribute] ?? value;
      attributeSources.set(element, { ...sources, [attribute]: source });
      const translated = findTranslation(source, locale) ?? findTranslation(value, locale);
      if (translated && translated !== value) element.setAttribute(attribute, translated);
    });
  });
}

export function LanguageRuntime() {
  const [chosen, setLocale] = useState<Locale>(getInitialLocale);
  const pathname = usePathname();
  // translated pages (/nl, /en, /es, /ar) impose their language, including after client-side navigation
  const locale = localeFromPath(pathname) ?? chosen;
  const current = useMemo(() => locales.find((item) => item.code === locale) ?? locales[0], [locale]);

  useEffect(() => {
    window.localStorage.setItem(storageKey, locale);
    document.documentElement.lang = locale;
    document.documentElement.dir = current.dir;
    document.documentElement.dataset.locale = locale;
    translateDom(locale);

    const observer = new MutationObserver(() => translateDom(locale));
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [locale, current.dir]);

  useEffect(() => {
    const handler = (event: Event) => {
      const custom = event as CustomEvent<Locale>;
      if (custom.detail) setLocale(custom.detail);
    };
    window.addEventListener("mec:locale", handler);
    return () => window.removeEventListener("mec:locale", handler);
  }, []);

  return null;
}

export function LanguageSwitcher() {
  const [chosen, setLocale] = useState<Locale>(getInitialLocale);
  const pathname = usePathname();
  const locale = localeFromPath(pathname) ?? chosen;

  // stay in sync with switches made elsewhere (other switcher instance, runtime)
  useEffect(() => {
    const handler = (event: Event) => {
      const custom = event as CustomEvent<Locale>;
      if (custom.detail) setLocale(custom.detail);
    };
    window.addEventListener("mec:locale", handler);
    return () => window.removeEventListener("mec:locale", handler);
  }, []);

  const selectLocale = (nextLocale: Locale) => {
    // prefer the indexable version of this page in that language when it exists
    const target = alternateUrl(nextLocale);
    if (target && new URL(target).pathname !== window.location.pathname) {
      window.localStorage.setItem(storageKey, nextLocale);
      // same path on the current domain (works on preview deployments too)
      window.location.assign(new URL(target).pathname);
      return;
    }
    setLocale(nextLocale);
    window.dispatchEvent(new CustomEvent("mec:locale", { detail: nextLocale }));
  };

  return (
    <div className="language-switcher" aria-label="Select language">
      {locales.map((language) => (
        <button
          key={language.code}
          className={language.code === locale ? "active" : ""}
          type="button"
          onClick={() => selectLocale(language.code)}
          title={language.label}
          data-track={`language-switch-${language.code}`}
          data-track-label={`Langue — ${language.label}`}
        >
          {language.nativeLabel}
        </button>
      ))}
    </div>
  );
}
