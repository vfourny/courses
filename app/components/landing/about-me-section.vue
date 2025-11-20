<template>
  <div v-if="about" class="relative container mx-auto px-4 py-16 lg:py-24">
    <div class="max-w-3xl mx-auto text-center space-y-6">
      <!-- Titre -->
      <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
        {{ about.title }}
      </h2>

      <!-- Description -->
      <p class="text-lg text-gray-600 dark:text-gray-300">
        {{ profile.description }}
      </p>

      <!-- Liens/Boutons -->
      <div v-if="about.links" class="flex flex-wrap gap-4 justify-center pt-4">
        <UButton
          v-for="(link, index) in about.links"
          :key="index"
          v-bind="link"
        />
      </div>
    </div>

    <!-- Légère overlay pour différencier visuellement la section -->
    <div class="absolute inset-0 -z-10 bg-primary/5 dark:bg-primary/10 rounded-2xl" />
  </div>
</template>

<script lang="ts" setup>
import type { ButtonProps } from '#ui/components/Button.vue'

const profile = useProfile()

defineProps<{
  about: {
    title: string
    links: ButtonProps[]
  }
}>()
</script>
