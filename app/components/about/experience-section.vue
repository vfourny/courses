<template>
  <section>
    <h2 class="text-3xl font-bold mb-8 flex items-center gap-3">
      <UIcon class="w-8 h-8 text-primary" name="i-heroicons-briefcase" />
      Mon Expérience
    </h2>

    <div class="relative">
      <div class="space-y-6">
        <UCard
          v-for="(experience, index) in displayedExperiences"
          :key="index"
          :class="{
            'relative': index === 2 && !showAll,
            'overflow-hidden': index === 2 && !showAll
          }"
        >
          <div class="flex flex-col gap-4">
            <div class="flex items-start justify-between">
              <div>
                <h3 class="text-xl font-semibold">
                  {{ experience.position }}
                </h3>
                <p class="text-muted">{{ experience.company }}</p>
              </div>
              <UBadge
                :color="experience.badgeColor"
                variant="subtle"
              >
                {{ experience.period }}
              </UBadge>
            </div>
            <p class="text-sm leading-relaxed">
              {{ experience.description }}
            </p>
          </div>

          <!-- Gradient overlay on 3rd item when collapsed -->
          <div
            v-if="index === 2 && !showAll"
            class="absolute inset-0 bg-gradient-to-b from-transparent from-30% via-white/70 via-60% to-white dark:via-gray-950/70 dark:to-gray-950 pointer-events-none"
          />
        </UCard>
      </div>

      <!-- Show more/less button -->
      <div v-if="profile.experiences.length > 3" class="mt-6 flex justify-center">
        <UButton
          :icon="showAll ? 'i-heroicons-chevron-up' : 'i-heroicons-chevron-down'"
          :label="showAll ? 'Afficher moins' : 'Afficher plus'"
          variant="soft"
          color="primary"
          @click="showAll = !showAll"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const profile = useProfile()
const showAll = ref(false)

const displayedExperiences = computed(() => {
  return showAll.value ? profile.experiences : profile.experiences.slice(0, 3)
})
</script>
