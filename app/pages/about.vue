<script setup lang="ts">
const { data: page } = await useAsyncData('about', () => {
  return queryCollection('about').first()
})
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true
  })
}

const { global } = useAppConfig()

useSeoMeta({
  title: page.value?.seo?.title || page.value?.title,
  ogTitle: page.value?.seo?.title || page.value?.title,
  description: page.value?.seo?.description || page.value?.description,
  ogDescription: page.value?.seo?.description || page.value?.description
})
</script>

<template>
  <UPage v-if="page">
    <UPageHero
      :title="page.title"
      :description="page.description"
      orientation="horizontal"
      :ui="{
        container: 'lg:flex sm:flex-row items-center gap-8',
        title: '!mx-0 text-left gradient-text text-glow',
        description: '!mx-0 text-left text-lg text-muted leading-relaxed',
        links: 'justify-start'
      }"
    >
      <Motion
        :initial="{ scale: 0.8, opacity: 0, rotate: -10 }"
        :animate="{ scale: 1, opacity: 1, rotate: 4 }"
        :transition="{ duration: 0.8, delay: 0.3 }"
      >
        <div class="relative group">
          <!-- Glow Effect -->
          <div class="absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-400 blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
          <UColorModeAvatar
            class="relative size-40 sm:size-48 rounded-2xl ring-4 ring-white/20 shadow-2xl"
            :light="global.picture?.light!"
            :dark="global.picture?.dark!"
            :alt="global.picture?.alt!"
          />
        </div>
      </Motion>
    </UPageHero>

    <UPageSection
      :ui="{
        container: '!pt-0'
      }"
    >
      <!-- Bio Content -->
      <Motion
        :initial="{ opacity: 0, y: 20 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :transition="{ delay: 0.2 }"
        :in-view-options="{ once: true }"
      >
        <div class="glass-card p-8 sm:p-10 mb-12">
          <MDC
            :value="page.content"
            unwrap="p"
            class="prose prose-lg dark:prose-invert max-w-none leading-relaxed"
          />
        </div>
      </Motion>

      <!-- Polaroid Gallery -->
      <Motion
        :initial="{ opacity: 0, y: 30 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :transition="{ delay: 0.4 }"
        :in-view-options="{ once: true }"
      >
        <div class="flex flex-row justify-center items-center py-10 space-x-[-1.5rem] sm:space-x-[-2rem]">
          <Motion
            v-for="(image, index) in page.images"
            :key="index"
            :initial="{ scale: 0.8, opacity: 0, rotate: index % 2 === 0 ? -15 : 15 }"
            :while-in-view="{ scale: 1, opacity: 1, rotate: index % 2 === 0 ? -6 : 6 }"
            :transition="{ delay: 0.5 + index * 0.15 }"
            :in-view-options="{ once: true }"
            class="group"
          >
            <div class="relative">
              <!-- Glow on Hover -->
              <div class="absolute inset-0 rounded-lg bg-violet-500/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <PolaroidItem
                :image="image"
                :index
                class="relative hover:z-10 transition-all duration-500 hover:scale-110 hover:rotate-0"
              />
            </div>
          </Motion>
        </div>
      </Motion>
    </UPageSection>
  </UPage>
</template>
