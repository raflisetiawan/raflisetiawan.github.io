<script setup lang="ts">
const colorMode = useColorMode()

const color = computed(() => colorMode.value === 'dark' ? '#0a0a0f' : '#f8f9ff')

// Enhanced SEO Configuration
useHead({
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { key: 'theme-color', name: 'theme-color', content: color },
    // Additional SEO meta tags
    { name: 'author', content: 'Rafli Setiawan' },
    { name: 'robots', content: 'index, follow' },
    { name: 'googlebot', content: 'index, follow' },
    // Keywords for search engines
    { name: 'keywords', content: 'Rafli Setiawan, Full Stack Developer, Web Developer, Laravel, React, Next.js, Vue.js, Nuxt.js, Node.js, TypeScript, JavaScript, PHP, Indonesia, Frontend Developer, Backend Developer' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' },
    { rel: 'canonical', href: 'https://raflisetiawan.dev' },
    // Preconnect for performance
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://avatars.githubusercontent.com' }
  ],
  htmlAttrs: {
    lang: 'id'
  }
})

// Enhanced SEO Meta
useSeoMeta({
  titleTemplate: '%s | Rafli Setiawan - Full Stack Developer',
  // Open Graph
  ogType: 'website',
  ogSiteName: 'Rafli Setiawan Portfolio',
  ogImage: 'https://avatars.githubusercontent.com/u/111565262?v=4',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogLocale: 'id_ID',
  // Twitter Card
  twitterCard: 'summary_large_image',
  twitterSite: '@raflisetiawan',
  twitterCreator: '@raflisetiawan',
  twitterImage: 'https://avatars.githubusercontent.com/u/111565262?v=4'
})

// Structured Data (JSON-LD) for rich snippets
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        'name': 'Rafli Setiawan',
        'jobTitle': 'Full Stack Developer',
        'url': 'https://raflisetiawan.dev',
        'image': 'https://avatars.githubusercontent.com/u/111565262?v=4',
        'email': 'raflisetiawan006@mail.com',
        'telephone': '+6281334388233',
        'sameAs': [
          'https://github.com/raflisetiawan',
          'https://linkedin.com/in/rafli-setiawan-820b62227'
        ],
        'alumniOf': {
          '@type': 'EducationalOrganization',
          'name': 'Universitas Internasional Semen Indonesia'
        },
        'knowsAbout': [
          'Laravel',
          'React.js',
          'Next.js',
          'Vue.js',
          'Nuxt.js',
          'Node.js',
          'TypeScript',
          'JavaScript',
          'PHP',
          'Go',
          'PostgreSQL',
          'MySQL',
          'MongoDB'
        ],
        'worksFor': {
          '@type': 'Organization',
          'name': 'PT. AZ Logistic'
        }
      })
    }
  ]
})

const [{ data: navigation }, { data: files }] = await Promise.all([
  useAsyncData('navigation', () => {
    return Promise.all([
      queryCollectionNavigation('blog')
    ])
  }, {
    transform: data => data.flat()
  }),
  useLazyAsyncData('search', () => {
    return Promise.all([
      queryCollectionSearchSections('blog')
    ])
  }, {
    server: false,
    transform: data => data.flat()
  })
])
</script>

<template>
  <UApp>
    <NuxtLayout>
      <UMain class="relative">
        <NuxtPage />
      </UMain>
    </NuxtLayout>

    <ClientOnly>
      <LazyUContentSearch
        :files="files"
        :navigation="navigation"
        shortcut="meta_k"
        :links="navLinks"
        :fuse="{ resultLimit: 42 }"
      />
    </ClientOnly>
  </UApp>
</template>
