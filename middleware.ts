import { NextResponse, type NextRequest } from "next/server";
import { updateSession } from "@/lib/supabase/middleware";

const LOGIN_PATH = "/admin/login";

/**
 * Garde d'accès du back-office.
 *
 * Le middleware rafraîchit la session Supabase à chaque requête et bloque
 * les visiteurs non authentifiés. L'appartenance à `admin_users` est
 * vérifiée une seconde fois dans le layout /admin : la garder hors du
 * middleware évite une requête base de données sur chaque navigation,
 * et le layout enveloppe de toute façon toutes les pages protégées.
 */
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isLoginPage = pathname === LOGIN_PATH;

  const { response, user, configured } = await updateSession(request);

  // Supabase pas encore configuré : on laisse passer vers la page de login,
  // qui affiche alors un message d'installation plutôt qu'une boucle de
  // redirection incompréhensible.
  if (!configured) {
    if (isLoginPage) return response;
    const loginUrl = new URL(LOGIN_PATH, request.url);
    return NextResponse.redirect(loginUrl);
  }

  if (isLoginPage) {
    if (user) return NextResponse.redirect(new URL("/admin", request.url));
    return response;
  }

  if (!user) {
    const loginUrl = new URL(LOGIN_PATH, request.url);
    loginUrl.searchParams.set("next", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return response;
}

export const config = {
  matcher: ["/admin/:path*"]
};
