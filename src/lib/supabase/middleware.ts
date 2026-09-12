import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import { supabasePublicKey, supabaseUrl } from "@/lib/supabase/env";
import type { Database } from "@/lib/supabase/types";

/**
 * Rafraîchit la session Supabase et renvoie l'utilisateur courant.
 *
 * Le middleware est le seul endroit où l'on peut réécrire les cookies de
 * session à chaque requête : sans cela, un token expiré déconnecterait
 * l'administrateur en pleine consultation du dashboard.
 */
export async function updateSession(request: NextRequest) {
  let response = NextResponse.next({ request });

  const url = supabaseUrl();
  const publicKey = supabasePublicKey();

  if (!url || !publicKey) {
    return { response, user: null, configured: false as const };
  }

  const supabase = createServerClient<Database>(url, publicKey, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value }) => {
          request.cookies.set(name, value);
        });
        response = NextResponse.next({ request });
        cookiesToSet.forEach(({ name, value, options }) => {
          response.cookies.set(name, value, options);
        });
      }
    }
  });

  // getUser() (et non getSession()) : la validité du token est vérifiée
  // auprès de Supabase, un cookie forgé localement ne passe pas.
  const {
    data: { user }
  } = await supabase.auth.getUser();

  return { response, user, configured: true as const };
}
