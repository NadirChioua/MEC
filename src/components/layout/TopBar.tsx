import { siteConfig } from "@/data/site";
import { Icon } from "@/components/icons/Icon";
import { LanguageSwitcher } from "@/components/layout/LanguageRuntime";

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
        <LanguageSwitcher />
      </div>
    </div>
  );
}
