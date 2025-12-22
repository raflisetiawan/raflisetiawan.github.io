<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

const props = defineProps<{
  page: IndexCollectionItem
}>()

const items = computed(() => {
  return props.page.faq?.categories.map((faq) => {
    return {
      label: faq.title,
      key: faq.title.toLowerCase(),
      questions: faq.questions
    }
  })
})

const ui = {
  root: 'flex items-center gap-4 w-full',
  list: 'relative flex bg-transparent dark:bg-transparent gap-2 px-0',
  indicator: 'absolute top-[4px] duration-300 ease-out focus:outline-none rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500',
  trigger: 'px-4 py-2.5 rounded-full glass hover:bg-white/10 data-[state=active]:text-white data-[state=inactive]:text-muted transition-all duration-300',
  label: 'truncate font-medium'
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
      :title="page.faq.title"
      :description="page.faq.description"
      :ui="{
        container: 'px-0 !pt-0 gap-6 sm:gap-8',
        title: 'text-left text-2xl sm:text-3xl lg:text-3xl font-bold gradient-text',
        description: 'text-left mt-3 text-base sm:text-lg text-muted'
      }"
    >
      <UTabs
        :items
        orientation="horizontal"
        :ui
      >
        <template #content="{ item }">
          <UAccordion
            trailing-icon="lucide:plus"
            :items="item.questions"
            :unmount-on-hide="false"
            :ui="{
              item: 'border-none',
              trigger: 'mb-3 border-0 group px-5 py-4 transform-gpu rounded-xl glass-card will-change-transform hover:border-violet-500/20 text-base font-medium',
              trailingIcon: 'group-data-[state=closed]:rotate-0 group-data-[state=open]:rotate-135 text-lg text-violet-400 transition-transform duration-300'
            }"
          >
            <template #body="{ item: _item }">
              <MDC
                :value="_item.content"
                unwrap="p"
                class="px-5 pb-4 text-muted leading-relaxed"
              />
            </template>
          </UAccordion>
        </template>
      </UTabs>
    </UPageSection>
  </Motion>
</template>
