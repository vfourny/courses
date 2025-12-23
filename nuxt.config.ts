export default defineNuxtConfig({
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    },
  },
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxtjs/color-mode',
    '@nuxt/icon',
  ],
  components: {
    dirs: [
      {
        path: '~/components',
        pathPrefix: false,
      },
    ],
  },
  eslint: {
    config: {
      standalone: false,
    },
  },
  devtools: {
    enabled: true,
  },
  colorMode: {
    preference: 'system',
    fallback: 'light',
  },
  css: ['~/assets/css/main.css'],
  content: {
    build: {
      markdown: {
        toc: {
          searchDepth: 1,
        },
      },
    },
  },
  compatibilityDate: '2024-07-11',
  nitro: {
    prerender: {
      routes: ['/'],
      crawlLinks: true,
      autoSubfolderIndex: false,
    },
  },
  icon: {
    provider: 'iconify',
  },
  typescript: {
    typeCheck: true,
    tsConfig: {
      extends: '@vfourny/node-toolkit/tsconfig/nuxt',
    },
  },
})
