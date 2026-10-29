import Link from "next/link";
import { Icon } from "@/components/icons/Icon";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { landingPagesFor, landingPath } from "@/data/landing-pages";
import { getPageLocale, tr } from "@/lib/i18n-server";

/**
 * Homepage links to the commercial landing pages of the current language.
 * Gives each page a prominent internal link with a descriptive anchor (its title),
 * which helps search engines understand and rank them.
 */
export function KeyPages() {
  const pages = landingPagesFor(getPageLocale());
  if (!pages.length) return null;
  return (
    <section className="section">
      <div className="container">
        <SectionTitle
          center
          eyebrow="Expertises clés"
          title="Votre projet, étape par étape"
          text="Création de société, implantation, comptabilité et fiscalité : chaque parcours décrit ce que nous faisons, dans quel ordre."
        />
        <div className="grid three" style={{ marginTop: 36 }}>
          {pages.map((page) => (
            <Link className="card service-card reveal" href={landingPath(page)} key={page.slug} data-track={`home-key-${page.group}`} data-track-label={`Accueil — ${page.title}`}>
              <h3>{page.title}</h3>
              <p>{page.description}</p>
              <span className="card-link">
                {tr("Lire la suite")} <Icon name="arrow" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
