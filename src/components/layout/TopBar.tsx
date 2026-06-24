import { siteConfig } from "@/data/site";
import { Icon } from "@/components/icons/Icon";

export function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar-inner">
        <ul className="topbar-list" aria-label="Informations de contact">
          <li><Icon name="phone" />{siteConfig.contact.phone}</li>
          <li className="hide-mobile"><Icon name="email" />{siteConfig.contact.email}</li>
          <li className="hide-mobile"><Icon name="location" />{siteConfig.contact.address}</li>
          <li><Icon name="time" />{siteConfig.contact.hours}</li>
        </ul>
        <div className="language-switcher" aria-label="Sélecteur de langue">
          {siteConfig.languages.map((language) => (
            <span
              key={language.code}
              className={language.enabled ? "" : "disabled"}
              aria-disabled={!language.enabled}
              title={language.enabled ? language.label : `${language.label} - bientôt disponible`}
            >
              {language.code}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
