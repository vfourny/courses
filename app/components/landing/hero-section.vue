<template>
  <UPageHero
    v-if="hero"
    :description="hero.description"
    :links="hero.links"
    :title="hero.title"
    orientation="horizontal"
  >
    <template #headline>
      <UBadge
        v-if="hero.headline"
        class="font-semibold ring-2 ring-primary-500/20"
        size="lg"
        variant="subtle"
      >
        {{ hero.headline.label }}
      </UBadge>
    </template>

    <div
      class="relative h-[400px] lg:h-[500px] flex items-center justify-center"
    >
      <div class="relative z-10 grid grid-cols-2 gap-8 lg:gap-12 p-8">
        <UIcon
          class="w-20 h-20 lg:w-24 lg:h-24 animate-float drop-shadow-2xl text-primary"
          name="i-simple-icons-nodedotjs"
        />
        <UIcon
          class="w-20 h-20 lg:w-24 lg:h-24 animate-float-delayed drop-shadow-2xl text-primary"
          name="i-simple-icons-vuedotjs"
        />
        <UIcon
          class="w-20 h-20 lg:w-24 lg:h-24 animate-float-delayed-2 drop-shadow-2xl text-primary"
          name="i-simple-icons-githubactions"
        />
        <UIcon
          class="w-20 h-20 lg:w-24 lg:h-24 animate-float-delayed-3 drop-shadow-2xl text-primary"
          name="i-simple-icons-git"
        />
      </div>
      <StarsBg :star-count="200" speed="normal" />
    </div>
  </UPageHero>
</template>

<script lang="ts" setup>
import type { ButtonProps } from '#ui/components/Button.vue'

defineProps<{
  hero: {
    headline?: {
      label: string
    }
    title: string
    description: string
    links: ButtonProps[]
  }
}>()
</script>
