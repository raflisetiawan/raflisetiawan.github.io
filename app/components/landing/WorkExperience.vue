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
    :transition="{ duration: 0.6, delay: 0.3 }"
    :in-view-options="{ once: true }"
  >
    <UPageSection
      :title="page.experience.title"
      :ui="{
        container: '!p-0 glass-card p-6 sm:p-8 gap-4 sm:gap-6',
        title: 'text-left text-xl sm:text-2xl lg:text-2xl font-semibold gradient-text',
        description: 'mt-4'
      }"
    >
      <template #description>
        <div class="flex flex-col gap-4">
          <Motion
            v-for="(experience, index) in page.experience.items"
            :key="index"
            :initial="{ opacity: 0, x: -20 }"
            :while-in-view="{ opacity: 1, x: 0 }"
            :transition="{ delay: 0.4 + 0.15 * index }"
            :in-view-options="{ once: true }"
            class="group relative flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-violet-500/20 transition-all duration-300"
          >
            <!-- Timeline Dot -->
            <div class="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 opacity-0 group-hover:opacity-100 transition-opacity" />

            <!-- Company Logo -->
            <div
              class="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center glass"
              :style="{ background: `${experience.company.color}20` }"
            >
              <UIcon
                :name="experience.company.logo"
                class="size-6"
                :style="{ color: experience.company.color }"
              />
            </div>

            <!-- Content -->
            <div class="flex-1 min-w-0">
              <ULink
                :to="experience.company.url"
                target="_blank"
                class="flex items-center gap-2"
              >
                <span class="font-medium text-highlighted group-hover:text-violet-400 transition-colors">
                  {{ experience.company.name }}
                </span>
                <UIcon
                  name="i-lucide-external-link"
                  class="size-3 opacity-0 group-hover:opacity-100 transition-opacity text-violet-400"
                />
              </ULink>
              <p class="text-sm text-muted mt-1">
                {{ experience.position }}
              </p>
            </div>

            <!-- Date -->
            <div class="flex-shrink-0 text-sm text-muted font-medium">
              {{ experience.date }}
            </div>
          </Motion>
        </div>
      </template>
    </UPageSection>
  </Motion>
</template>
