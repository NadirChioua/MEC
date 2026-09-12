import { SectionTitle } from "@/components/ui/SectionTitle";
import { siteConfig } from "@/data/site";

export function ResourceBlock() {
  return (
    <section className="section band">
      <div className="container">
        <SectionTitle eyebrow="Ressources" title="Ressource à votre disposition" />
        <div className="resource-card" style={{ marginTop: 28 }}>
          <div>
            <h3>{siteConfig.resource.title}</h3>
            <p className="muted" style={{ marginTop: 10 }}>
              {siteConfig.resource.description}
            </p>
          </div>
          <a
            className="button primary"
            href={siteConfig.resource.href}
            target="_blank"
            rel="noreferrer"
            data-track="resource-block-download"
            data-track-label="Bloc ressource — Télécharger le guide"
          >
            {siteConfig.resource.cta}
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
