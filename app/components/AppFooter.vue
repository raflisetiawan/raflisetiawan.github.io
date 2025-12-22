<script setup lang="ts">
const { footer } = useAppConfig()
</script>

<template>
  <UFooter
    class="z-10 relative mt-16"
    :ui="{ left: 'text-muted text-sm' }"
  >
    <!-- Gradient Line Above Footer -->
    <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />

    <template #left>
      <span class="gradient-text font-medium">{{ footer.credits }}</span>
    </template>

    <template #right>
      <template v-if="footer?.links">
        <UButton
          v-for="(link, index) of footer?.links"
          :key="index"
          v-bind="{ size: 'sm', color: 'neutral', variant: 'ghost', ...link }"
          class="hover:text-violet-400 hover:scale-110 transition-all duration-300"
        />
      </template>
    </template>
  </UFooter>
</template>
