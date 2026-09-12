/**
 * Résolution des variables d'environnement Supabase.
 *
 * Supabase a changé de format de clés. Les projets récents émettent :
 *   - une clé « publishable » (sb_publishable_…) qui remplace l'ancienne clé anon
 *   - une clé « secret »      (sb_secret_…)      qui remplace l'ancienne service_role
 *
 * Les deux générations fonctionnent avec @supabase/ssr. On accepte donc les
 * deux noms de variables, en donnant la priorité au format récent, pour ne
 * casser ni un projet existant ni un projet neuf.
 *
 * ⚠️ Les références à process.env.NEXT_PUBLIC_* doivent rester écrites en
 * toutes lettres : Next les remplace textuellement au build. Un accès
 * dynamique (process.env[nom]) ne serait pas substitué et vaudrait undefined
 * dans le navigateur.
 */

export function supabaseUrl() {
  return process.env.NEXT_PUBLIC_SUPABASE_URL;
}

/** Clé publique. Destinée à être exposée au navigateur : la RLS protège les données. */
export function supabasePublicKey() {
  return (
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ??
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );
}

/** Clé à privilèges élevés. Serveur uniquement — jamais préfixée NEXT_PUBLIC_. */
export function supabaseSecretKey() {
  return process.env.SUPABASE_SECRET_KEY ?? process.env.SUPABASE_SERVICE_ROLE_KEY;
}

/** Les identifiants publics sont-ils présents ? */
export function hasPublicCredentials() {
  return Boolean(supabaseUrl() && supabasePublicKey());
}

/** Les identifiants serveur sont-ils présents ? */
export function hasSecretCredentials() {
  return Boolean(supabaseUrl() && supabaseSecretKey());
}

/** Message d'erreur commun, pour ne pas le réécrire à cinq endroits. */
export const MISSING_PUBLIC_ENV =
  "Supabase non configuré : NEXT_PUBLIC_SUPABASE_URL et NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY sont requis.";

export const MISSING_SECRET_ENV =
  "Supabase non configuré : NEXT_PUBLIC_SUPABASE_URL et SUPABASE_SECRET_KEY sont requis.";
