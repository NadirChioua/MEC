import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/data/i18n";
import { Icon } from "@/components/icons/Icon";
import { PageHero } from "@/components/PageHero";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { insights } from "@/data/insights";
import { siteConfig } from "@/data/site";
import { lp, tr } from "@/lib/i18n-server";
import { localizedMetadata } from "./pageMeta";

export const resourcesMetadata = (lang: Locale) =>
  localizedMetadata(lang, {
    path: "/resources",
    title: "Guides finance, fiscalité et entreprise au Maroc",
    description: "Guides pratiques MEC sur la création d’entreprise au Maroc, la trésorerie, le BFR, le pilotage financier, l’audit et les opérations Maroc-Europe."
  });

const categories = ["Fiscalité", "Stratégie", "Pilotage financier", "Commerce Maroc-Europe"];
const tags = ["Finance", "Maroc", "Europe", "Croissance", "Conformité"];

export function ResourcesContent() {
  return (
    <>
      <PageHero
        title="Ressources"
        intro="Retrouvez des ressources utiles pour mieux comprendre les enjeux financiers, fiscaux et réglementaires au Maroc et en Europe."
      />
      <section className="section">
        <div className="container resource-layout">
          <div className="resource-main">
            <div className="resource-card feature-resource reveal">
              <div>
                <p className="eyebrow">{tr("Guide officiel")}</p>
                <h2>{tr(siteConfig.resource.title)}</h2>
                <p className="lead" style={{ marginTop: 12 }}>
                  {tr(siteConfig.resource.description)}
                </p>
              </div>
              <a
                className="button primary"
                href={siteConfig.resource.href}
                target="_blank"
                rel="noreferrer"
                data-track="resources-page-download"
                data-track-label="Ressources — Télécharger le guide"
              >
                {tr(siteConfig.resource.cta)}
                <Icon name="arrow" />
              </a>
            </div>
            <div className="insight-grid two" style={{ marginTop: 24 }}>
              {insights.map((insight) => (
                <Link className="insight-card reveal" href={lp(insight.href)} key={insight.title}>
                  <div className={`insight-visual tone-${insight.imageTone}`}>
                    <Image src={insight.imageSrc} width={1600} height={840} sizes="(max-width: 900px) 100vw, 40vw" alt={tr(insight.imageAlt)} />
                    <span>{tr(insight.category)}</span>
                  </div>
                  <div className="insight-content">
                    <span className="meta">{tr(insight.category)} - {tr(insight.date)}</span>
                    <h3>{tr(insight.title)}</h3>
                    <p>{tr(insight.description)}</p>
                    <span className="card-link">
                      {tr("Consulter")} <Icon name="arrow" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <aside className="sidebar card resource-sidebar reveal">
            <p className="eyebrow">{tr("Centre de ressources")}</p>
            <p>{tr("Des réponses structurées, datées et reliées aux sources officielles pour préparer vos décisions.")}</p>
            <h3>{tr("Catégories")}</h3>
            <ul className="footer-list">
              {categories.map((item) => (
                <li key={item}>{tr(item)}</li>
              ))}
            </ul>
            <h3 style={{ marginTop: 24 }}>{tr("Dernières ressources")}</h3>
            <ul className="footer-list">
              {insights.map((insight) => (
                <li key={insight.title}>
                  <Link href={lp(insight.href)}>{tr(insight.title)}</Link>
                </li>
              ))}
            </ul>
            <h3 style={{ marginTop: 24 }}>{tr("Tags")}</h3>
            <div className="tag-list">
              {tags.map((tag) => (
                <span key={tag}>{tr(tag)}</span>
              ))}
            </div>
          </aside>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
