<template>
  <UApp>
    <!-- Background global avec icônes flottantes -->
    <div class="fixed inset-0 -z-10 overflow-hidden">
      <div
        class="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-primary-100 dark:from-primary-950 dark:via-gray-950 dark:to-primary-900"
      />
      <HeroBackground />
      <StarsBg
        :star-count="150"
        color="rgba(var(--color-primary-500), 0.3)"
        speed="slow"
      />
    </div>

    <AppHeader />

    <UMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>

    <ClientOnly>
      <LazyUContentSearch :files="searchSections" :navigation="navigation" />
    </ClientOnly>
  </UApp>
</template>

<script lang="ts" setup>
const { navigation, searchSections } = useCurrentModule()
</script>
