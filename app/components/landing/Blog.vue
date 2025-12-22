<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

defineProps<{
  page: IndexCollectionItem
}>()

const { data: posts } = await useAsyncData('index-blogs', () =>
  queryCollection('blog').order('date', 'DESC').limit(3).all()
)
if (!posts.value) {
  throw createError({ statusCode: 404, statusMessage: 'blogs posts not found', fatal: true })
}
</script>

<template>
  <Motion
    :initial="{ opacity: 0, y: 30 }"
    :while-in-view="{ opacity: 1, y: 0 }"
    :transition="{ duration: 0.6, delay: 0.2 }"
    :in-view-options="{ once: true }"
  >
    <UPageSection
      :title="page.blog.title"
      :description="page.blog.description"
      :ui="{
        container: 'px-0 !pt-0 sm:gap-8 lg:gap-10',
        title: 'text-left text-2xl sm:text-3xl lg:text-3xl font-bold gradient-text',
        description: 'text-left mt-3 text-base sm:text-lg text-muted'
      }"
    >
      <UBlogPosts
        orientation="vertical"
        class="gap-6 lg:gap-y-6"
      >
        <Motion
          v-for="(post, index) in posts"
          :key="index"
          :initial="{ opacity: 0, y: 20 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :transition="{ delay: 0.3 + 0.1 * index }"
          :in-view-options="{ once: true }"
        >
          <UBlogPost
            orientation="horizontal"
            variant="naked"
            v-bind="post"
            :to="post.path"
            class="group glass-card p-4 sm:p-6"
            :ui="{
              root: 'group relative lg:items-start lg:flex ring-0 hover:ring-0',
              body: '!px-0',
              header: 'hidden',
              title: 'group-hover:text-violet-400 transition-colors',
              description: 'text-muted'
            }"
          >
            <template #footer>
              <UButton
                size="sm"
                variant="link"
                class="px-0 gap-1 text-violet-400"
                label="Read Article"
              >
                <template #trailing>
                  <UIcon
                    name="i-lucide-arrow-right"
                    class="size-4 transition-all opacity-0 group-hover:translate-x-2 group-hover:opacity-100"
                  />
                </template>
              </UButton>
            </template>
          </UBlogPost>
        </Motion>
      </UBlogPosts>
    </UPageSection>
  </Motion>
</template>
