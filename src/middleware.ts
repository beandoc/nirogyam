import { NextRequest, NextResponse } from 'next/server';

const locales = ['en', 'hi'];
const defaultLocale = 'en';

function getLocale(request: NextRequest) {
  const acceptLanguage = request.headers.get('accept-language');
  if (acceptLanguage) {
    const preferredLocales = acceptLanguage.split(',').map((lang) => lang.split(';')[0]);
    for (const locale of preferredLocales) {
      const generalLocale = locale.split('-')[0];
      if (locales.includes(generalLocale)) {
        return generalLocale;
      }
    }
  }
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next) and assets
    '/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)',
  ],
};
