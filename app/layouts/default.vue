<script setup lang="ts">
</script>

<template>
  <div class="min-h-screen relative overflow-x-hidden">
    <!-- Animated Background -->
    <div class="animated-bg">
      <div class="blob blob-1" />
      <div class="blob blob-2" />
      <div class="blob blob-3" />
    </div>

    <!-- Main Content -->
    <UContainer class="relative z-10 sm:border-x border-default/30 pt-10 backdrop-blur-[2px]">
      <AppHeader :links="navLinks" />
      <slot />
      <AppFooter />
    </UContainer>
  </div>
</template>
