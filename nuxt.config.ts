// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/content',
    '@vueuse/nuxt',
    'motion-v/nuxt'
  ],

  ssr: false,

  devtools: {
    enabled: true
  },

  app: {
    baseURL: '/Portfolio/',
    head: {
      title: 'Rafli Setiawan - Full Stack Developer',
      meta: [
        { name: 'description', content: 'Rafli Setiawan - Full Stack Developer skilled in Laravel, React, Next.js, Vue.js, and modern web technologies. Building production-ready web applications.' }
      ]
    }
  },

  css: ['~/assets/css/main.css'],

  compatibilityDate: '2024-11-01',

  nitro: {
    prerender: {
      routes: [
        '/',
        '/about',
        '/projects',
        '/speaking',
        '/blog'
      ],
      crawlLinks: true
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})
