import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LandingView } from "@/components/sections/LandingView";
import { getLandingPage, landingAlternates, landingPagesFor, landingPath } from "@/data/landing-pages";
import { createPageMetadata, type HrefLang } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

/** Builds the route handlers for one language folder (/nl, /en, /es, /ar). */
export function landingRoute(lang: HrefLang) {
  return {
    generateStaticParams() {
      return landingPagesFor(lang).map((page) => ({ slug: page.slug }));
    },

    async generateMetadata({ params }: Props): Promise<Metadata> {
      const { slug } = await params;
      const page = getLandingPage(lang, slug);
      if (!page) return {};
      return createPageMetadata({
        title: page.seoTitle ?? page.title,
        absoluteTitle: Boolean(page.seoTitle),
        description: page.description,
        path: landingPath(page),
        image: page.imageSrc,
        keywords: page.keywords,
        lang,
        alternates: landingAlternates(page)
      });
    },

    async Page({ params }: Props) {
      const { slug } = await params;
      const page = getLandingPage(lang, slug);
      if (!page) notFound();
      return <LandingView page={page} />;
    }
  };
}
