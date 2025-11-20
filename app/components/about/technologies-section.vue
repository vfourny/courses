<template>
  <section>
    <h2 class="text-3xl font-bold mb-8 flex items-center gap-3">
      <UIcon
        class="w-8 h-8 text-primary"
        name="i-heroicons-code-bracket-square"
      />
      Mes Technologies
    </h2>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <UCard v-for="(category, index) in profile.technologies" :key="index">
        <template #header>
          <h3 class="text-lg font-semibold flex items-center gap-2">
            <UIcon class="w-5 h-5 text-primary" :name="category.icon" />
            {{ category.title }}
          </h3>
        </template>
        <ul class="space-y-2">
          <li
            v-for="(tech, techIndex) in category.technologies"
            :key="techIndex"
            class="flex items-center gap-2"
          >
            <UIcon class="w-5 h-5" :class="tech.color" :name="tech.icon" />
            {{ tech.name }}
          </li>
        </ul>
      </UCard>
    </div>
  </section>
</template>

<script setup lang="ts">
const profile = useProfile()
</script>
