"use client";

import { FormEvent, useState } from "react";
import { services } from "@/data/services";

const consentText =
  "J’accepte que mes données personnelles soient collectées et traitées conformément à la loi n°09-08 relative à la protection des personnes physiques à l’égard du traitement des données à caractère personnel. Les informations recueillies sont utilisées uniquement pour répondre à ma demande.";

type Errors = Partial<Record<"name" | "email" | "service" | "message" | "consent" | "website" | "form", string>>;

type SubmitStatus = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    const nextErrors: Errors = {};

    const payload = {
      name: String(form.get("name") || "").trim(),
      company: String(form.get("company") || "").trim(),
      email: String(form.get("email") || "").trim(),
      phone: String(form.get("phone") || "").trim(),
      service: String(form.get("service") || "").trim(),
      message: String(form.get("message") || "").trim(),
      consent: Boolean(form.get("consent")),
      website: String(form.get("website") || "").trim()
    };

    if (!payload.name) nextErrors.name = "Indiquez votre nom complet.";
    if (!payload.email.includes("@")) nextErrors.email = "Indiquez une adresse email valide.";
    if (!payload.service) nextErrors.service = "Sélectionnez le service souhaité.";
    if (payload.message.length < 12) nextErrors.message = "Ajoutez un message plus précis.";
    if (!payload.consent) nextErrors.consent = "Le consentement est requis pour envoyer la demande.";
    if (payload.website) nextErrors.website = "Le formulaire n’a pas pu être envoyé.";

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle");
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const result = await response.json().catch(() => ({ message: "" }));

      if (!response.ok) {
        throw new Error(result.message || "Votre demande n’a pas pu être envoyée.");
      }

      formElement.reset();
      setErrors({});
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrors({
        form: error instanceof Error
          ? error.message
          : "Une erreur est survenue. Veuillez réessayer ou nous contacter par WhatsApp."
      });
    }
  }

  return (
    <form className="form-panel" onSubmit={handleSubmit} noValidate>
      <div className="form-grid">
        <div className="field">
          <label htmlFor="name">Nom complet</label>
          <input id="name" name="name" autoComplete="name" placeholder="Votre nom" aria-describedby={errors.name ? "name-error" : undefined} />
          {errors.name ? <span className="error" id="name-error">{errors.name}</span> : null}
        </div>
        <div className="field">
          <label htmlFor="company">Entreprise</label>
          <input id="company" name="company" autoComplete="organization" placeholder="Nom de l’entreprise" />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" autoComplete="email" aria-describedby={errors.email ? "email-error" : undefined} />
          {errors.email ? <span className="error" id="email-error">{errors.email}</span> : null}
        </div>
        <div className="field">
          <label htmlFor="phone">Téléphone</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="+212 ..." />
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
          <textarea id="message" name="message" placeholder="Expliquez brièvement votre besoin" aria-describedby={errors.message ? "message-error" : undefined} />
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

      <div aria-live="polite">
        {status === "success" ? (
          <p className="success" style={{ marginTop: 16 }}>
            Votre demande a bien été envoyée. Notre équipe vous contactera rapidement.
          </p>
        ) : null}
        {errors.form ? (
          <p className="error" style={{ marginTop: 16 }}>
            {errors.form}
          </p>
        ) : null}
      </div>

      <button className="button primary" type="submit" disabled={status === "sending"} style={{ marginTop: 18 }}>
        {status === "sending" ? "Envoi en cours..." : "Envoyer ma demande"} <span aria-hidden="true">→</span>
      </button>
    </form>
  );
}
