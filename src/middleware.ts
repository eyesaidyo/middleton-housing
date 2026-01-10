import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};

export default async function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const hostname = req.headers.get("host") || "";

  // Check if we are on the dashboard subdomain
  // Supports: dashboard.middleton.ng AND dashboard.localhost:3000
  const isDashboard = hostname.startsWith("dashboard.");

  if (isDashboard) {
    // Rewrite the URL to /dashboard/ path
    // e.g. dashboard.middleton.ng/ -> /dashboard
    // e.g. dashboard.middleton.ng/settings -> /dashboard/settings
    
    // We strictly rewrite everything to the /dashboard folder
    // But we must be careful not to double-nest if the user manually typed /dashboard
    // basic logic: transparently map subdomain root to /dashboard folder
    
    url.pathname = `/dashboard${url.pathname}`;
    return NextResponse.rewrite(url);
  }

  // If not dashboard, let the request pass through (Landing Page)
  return NextResponse.next();
}
