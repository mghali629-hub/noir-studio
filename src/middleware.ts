import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/checkout') || pathname.startsWith('/orders') || pathname.startsWith('/wishlist')) {
    const token = request.cookies.get('next-auth.session-token') || request.cookies.get('noir-auth-token');
    if (!token) {
      const loginUrl = new URL('/cart', request.url);
      loginUrl.searchParams.set('callbackUrl', encodeURIComponent(pathname));
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/checkout/:path*', '/orders/:path*', '/wishlist/:path*'],
};
