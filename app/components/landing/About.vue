<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

defineProps<{
  page: IndexCollectionItem
}>()
</script>

<template>
  <Motion
    :initial="{ opacity: 0, y: 20 }"
    :while-in-view="{ opacity: 1, y: 0 }"
    :transition="{ duration: 0.6, delay: 0.2 }"
    :in-view-options="{ once: true }"
  >
    <UPageSection
      :title="page.about.title"
      :description="page.about.description"
      :ui="{
        container: '!p-3 glass-card p-6 sm:p-8',
        title: 'text-left text-xl sm:text-2xl lg:text-2xl font-semibold gradient-text',
        description: 'text-left mt-4 text-base sm:text-lg text-muted leading-relaxed'
      }"
    />
  </Motion>
</template>
