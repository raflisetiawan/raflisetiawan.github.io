<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

defineProps<{
  page: IndexCollectionItem
}>()
</script>

<template>
  <Motion
    :initial="{ opacity: 0, y: 30 }"
    :while-in-view="{ opacity: 1, y: 0 }"
    :transition="{ duration: 0.6, delay: 0.2 }"
    :in-view-options="{ once: true }"
  >
    <UPageSection
      :ui="{
        container: 'px-0 !pt-0'
      }"
    >
      <UCarousel
        v-slot="{ item }"
        :items="page.testimonials"
        :autoplay="{ delay: 5000 }"
        loop
        dots
        :ui="{
          viewport: '-mx-4 sm:-mx-12 lg:-mx-16 glass-card max-w-(--ui-container) rounded-2xl',
          dot: 'bg-white/20 data-[state=active]:bg-violet-500'
        }"
      >
        <UPageCTA
          :description="item.quote"
          variant="naked"
          class="rounded-2xl"
          :ui="{
            container: 'sm:py-16 lg:py-20 sm:gap-10',
            description: '!text-lg sm:!text-xl text-balance leading-relaxed relative before:content-[open-quote] before:text-6xl lg:before:text-8xl before:inline-block before:gradient-text before:absolute before:-ml-8 lg:before:-ml-12 before:-mt-4 lg:before:-mt-6 after:content-[close-quote] after:text-6xl lg:after:text-8xl after:inline-block after:gradient-text after:absolute after:mt-2 lg:after:mt-0 after:ml-2 lg:after:ml-3'
          }"
        >
          <div class="flex items-center gap-4 justify-center">
            <UAvatar
              :src="item.author.avatar?.src"
              size="xl"
              class="ring-2 ring-violet-500/50"
            />
            <div class="text-left">
              <p class="font-semibold text-highlighted">
                {{ item.author.name }}
              </p>
              <p class="text-sm text-muted">
                {{ item.author.description }}
              </p>
            </div>
          </div>
        </UPageCTA>
      </UCarousel>
    </UPageSection>
  </Motion>
</template>
