module.exports = {
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
