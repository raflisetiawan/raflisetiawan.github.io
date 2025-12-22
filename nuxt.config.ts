// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Required: put modules first
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/content',
    '@vueuse/nuxt',
    'nuxt-og-image',
    'motion-v/nuxt',
    '@nuxtjs/mcp-toolkit'
  ],

  // GitHub Pages Configuration
  ssr: false,
  app: {
    baseURL: '/Portfolio/',
    head: {
      title: 'Rafli Setiawan - Full Stack Developer',
      meta: [
        { name: 'description', content: 'Rafli Setiawan - Full Stack Developer skilled in Laravel, React, Next.js, Vue.js, and modern web technologies. Building production-ready web applications.' }
      ]
    }
  },

  site: {
    url: 'https://raflisetiawan.github.io/Portfolio',
    name: 'Rafli Setiawan Portfolio'
  },

  css: ['~/assets/css/main.css'],

  compatibilityDate: '2024-11-01',

  devtools: {
    enabled: true
  },

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

  ogImage: {
    enabled: true,
    defaults: {
      component: 'NuxtSeo',
      width: 1200,
      height: 630
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