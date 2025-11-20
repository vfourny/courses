<template>
  <div v-if="modules">
    <UPageSection id="courses" :title="modules.title" />

    <UContainer class="space-y-12">
      <UCard
        v-for="(module, index) in modules.items"
        :id="`module-${index}`"
        :key="`module-${index}`"
        class="overflow-hidden"
      >
        <div class="grid lg:grid-cols-2 gap-8 items-center">
          <!-- Image Section -->
          <div
            :class="[
              'relative overflow-hidden rounded-lg aspect-video',
              index % 2 === 0 ? 'lg:order-2' : 'lg:order-1',
            ]"
          >
            <NuxtImg
              v-if="module.image"
              :alt="`${module.title} illustration`"
              :src="module.image"
              class="w-full h-full object-cover"
              loading="lazy"
            />
            <div
              v-else
              :class="[
                'w-full h-full bg-gradient-to-br flex items-center justify-center',
                module.gradient,
              ]"
            >
              <UIcon
                :name="module.icon"
                class="size-24 text-white opacity-50"
              />
            </div>
          </div>

          <!-- Content Section -->
          <div
            :class="[
              'flex flex-col gap-6',
              index % 2 === 0 ? 'lg:order-1' : 'lg:order-2',
            ]"
          >
            <div class="flex items-center gap-4">
              <UIcon
                :name="module.icon"
                class="size-12 text-primary shrink-0"
              />
              <div>
                <h2 class="text-3xl font-bold">
                  {{ module.title }}
                </h2>
                <p v-if="module.subtitle" class="text-muted text-lg">
                  {{ module.subtitle }}
                </p>
              </div>
            </div>

            <p class="text-lg text-gray-600 dark:text-gray-300">
              {{ module.description }}
            </p>

            <ul v-if="module.keyPoints?.length" class="space-y-3">
              <li
                v-for="(point, pointIndex) in module.keyPoints"
                :key="pointIndex"
                class="flex items-start gap-3"
              >
                <UIcon
                  class="size-5 text-primary shrink-0 mt-1"
                  name="i-heroicons-check-circle"
                />
                <span class="text-gray-700 dark:text-gray-200">{{
                  point
                }}</span>
              </li>
            </ul>

            <div class="mt-4">
              <UButton
                :to="module.to"
                color="primary"
                size="lg"
                trailing-icon="i-heroicons-arrow-right"
              >
                Explorer le module
              </UButton>
            </div>
          </div>
        </div>
      </UCard>
    </UContainer>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  modules: {
    title: string
    items: {
      title: string
      subtitle?: string
      description: string
      icon: string
      to: string
      gradient: string
      image: string
      keyPoints?: string[]
    }[]
  }
}>()
</script>
