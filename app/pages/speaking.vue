<script setup lang="ts">
type Event = {
  title: string
  date: string
  location: string
  url?: string
  category: 'Conference' | 'Live talk' | 'Podcast'
}

const { data: page } = await useAsyncData('speaking', () => {
  return queryCollection('speaking').first()
})
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true
  })
}

useSeoMeta({
  title: page.value?.seo?.title || page.value?.title,
  ogTitle: page.value?.seo?.title || page.value?.title,
  description: page.value?.seo?.description || page.value?.description,
  ogDescription: page.value?.seo?.description || page.value?.description
})

const { global } = useAppConfig()

const groupedEvents = computed((): Record<Event['category'], Event[]> => {
  const events = page.value?.events || []
  const grouped: Record<Event['category'], Event[]> = {
    'Conference': [],
    'Live talk': [],
    'Podcast': []
  }
  for (const event of events) {
    if (grouped[event.category]) grouped[event.category].push(event)
  }
  return grouped
})

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })
}

const categoryIcons = {
  'Conference': 'i-lucide-code-2',
  'Live talk': 'i-lucide-database',
  'Podcast': 'i-lucide-rocket'
}
</script>

<template>
  <UPage v-if="page">
    <UPageHero
      :title="page.title"
      :description="page.description"
      :ui="{
        title: '!mx-0 text-left gradient-text text-glow',
        description: '!mx-0 text-left text-lg text-muted',
        links: 'justify-start'
      }"
    >
      <template #links>
        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ delay: 0.5 }"
        >
          <UButton
            v-if="page.links"
            :to="`mailto:${global.email}`"
            v-bind="page.links[0]"
            size="lg"
            class="btn-gradient shine"
          />
        </Motion>
      </template>
    </UPageHero>

    <UPageSection
      :ui="{
        container: '!pt-0'
      }"
    >
      <div
        v-for="(eventsInCategory, category) in groupedEvents"
        :key="category"
        class="mb-16 last:mb-0"
      >
        <!-- Category Header -->
        <Motion
          :initial="{ opacity: 0, x: -20 }"
          :while-in-view="{ opacity: 1, x: 0 }"
          :transition="{ delay: 0.2 }"
          :in-view-options="{ once: true }"
          class="flex items-center gap-4 mb-8"
        >
          <div class="flex items-center gap-3 glass-card px-5 py-3 rounded-full">
            <UIcon
              :name="categoryIcons[category]"
              class="size-5 text-violet-400"
            />
            <h2 class="text-xl font-semibold gradient-text">
              {{ category }}s
            </h2>
          </div>
          <div class="flex-1 h-px bg-linear-to-r from-violet-500/50 to-transparent" />
        </Motion>

        <!-- Events Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Motion
            v-for="(event, index) in eventsInCategory"
            :key="`${category}-${index}`"
            :initial="{ opacity: 0, y: 20 }"
            :while-in-view="{ opacity: 1, y: 0 }"
            :transition="{ delay: 0.3 + 0.1 * index }"
            :in-view-options="{ once: true }"
          >
            <NuxtLink
              :to="event.url"
              :target="event.url ? '_blank' : undefined"
              class="group block glass-card p-6 hover:border-violet-500/30 transition-all duration-300"
              :class="{ 'cursor-default': !event.url }"
            >
              <!-- Date & Location -->
              <div class="flex items-center gap-2 text-sm text-muted mb-3">
                <UIcon
                  name="i-lucide-map-pin"
                  class="size-4"
                />
                <span>{{ event.location }}</span>
                <span
                  v-if="event.location && event.date"
                  class="mx-1"
                >•</span>
                <UIcon
                  v-if="event.date"
                  name="i-lucide-calendar"
                  class="size-4"
                />
                <span v-if="event.date">{{ formatDate(event.date) }}</span>
              </div>

              <!-- Title -->
              <h3 class="text-lg font-semibold text-highlighted group-hover:text-violet-400 transition-colors mb-4">
                {{ event.title }}
              </h3>

              <!-- Action Button -->
              <div
                v-if="event.url"
                class="flex items-center gap-2 text-sm text-violet-400 font-medium"
              >
                <span>{{ category === 'Podcast' ? 'Listen Now' : 'Watch Recording' }}</span>
                <UIcon
                  :name="category === 'Podcast' ? 'i-lucide-headphones' : 'i-lucide-play'"
                  class="size-4 transition-transform group-hover:translate-x-1"
                />
              </div>
            </NuxtLink>
          </Motion>
        </div>
      </div>
    </UPageSection>
  </UPage>
</template>
