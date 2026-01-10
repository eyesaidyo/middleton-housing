import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: ["/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)"],
};

export default async function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const hostname = req.headers.get("host")!;

  // Verify if we are in the dashboard subdomain
  // This supports both dashboard.middleton.ng and dashboard.localhost:3000 (for testing)
  const isDashboard = hostname.startsWith("dashboard.");

  if (isDashboard) {
    // Rewrite all requests on the dashboard subdomain to the /dashboard path
    // e.g. dashboard.middleton.ng/login -> /dashboard/login
    // e.g. dashboard.middleton.ng/ -> /dashboard
    
    // Check if the path already starts with /dashboard to avoid infinite loops/double nesting
    // though usually the rewrite target is internal. 
    // If the user visits dashboard.middleton.ng/dashboard, it would rewrite to /dashboard/dashboard.
    // We might want to strip it or just trust the user handles urls correctly.
    // For simplicity, we just rewrite the path relative to /dashboard.
    
    url.pathname = `/dashboard${url.pathname}`;
    return NextResponse.rewrite(url);
  }
  
  // Normal handling for the main domain (landing page)
  return NextResponse.next();
}
