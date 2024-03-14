import createMiddleware from 'next-intl/middleware';
import {localePrefix,locales} from "./i18n"
 
export default createMiddleware({
  locales,
  localePrefix,
  defaultLocale: 'en'
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(id|en|hi)/:path*']
};