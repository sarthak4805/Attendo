import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // ✅ Public pages
  if (pathname === '/' || pathname === '/login') {
    return NextResponse.next();
  }

  // ✅ Allow static assets
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/images') ||
    pathname.match(/\.(png|jpg|jpeg|gif|svg|webp)$/)
  ) {
    return NextResponse.next();
  }

  // ✅ Check session cookie
  const token = request.cookies.get('session')?.value;
  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  // ✅ Role-based access control
  // Admin routes
  if (pathname.startsWith('/admin')) {
    // You can add additional role checking here if needed
    return NextResponse.next();
  }

  // Teacher routes
  if (pathname.startsWith('/teacher')) {
    return NextResponse.next();
  }

  // Student routes
  if (pathname.startsWith('/student')) {
    return NextResponse.next();
  }

  // Dashboard and other protected routes
  if (pathname.startsWith('/dashboard') || pathname.startsWith('/change-password')) {
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api).*)'],
};
