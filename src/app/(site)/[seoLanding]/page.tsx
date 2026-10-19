import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LandingView } from "@/components/sections/LandingView";
import { getSeoLandingPage, landingAlternates, landingPath, seoLandingPages } from "@/data/landing-pages";
import { createPageMetadata } from "@/lib/seo";

type LandingPageProps = { params: Promise<{ seoLanding: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return seoLandingPages.map((page) => ({ seoLanding: page.slug }));
}

export async function generateMetadata({ params }: LandingPageProps): Promise<Metadata> {
  const { seoLanding } = await params;
  const page = getSeoLandingPage(seoLanding);
  if (!page) return {};
  return createPageMetadata({
    title: page.seoTitle ?? page.title,
    absoluteTitle: Boolean(page.seoTitle),
    description: page.description,
    path: landingPath(page),
    image: page.imageSrc,
    keywords: page.keywords,
    alternates: landingAlternates(page)
  });
}

export default async function SeoLanding({ params }: LandingPageProps) {
  const { seoLanding } = await params;
  const page = getSeoLandingPage(seoLanding);
  if (!page) notFound();
  return <LandingView page={page} />;
}
