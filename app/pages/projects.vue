<script setup lang="ts">
const { data: page } = await useAsyncData('projects-page', () => {
  return queryCollection('pages').path('/projects').first()
})
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true
  })
}

const { data: projects } = await useAsyncData('projects', () => {
  return queryCollection('projects').all()
})

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
      :links="page.links"
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
          <div
            v-if="page.links"
            class="flex items-center gap-4"
          >
            <UButton
              :label="page.links[0]?.label"
              :to="global.meetingLink"
              v-bind="page.links[0]"
              size="lg"
              class="btn-gradient shine"
            />
            <UButton
              :to="`mailto:${global.email}`"
              v-bind="page.links[1]"
              size="lg"
              class="btn-glass"
            />
          </div>
        </Motion>
      </template>
    </UPageHero>

    <UPageSection
      :ui="{
        container: '!pt-0'
      }"
    >
      <!-- Projects Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Motion
          v-for="(project, index) in projects"
          :key="project.title"
          :initial="{ opacity: 0, y: 30 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :transition="{ delay: 0.2 + 0.1 * index }"
          :in-view-options="{ once: true }"
        >
          <NuxtLink
            :to="project.url"
            target="_blank"
            class="group block glass-card overflow-hidden hover:border-violet-500/30 transition-all duration-500"
          >
            <!-- Project Image -->
            <div class="relative overflow-hidden aspect-video">
              <img
                :src="project.image"
                :alt="project.title"
                class="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
              >
              <!-- Overlay on Hover -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                <span class="flex items-center gap-2 text-white font-medium">
                  View Project
                  <UIcon
                    name="i-lucide-external-link"
                    class="size-4"
                  />
                </span>
              </div>
            </div>

            <!-- Project Info -->
            <div class="p-6">
              <div class="flex items-center justify-between mb-3">
                <h3 class="text-xl font-semibold text-highlighted group-hover:text-violet-400 transition-colors">
                  {{ project.title }}
                </h3>
                <span class="text-sm text-muted">
                  {{ new Date(project.date).getFullYear() }}
                </span>
              </div>
              <p class="text-muted text-sm leading-relaxed line-clamp-2">
                {{ project.description }}
              </p>
            </div>
          </NuxtLink>
        </Motion>
      </div>
    </UPageSection>
  </UPage>
</template>
