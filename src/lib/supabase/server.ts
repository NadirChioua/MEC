import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { MISSING_PUBLIC_ENV, supabasePublicKey, supabaseUrl } from "@/lib/supabase/env";
import type { Database } from "@/lib/supabase/types";

/**
 * Client Supabase lié à la session de l'utilisateur (cookies httpOnly).
 *
 * C'est ce client que le dashboard utilise pour lire les données : la RLS
 * s'applique donc pleinement, et seul un compte présent dans admin_users
 * peut voir la moindre ligne d'analytics.
 */
export async function createSupabaseServerClient() {
  const cookieStore = await cookies();
  const url = supabaseUrl();
  const key = supabasePublicKey();

  if (!url || !key) throw new Error(MISSING_PUBLIC_ENV);

  return createServerClient<Database>(url, key, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) => {
            cookieStore.set(name, value, options);
          });
        } catch {
          // Appelé depuis un Server Component : l'écriture de cookies y est
          // interdite. Le middleware rafraîchit déjà la session, on ignore.
        }
      }
    }
  });
}

export { hasPublicCredentials } from "@/lib/supabase/env";
