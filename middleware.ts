import { NextRequest, NextResponse } from "next/server";

const adminCookieKey = "mec-admin-auth";
const adminCookieValue = "mec-admin-authorized";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isLoginPage = pathname === "/admin/login";
  const hasSession = request.cookies.get(adminCookieKey)?.value === adminCookieValue;

  if (isLoginPage && hasSession) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  if (!isLoginPage && !hasSession) {
    const loginUrl = new URL("/admin/login", request.url);
    loginUrl.searchParams.set("next", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"]
};
