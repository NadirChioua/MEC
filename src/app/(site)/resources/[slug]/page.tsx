import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/seo/JsonLd";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Icon } from "@/components/icons/Icon";
import { articles, getArticle } from "@/data/articles";
import { siteConfig } from "@/data/site";
import { absoluteUrl, createPageMetadata } from "@/lib/seo";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};

  const metadata = createPageMetadata({
    title: article.title,
    description: article.description,
    path: `/resources/${article.slug}`,
    image: article.imageSrc,
    keywords: [article.category, "conseil entreprise Maroc", "Morocco Europe Consulting"]
  });

  return {
    ...metadata,
    openGraph: {
      ...metadata.openGraph,
      type: "article",
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      authors: [siteConfig.name]
    }
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const articleUrl = absoluteUrl(`/resources/${article.slug}`);
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: article.title,
      description: article.description,
      image: absoluteUrl(article.imageSrc),
      datePublished: article.publishedAt,
      dateModified: article.updatedAt,
      mainEntityOfPage: articleUrl,
      inLanguage: "fr-MA",
      author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
      publisher: {
        "@type": "Organization",
        name: siteConfig.name,
        logo: { "@type": "ImageObject", url: absoluteUrl("/images/brand/logo-main.webp") }
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: siteConfig.url },
        { "@type": "ListItem", position: 2, name: "Ressources", item: absoluteUrl("/resources") },
        { "@type": "ListItem", position: 3, name: article.title, item: articleUrl }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: article.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer }
      }))
    }
  ];

  const relatedArticles = articles.filter((item) => item.slug !== article.slug).slice(0, 3);

  return (
    <>
      <JsonLd data={structuredData} />
      <header className="article-hero">
        <div className="container article-hero-grid">
          <div>
            <nav className="breadcrumbs" aria-label="Fil d’Ariane">
              <Link href="/">Accueil</Link> &gt; <Link href="/resources">Ressources</Link> &gt; <span>{article.category}</span>
            </nav>
            <p className="eyebrow">{article.category}</p>
            <h1>{article.title}</h1>
            <p className="lead">{article.description}</p>
            <div className="article-meta">
              <span>Publié le 11 septembre 2026</span>
              <span>{article.readingTime} de lecture</span>
              <span>Par l’équipe MEC</span>
            </div>
          </div>
          <div className="article-cover">
            <Image src={article.imageSrc} alt={article.imageAlt} fill priority sizes="(max-width: 900px) 100vw, 36vw" />
          </div>
        </div>
      </header>

      <div className="container article-layout">
        <article className="article-content">
          <p className="article-intro">{article.intro}</p>

          <section className="article-takeaways" aria-labelledby="points-cles">
            <p className="eyebrow">Synthèse</p>
            <h2 id="points-cles">Les points clés</h2>
            <ul>
              {article.takeaways.map((item) => (
                <li key={item}><Icon name="check" /> <span>{item}</span></li>
              ))}
            </ul>
          </section>

          {article.sections.map((section) => (
            <section className="article-section" key={section.title}>
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.bullets ? (
                <ul>
                  {section.bullets.map((item) => <li key={item}>{item}</li>)}
                </ul>
              ) : null}
            </section>
          ))}

          <section className="article-section" aria-labelledby="questions-frequentes">
            <h2 id="questions-frequentes">Questions fréquentes</h2>
            <div className="faq-list">
              {article.faq.map((item) => (
                <details key={item.question}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </section>

          {article.sources.length ? (
            <section className="article-sources" aria-labelledby="sources-officielles">
              <h2 id="sources-officielles">Sources officielles et ressources</h2>
              <ul>
                {article.sources.map((source) => (
                  <li key={source.href}><a href={source.href} target="_blank" rel="noreferrer">{source.label}</a></li>
                ))}
              </ul>
              <p>Contenu informatif général. Les choix juridiques, fiscaux et réglementaires doivent être validés selon votre situation.</p>
            </section>
          ) : null}
        </article>

        <aside className="article-sidebar" aria-label="Navigation complémentaire">
          <div className="card article-sidebar-card">
            <p className="eyebrow">Besoin d’un diagnostic ?</p>
            <h2>Cadrez votre prochaine décision avec MEC</h2>
            <p>Présentez votre projet à notre équipe et identifiez les points financiers, comptables et opérationnels à sécuriser.</p>
            <Link className="button primary" href="/contact" data-track="article-cta-contact" data-track-label="Article — Demander un échange">Demander un échange <Icon name="arrow" /></Link>
          </div>
          <div className="card article-sidebar-card">
            <h2>À lire ensuite</h2>
            <ul className="footer-list">
              {relatedArticles.map((item) => (
                <li key={item.slug}><Link href={`/resources/${item.slug}`}>{item.title}</Link></li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
      <ContactCTA />
    </>
  );
}
