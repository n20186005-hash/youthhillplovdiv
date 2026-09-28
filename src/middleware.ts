import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware({
  ...routing,
  localePrefix: 'always'
});

export const config = {
  matcher: [
    '/',
    '/(bg|en|zh)/:path*',
    '/((?!api|_next|_vercel|_ipx|gallery|icons|sw\.js|manifest\.webmanifest|robots\.txt|sitemap\.xml|favicon\.ico|.*\\..*).*)'
  ],
  unstable_skipMiddleware: process.env.NEXT_OUTPUT === 'export',
};
