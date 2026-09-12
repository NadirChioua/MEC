import { siteConfig } from "@/data/site";
import { Icon } from "@/components/icons/Icon";

export function WhatsAppButton() {
  const href = `https://wa.me/${siteConfig.contact.whatsappNumber}`;

  return (
    <a
      className="whatsapp"
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Contacter MEC sur WhatsApp"
      data-track="floating-whatsapp"
      data-track-label="Bouton flottant — WhatsApp"
    >
      <span className="status-dot" aria-hidden="true" />
      <Icon name="phone" />
      <span>
        WhatsApp
        <small>MEC Assistant · En ligne</small>
      </span>
    </a>
  );
}
