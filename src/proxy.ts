import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Match all request paths except for
  // - _next (Next.js internals)
  // - api, _vercel (static assets, etc.)
  // - favicon.ico, images, svg files
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};

