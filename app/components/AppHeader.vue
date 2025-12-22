<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

defineProps<{
  links: NavigationMenuItem[]
}>()
</script>

<template>
  <div class="fixed top-4 sm:top-6 mx-auto left-1/2 transform -translate-x-1/2 z-50">
    <UNavigationMenu
      :items="links"
      variant="link"
      color="neutral"
      class="glass rounded-full px-3 sm:px-6 py-1 border border-white/10 shadow-xl hover:border-violet-500/30 transition-all duration-300"
      :ui="{
        link: 'px-3 py-2 text-sm font-medium hover:text-violet-400 transition-colors',
        linkLeadingIcon: 'hidden'
      }"
    >
      <template #list-trailing>
        <ColorModeButton />
      </template>
    </UNavigationMenu>
  </div>
</template>
