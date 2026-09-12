"use client";

import { createBrowserClient } from "@supabase/ssr";
import { MISSING_PUBLIC_ENV, supabasePublicKey, supabaseUrl } from "@/lib/supabase/env";
import type { Database } from "@/lib/supabase/types";

/**
 * Client Supabase navigateur.
 *
 * createBrowserClient — et non createServerClient : dans le navigateur il
 * n'existe ni `cookies()` de next/headers, ni accès serveur. Cette fonction
 * lit et écrit directement document.cookie, dans le format que le middleware
 * et les Server Components savent relire.
 *
 * Il ne sert qu'à l'authentification (connexion / déconnexion). Aucune
 * lecture de données analytics ne passe par ici.
 */
export function createSupabaseBrowserClient() {
  const url = supabaseUrl();
  const key = supabasePublicKey();

  if (!url || !key) throw new Error(MISSING_PUBLIC_ENV);

  return createBrowserClient<Database>(url, key);
}
