import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/icons/Icon";
import { PageHero } from "@/components/PageHero";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { insights } from "@/data/insights";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Ressources",
  description:
    "Ressources utiles pour mieux comprendre les enjeux financiers, fiscaux et reglementaires au Maroc et en Europe."
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        title="Ressources"
        intro="Retrouvez des ressources utiles pour mieux comprendre les enjeux financiers, fiscaux et reglementaires au Maroc et en Europe."
      />
      <section className="section">
        <div className="container resource-layout">
          <div className="resource-main">
            <div className="resource-card feature-resource reveal">
              <div>
                <p className="eyebrow">Guide officiel</p>
                <h2>{siteConfig.resource.title}</h2>
                <p className="lead" style={{ marginTop: 12 }}>
                  {siteConfig.resource.description}
                </p>
              </div>
              <a className="button primary" href={siteConfig.resource.href} target="_blank" rel="noreferrer">
                {siteConfig.resource.cta}
                <Icon name="arrow" />
              </a>
            </div>
            <div className="insight-grid two" style={{ marginTop: 24 }}>
              {insights.map((insight) => (
                <Link className="insight-card reveal" href={insight.href} key={insight.title}>
                  <div className={`insight-visual tone-${insight.imageTone}`}>
                    <img src={insight.imageSrc} alt={insight.imageAlt} loading="lazy" />
                    <span>{insight.category}</span>
                  </div>
                  <div className="insight-content">
                    <span className="meta">{insight.category} - {insight.date}</span>
                    <h3>{insight.title}</h3>
                    <p>{insight.description}</p>
                    <span className="card-link">
                      Consulter <Icon name="arrow" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <aside className="sidebar card resource-sidebar reveal">
            <label className="field" htmlFor="resource-search">
              <span>Recherche</span>
              <span className="search-field">
                <Icon name="search" />
                <input id="resource-search" type="search" placeholder="Mot-cle" />
              </span>
            </label>
            <h3>Categories</h3>
            <ul className="footer-list">
              <li>Fiscalite</li>
              <li>Strategie</li>
              <li>Pilotage financier</li>
              <li>Commerce Maroc-Europe</li>
            </ul>
            <h3 style={{ marginTop: 24 }}>Dernieres ressources</h3>
            <ul className="footer-list">
              {insights.map((insight) => (
                <li key={insight.title}>
                  <Link href={insight.href}>{insight.title}</Link>
                </li>
              ))}
            </ul>
            <h3 style={{ marginTop: 24 }}>Tags</h3>
            <div className="tag-list">
              {["Finance", "Maroc", "Europe", "Croissance", "Conformite"].map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </aside>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
