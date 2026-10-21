import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/data/i18n";
import { JsonLd } from "@/components/seo/JsonLd";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Icon } from "@/components/icons/Icon";
import { articles, type Article } from "@/data/articles";
import { localizedArticle } from "@/data/articles-i18n";
import { siteConfig } from "@/data/site";
import { getPageLocale, localizedPath, lp, tr } from "@/lib/i18n-server";
import { absoluteUrl } from "@/lib/seo";
import { localizedMetadata } from "./pageMeta";

const dateLocale: Record<Locale, string> = { fr: "fr-FR", nl: "nl-BE", en: "en-GB", es: "es-ES", ar: "ar-MA" };

export function articleMetadata(lang: Locale, frArticle: Article): Metadata {
  const article = localizedArticle(lang, frArticle);
  const metadata = localizedMetadata(lang, {
    path: `/resources/${frArticle.slug}`,
    title: article.title,
    description: article.description,
    image: article.imageSrc,
    translated: true
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

export function ArticleContent({ article: frArticle }: { article: Article }) {
  const lang = getPageLocale();
  const article = localizedArticle(lang, frArticle);
  const articleUrl = absoluteUrl(localizedPath(lang, `/resources/${article.slug}`));
  const published = new Intl.DateTimeFormat(dateLocale[lang], { day: "numeric", month: "long", year: "numeric" }).format(new Date(article.publishedAt));

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
      inLanguage: lang,
      author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
      publisher: {
        "@type": "Organization",
        name: siteConfig.name,
        logo: { "@type": "ImageObject", url: absoluteUrl("/images/brand/logo-main.png") }
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: tr("Accueil"), item: absoluteUrl(localizedPath(lang, "/")) },
        { "@type": "ListItem", position: 2, name: tr("Ressources"), item: absoluteUrl(localizedPath(lang, "/resources")) },
        { "@type": "ListItem", position: 3, name: article.title, item: articleUrl }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      inLanguage: lang,
      mainEntity: article.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer }
      }))
    }
  ];

  const relatedArticles = articles
    .filter((item) => item.slug !== article.slug)
    .slice(0, 3)
    .map((item) => localizedArticle(lang, item));

  return (
    <>
      <JsonLd data={structuredData} />
      <header className="article-hero">
        <div className="container article-hero-grid">
          <div>
            <nav className="breadcrumbs" aria-label={tr("Fil d’Ariane")}>
              <Link href={lp("/")}>{tr("Accueil")}</Link> &gt; <Link href={lp("/resources")}>{tr("Ressources")}</Link> &gt; <span>{article.category}</span>
            </nav>
            <p className="eyebrow">{article.category}</p>
            <h1>{article.title}</h1>
            <p className="lead">{article.description}</p>
            <div className="article-meta">
              <span>{tr("Publié le")} {published}</span>
              <span>{article.readingTime} {tr("de lecture")}</span>
              <span>{tr("Par l’équipe MEC")}</span>
            </div>
          </div>
          <div className="article-cover">
            <Image src={article.imageSrc} alt={article.imageAlt} fill priority fetchPriority="high" sizes="(max-width: 900px) 100vw, 36vw" />
          </div>
        </div>
      </header>

      <div className="container article-layout">
        <article className="article-content">
          <p className="article-intro">{article.intro}</p>

          <section className="article-takeaways" aria-labelledby="points-cles">
            <p className="eyebrow">{tr("Synthèse")}</p>
            <h2 id="points-cles">{tr("Les points clés")}</h2>
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
            <h2 id="questions-frequentes">{tr("Questions fréquentes")}</h2>
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
              <h2 id="sources-officielles">{tr("Sources officielles et ressources")}</h2>
              <ul>
                {article.sources.map((source) => (
                  <li key={source.href}><a href={source.href} target="_blank" rel="noreferrer">{source.label}</a></li>
                ))}
              </ul>
              <p>{tr("Contenu informatif général. Les choix juridiques, fiscaux et réglementaires doivent être validés selon votre situation.")}</p>
            </section>
          ) : null}
        </article>

        <aside className="article-sidebar" aria-label={tr("Navigation complémentaire")}>
          <div className="card article-sidebar-card">
            <p className="eyebrow">{tr("Besoin d’un diagnostic ?")}</p>
            <h2>{tr("Cadrez votre prochaine décision avec MEC")}</h2>
            <p>{tr("Présentez votre projet à notre équipe et identifiez les points financiers, comptables et opérationnels à sécuriser.")}</p>
            <Link className="button primary" href={lp("/contact")} data-track="article-cta-contact" data-track-label="Article — Demander un échange">{tr("Demander un échange")} <Icon name="arrow" /></Link>
          </div>
          <div className="card article-sidebar-card">
            <h2>{tr("À lire ensuite")}</h2>
            <ul className="footer-list">
              {relatedArticles.map((item) => (
                <li key={item.slug}><Link href={lp(`/resources/${item.slug}`)}>{item.title}</Link></li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
      <ContactCTA />
    </>
  );
}
