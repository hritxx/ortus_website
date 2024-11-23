import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  const adminPath = req.nextUrl.pathname.startsWith("/admin");

  if (adminPath && (!token || token.email !== process.env.ADMIN_EMAIL)) {
    return NextResponse.redirect(new URL("/auth/signin", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"], // Apply middleware to admin routes
};
