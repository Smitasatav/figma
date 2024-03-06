/** @type {import('next').NextConfig} */

const nextConfig = {
   debug: process.env.NODE_ENV === 'development',
    i18n: {
      locales: ['en', 'es'],
      defaultLocale: 'en',
    },
};

export default nextConfig;
