export default {
  srcDir: 'src/',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Leon Ebel — Full Stack Developer — Portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Portfolio of Leon Ebel — Front-/ Backend Developer based in Munich, Germany.',
      },
      {
        name: 'keywords',
        content:
          'Leon Ebel, Leon, Ebel, developer, development, entwickler, web developer, web development, Portfolio, portfolio, München, Munich, Germany, Deutschland',
      },
      { name: 'language', content: 'DE' },
      { name: 'theme-color', content: '#FF7860' },
      { name: 'application-name', content: 'www.ebelleon.de' },
      { name: 'apple-mobile-web-app-title', content: 'www.ebelleon.de' },
      { name: 'apple-mobile-app-status-bar-style', content: '#FF7860' },
      { name: 'msapplication-TileColor', content: '#FFFFFF' },
      {
        name: 'msapplication-square70x70logo',
        content: '/favicon/mstile-70x70.png',
      },
      {
        name: 'msapplication-TileImage',
        content: '/favicon/mstile-144x144.png',
      },
      {
        name: 'msapplication-square150x150logo',
        content: '/favicon/mstile-150x150.png',
      },
      {
        name: 'msapplication-square310x310logo',
        content: '/favicon/mstile-310x310.png',
      },
      {
        name: 'msapplication-wide310x150logo',
        content: '/favicon/mstile-310x150.png',
      },

      {
        property: 'og:title',
        content: 'Leon Ebel — Full Stack Developer — Portfolio',
      },
      { property: 'og:url', content: 'https://www.ebelleon.de' },
      { property: 'og:type', content: 'website' },
      {
        property: 'og:description',
        content:
          'This is the Portfolio of Leon Ebel. Currently working in Munich as a Full-Stack Web Developer.',
      },
      {
        property: 'og:image',
        content: 'https://www.ebelleon.de/_nuxt/img/26ec45e.jpg',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico' },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon/favicon-16x16.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '96x96',
        href: '/favicon/favicon-96x96.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '128x128',
        href: '/favicon/favicon-128x128.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '196x196',
        href: '/favicon/favicon-196x196.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '57x57',
        href: '/favicon/apple-touch-icon-57x57.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '60x60',
        href: '/favicon/apple-touch-icon-57x57.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '72x72',
        href: '/favicon/apple-touch-icon-57x57.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '76x76',
        href: '/favicon/apple-touch-icon-57x57.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '114x114',
        href: '/favicon/apple-touch-icon-57x57.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '120x120',
        href: '/favicon/apple-touch-icon-57x57.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '144x144',
        href: '/favicon/apple-touch-icon-57x57.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '152x152',
        href: '/favicon/apple-touch-icon-57x57.png',
      },
      {
        rel: 'preload',
        as: 'font',
        type: 'font/woff2',
        href: '/fonts/montserrat-v14-latin-700.woff2',
        crossorigin: 'anonymous',
      },
      {
        rel: 'preload',
        as: 'font',
        type: 'font/woff2',
        href: '/fonts/roboto-slab-v11-latin-300.woff2',
        crossorigin: 'anonymous',
      },
      {
        rel: 'preload',
        as: 'font',
        type: 'font/woff2',
        href: '/fonts/roboto-slab-v11-latin-regular.woff2',
        crossorigin: 'anonymous',
      },
      {
        rel: 'preload',
        as: 'font',
        type: 'font/woff2',
        href: '/fonts/roboto-slab-v11-latin-700.woff2',
        crossorigin: 'anonymous',
      },
      { rel: 'preconnect', href: 'https://cdn.jsdelivr.net' },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#FF7860' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: '~/plugins/contactFormSubmit' }],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/fontawesome-module
    [
      '@nuxtjs/fontawesome',
      {
        component: 'fa',
        icons: {
          solid: ['faLanguage', 'faAngleUp', 'faAngleDown'],
          brands: ['faLinkedin', 'faGithub', 'faTwitter'],
        },
      },
    ],
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    // Doc: https://github.com/nuxt-community/i18n-module
    [
      '@nuxtjs/i18n',
      {
        locales: [
          {
            name: 'Deutsch',
            code: 'de',
            iso: 'de-DE',
          },
          {
            name: 'English',
            code: 'en',
            iso: 'en-US',
          },
        ],
        defaultLocale: 'de',
        vueI18n: {
          fallbackLocale: 'de',
          messages: {
            de: require('./src/locales/de.json'),
            en: require('./src/locales/en.json'),
          },
        },
      },
    ],
    // Doc: https://github.com/pimlie/nuxt-matomo
    ['nuxt-matomo', { matomoUrl: '//analytics.ebelleon.de/', siteId: 1 }],
    // Doc: https://image.nuxtjs.org/getting-started/installation
    '@nuxt/image',
  ],
  styleResources: {
    scss: ['@/assets/scss/main.scss'],
  },
  /*
   ** Router definition
   */
  router: {
    middleware: 'matomo',
  },
  /*
   ** PWA module definition
   */
  pwa: {
    icon: {
      fileName: 'logo.png',
    },
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
}
