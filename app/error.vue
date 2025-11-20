<template>
  <UApp>
    <AppHeader />

    <UError :error="error" />

    <ClientOnly>
      <LazyUContentSearch :files="searchSections" :navigation="navigation" />
    </ClientOnly>
  </UApp>
</template>

<script lang="ts" setup>
import type { NuxtError } from '#app'

defineProps<{
  error: NuxtError
}>()

const { navigation, searchSections } = useCurrentModule()
</script>
