import { NextResponse } from "next/server";

export function proxy(request) {
  const token = request.cookies.get("auth-token");

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

// Protect the add-product route
export const config = {
  matcher: "/add-product/:path*",
};
