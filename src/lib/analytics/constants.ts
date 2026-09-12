/** Identifiants partagés entre le tracker, l'API et le dashboard. */

/** Chemin de la page contact — base du widget "Parcours vers le contact". */
export const CONTACT_PATH = "/contact";

/** data-track du bouton d'envoi du formulaire de contact. */
export const CONTACT_SUBMIT_ID = "contact-form-submit";

/** Nombre maximum d'événements acceptés dans une seule requête /api/track. */
export const MAX_EVENTS_PER_BATCH = 20;

/** Rétention des événements bruts, en jours (aligné sur purge_old_events()). */
export const RETENTION_DAYS = 90;
