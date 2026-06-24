"use client";

import { FormEvent, useState } from "react";
import { services } from "@/data/services";

const consentText =
  "J'accepte que mes données personnelles soient collectées et traitées conformément à la loi n°09-08 relative à la protection des personnes physiques à l'égard du traitement des données à caractère personnel. Les informations recueillies sont utilisées uniquement pour répondre à ma demande.";

type Errors = Partial<Record<"name" | "email" | "service" | "message" | "consent" | "website", string>>;

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [success, setSuccess] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const nextErrors: Errors = {};

    if (!String(form.get("name") || "").trim()) nextErrors.name = "Indiquez votre nom complet.";
    if (!String(form.get("email") || "").includes("@")) nextErrors.email = "Indiquez une adresse email valide.";
    if (!String(form.get("service") || "")) nextErrors.service = "Sélectionnez le service souhaité.";
    if (String(form.get("message") || "").trim().length < 12) nextErrors.message = "Ajoutez un message plus précis.";
    if (!form.get("consent")) nextErrors.consent = "Le consentement est requis pour envoyer la demande.";
    if (String(form.get("website") || "").trim()) nextErrors.website = "Le formulaire n'a pas pu être envoyé.";

    setErrors(nextErrors);
    setSuccess(Object.keys(nextErrors).length === 0);
    if (Object.keys(nextErrors).length === 0) event.currentTarget.reset();
  }

  return (
    <form className="form-panel" onSubmit={handleSubmit} noValidate>
      <div className="form-grid">
        <div className="field">
          <label htmlFor="name">Nom complet</label>
          <input id="name" name="name" autoComplete="name" aria-describedby={errors.name ? "name-error" : undefined} />
          {errors.name ? <span className="error" id="name-error">{errors.name}</span> : null}
        </div>
        <div className="field">
          <label htmlFor="company">Entreprise</label>
          <input id="company" name="company" autoComplete="organization" />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" autoComplete="email" aria-describedby={errors.email ? "email-error" : undefined} />
          {errors.email ? <span className="error" id="email-error">{errors.email}</span> : null}
        </div>
        <div className="field">
          <label htmlFor="phone">Téléphone</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" />
        </div>
        <div className="field full">
          <label htmlFor="service">Service souhaité</label>
          <select id="service" name="service" defaultValue="" aria-describedby={errors.service ? "service-error" : undefined}>
            <option value="" disabled>Choisir un service</option>
            {services.map((service) => (
              <option key={service.slug} value={service.title}>{service.title}</option>
            ))}
          </select>
          {errors.service ? <span className="error" id="service-error">{errors.service}</span> : null}
        </div>
        <div className="field full">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" aria-describedby={errors.message ? "message-error" : undefined} />
          {errors.message ? <span className="error" id="message-error">{errors.message}</span> : null}
        </div>
        <div className="field" aria-hidden="true" style={{ display: "none" }}>
          <label htmlFor="website">Site web</label>
          <input id="website" name="website" tabIndex={-1} autoComplete="off" />
        </div>
        <div className="field full">
          <label className="checkbox" htmlFor="consent">
            <input id="consent" name="consent" type="checkbox" aria-describedby={errors.consent ? "consent-error" : undefined} />
            <span>{consentText}</span>
          </label>
          {errors.consent ? <span className="error" id="consent-error">{errors.consent}</span> : null}
        </div>
      </div>
      {success ? <p className="success" style={{ marginTop: 16 }}>Votre demande est prête à être transmise. Le raccordement email/backend reste à configurer.</p> : null}
      <button className="button primary" type="submit" style={{ marginTop: 18 }}>
        Envoyer ma demande <span aria-hidden="true">→</span>
      </button>
    </form>
  );
}
