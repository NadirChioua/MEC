import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Locale } from "@/data/i18n";
import { articles, getArticle } from "@/data/articles";
import { getService, services } from "@/data/services";
import { AboutContent, aboutMetadata } from "@/components/pages/AboutPage";
import { ArticleContent, articleMetadata } from "@/components/pages/ArticlePage";
import { ContactContent, contactMetadata } from "@/components/pages/ContactPage";
import { HomeContent, homeMetadata } from "@/components/pages/HomePage";
import { ResourcesContent, resourcesMetadata } from "@/components/pages/ResourcesPage";
import { ServiceDetailContent, serviceMetadata } from "@/components/pages/ServiceDetailPage";
import { ServicesContent, servicesMetadata } from "@/components/pages/ServicesPage";
import { TeamContent, teamMetadata } from "@/components/pages/TeamPage";
import { setPageLocale } from "@/lib/i18n-server";

/**
 * Route handlers for every page in every language. French routes (/about…) and
 * localized routes (/nl/about…) are one-liners that call these, so all languages
 * share the same components and stay in sync.
 */

/** Wraps localized content with its language (the root <html lang> is French). */
function Lang({ lang, children }: { lang: Locale; children: React.ReactNode }) {
  if (lang === "fr") return <>{children}</>;
  return (
    <div lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>
      {children}
    </div>
  );
}

function simplePage(metadata: (lang: Locale) => Metadata, Content: () => React.ReactElement) {
  return (lang: Locale) => ({
    metadata: metadata(lang),
    Page() {
      setPageLocale(lang);
      return (
        <Lang lang={lang}>
          <Content />
        </Lang>
      );
    }
  });
}

export const homeRoute = simplePage(homeMetadata, HomeContent);
export const aboutRoute = simplePage(aboutMetadata, AboutContent);
export const teamRoute = simplePage(teamMetadata, TeamContent);
export const contactRoute = simplePage(contactMetadata, ContactContent);
export const servicesRoute = simplePage(servicesMetadata, ServicesContent);
export const resourcesRoute = simplePage(resourcesMetadata, ResourcesContent);

type SlugProps = { params: Promise<{ slug: string }> };

export function serviceRoute(lang: Locale) {
  return {
    generateStaticParams: () => services.map((service) => ({ slug: service.slug })),
    async generateMetadata({ params }: SlugProps): Promise<Metadata> {
      const service = getService((await params).slug);
      return service ? serviceMetadata(lang, service) : {};
    },
    async Page({ params }: SlugProps) {
      const service = getService((await params).slug);
      if (!service) notFound();
      setPageLocale(lang);
      return (
        <Lang lang={lang}>
          <ServiceDetailContent service={service} />
        </Lang>
      );
    }
  };
}

export function articleRoute(lang: Locale) {
  return {
    generateStaticParams: () => articles.map((article) => ({ slug: article.slug })),
    async generateMetadata({ params }: SlugProps): Promise<Metadata> {
      const article = getArticle((await params).slug);
      return article ? articleMetadata(lang, article) : {};
    },
    async Page({ params }: SlugProps) {
      const article = getArticle((await params).slug);
      if (!article) notFound();
      setPageLocale(lang);
      return (
        <Lang lang={lang}>
          <ArticleContent article={article} />
        </Lang>
      );
    }
  };
}
