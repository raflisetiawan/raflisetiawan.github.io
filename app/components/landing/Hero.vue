<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

const { footer, global } = useAppConfig()

defineProps<{
  page: IndexCollectionItem
}>()
</script>

<template>
  <UPageHero
    :ui="{
      headline: 'flex items-center justify-center',
      title: 'text-shadow-md max-w-2xl mx-auto',
      links: 'mt-6 flex-col justify-center items-center'
    }"
  >
    <template #headline>
      <Motion
        :initial="{
          scale: 1.2,
          opacity: 0,
          filter: 'blur(20px)'
        }"
        :animate="{
          scale: 1,
          opacity: 1,
          filter: 'blur(0px)'
        }"
        :transition="{
          duration: 0.8,
          delay: 0.1
        }"
      >
        <div class="relative group">
          <!-- Glow Effect Behind Avatar -->
          <div class="absolute inset-0 rounded-full bg-linear-to-r from-violet-600 via-fuchsia-500 to-cyan-400 blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500 animate-pulse" />
          <UColorModeAvatar
            class="relative size-24 sm:size-28 ring-4 ring-white/20 rounded-full shadow-2xl float"
            :light="global.picture?.light!"
            :dark="global.picture?.dark!"
            :alt="global.picture?.alt!"
          />
        </div>
      </Motion>
    </template>

    <template #title>
      <Motion
        :initial="{
          y: 30,
          opacity: 0,
          filter: 'blur(10px)'
        }"
        :animate="{
          y: 0,
          opacity: 1,
          filter: 'blur(0px)'
        }"
        :transition="{
          duration: 0.8,
          delay: 0.3
        }"
      >
        <span class="gradient-text text-glow">{{ page.title }}</span>
      </Motion>
    </template>

    <template #description>
      <Motion
        :initial="{
          y: 20,
          opacity: 0,
          filter: 'blur(10px)'
        }"
        :animate="{
          y: 0,
          opacity: 1,
          filter: 'blur(0px)'
        }"
        :transition="{
          duration: 0.8,
          delay: 0.5
        }"
      >
        <span class="text-lg sm:text-xl text-muted leading-relaxed">{{ page.description }}</span>
      </Motion>
    </template>

    <template #links>
      <Motion
        :initial="{
          y: 20,
          opacity: 0,
          filter: 'blur(10px)'
        }"
        :animate="{
          y: 0,
          opacity: 1,
          filter: 'blur(0px)'
        }"
        :transition="{
          duration: 0.8,
          delay: 0.7
        }"
      >
        <div
          v-if="page.hero.links"
          class="flex flex-wrap items-center justify-center gap-4"
        >
          <!-- Primary CTA Button with Gradient -->
          <UButton
            v-bind="page.hero.links[0]"
            size="lg"
            class="btn-gradient shine"
          />

          <!-- Availability Status -->
          <UButton
            :color="global.available ? 'success' : 'error'"
            variant="ghost"
            size="lg"
            class="glass rounded-full gap-3 px-6 hover:scale-105 transition-transform"
            :to="global.available ? global.meetingLink : ''"
            :label="global.available ? 'Available for work' : 'Currently busy'"
          >
            <template #leading>
              <span class="relative flex size-3">
                <span
                  class="absolute inline-flex size-full rounded-full opacity-75"
                  :class="global.available ? 'bg-success animate-ping' : 'bg-error'"
                />
                <span
                  class="relative inline-flex size-3 rounded-full"
                  :class="global.available ? 'bg-success' : 'bg-error'"
                />
              </span>
            </template>
          </UButton>
        </div>
      </Motion>

      <!-- Social Links with Staggered Animation -->
      <div class="gap-x-3 inline-flex mt-8">
        <Motion
          v-for="(link, index) of footer?.links"
          :key="index"
          :initial="{
            scale: 0,
            opacity: 0
          }"
          :animate="{
            scale: 1,
            opacity: 1
          }"
          :transition="{
            duration: 0.4,
            delay: 0.9 + index * 0.1
          }"
        >
          <UButton
            v-bind="{ size: 'lg', color: 'neutral', variant: 'ghost', ...link }"
            class="hover:scale-110 hover:text-violet-400 transition-all duration-300 glass-card rounded-full !p-3"
          />
        </Motion>
      </div>
    </template>

    <!-- Enhanced Marquee with Parallax Effect -->
    <div class="marquee-enhanced mt-8 overflow-hidden w-full max-w-full">
      <UMarquee
        pause-on-hover
        class="py-4 [--duration:35s]"
      >
        <Motion
          v-for="(img, index) in page.hero.images"
          :key="index"
          :initial="{
            scale: 0.8,
            opacity: 0,
            y: 20
          }"
          :animate="{
            scale: 1,
            opacity: 1,
            y: 0
          }"
          :transition="{
            duration: 0.6,
            delay: 1.2 + index * 0.08
          }"
        >
          <img
            width="250"
            height="250"
            class="rounded-xl aspect-square object-cover shadow-lg ring-1 ring-white/10 transition-all duration-500 hover:ring-violet-500/50"
            :class="index % 2 === 0 ? '-rotate-3 hover:rotate-0' : 'rotate-3 hover:rotate-0'"
            :src="img.src"
            :alt="img.alt"
          />
        </Motion>
      </UMarquee>
    </div>
  </UPageHero>
</template>
