module.exports = {
  env: {
    ADMIN_URL: process.env.ADMIN_URL,
  },
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'tr', 'ru'],
    defaultLocale: 'en',
    domains: [
      {
        domain: '/en',
        defaultLocale: 'en',
      },
      {
        domain: '/tr',
        defaultLocale: 'tr',
      },
      {
        domain: '/ru',
        defaultLocale: 'ru',
      },
    ],
  },
}
