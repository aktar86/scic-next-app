import { NextResponse } from 'next/server';

export function middleware(request) {
  // Check if user is authenticated (check for auth token in cookies)
  const token = request.cookies.get('auth-token');
  
  // If no token, redirect to login
  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  
  // If token exists, allow access
  return NextResponse.next();
}

// Protect the add-product route
export const config = {
  matcher: '/add-product/:path*',
};
