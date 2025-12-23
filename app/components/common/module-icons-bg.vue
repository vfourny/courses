<template>
  <div
    class="absolute inset-0 overflow-hidden pointer-events-none transition-opacity duration-1000"
    :class="[
      isLoading ? 'animate-pulse' : '',
      appear ? 'opacity-100' : 'opacity-0',
    ]"
  >
    <!-- Gradient background avec Tailwind -->
    <div class="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent" />
    <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

    <!-- Module Icons -->
    <template v-for="(iconConfig, index) in iconPositions" :key="index">
      <Icon
        v-if="iconConfig.icon"
        :name="iconConfig.icon"
        class="absolute text-primary/10 dark:text-primary/5 transition-opacity duration-500"
        :class="appeared ? (index % 2 === 0 ? 'animate-float' : 'animate-float-delayed') : 'opacity-0'"
        :style="{
          width: `${iconConfig.size}px`,
          height: `${iconConfig.size}px`,
          top: iconConfig.top,
          left: iconConfig.left,
          right: iconConfig.right,
        }"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
const { isLoading } = useLoadingIndicator()
const appear = ref(false)
const appeared = ref(false)

// Charger les icônes depuis useModules
const { modules } = useModules()

const icons = computed(() => modules.value?.map((module) => module.icon) || [])

// Positions prédéfinies pour les icônes
const iconPositions = computed(() => {
  if (!icons.value.length) return []

  const positions = [
    { size: 80, top: '20%', left: '15%' },
    { size: 100, top: '60%', left: '75%' },
    { size: 70, top: '40%', right: '20%' },
    { size: 90, top: '15%', right: '10%' },
    { size: 60, top: '50%', left: '5%' },
    { size: 85, top: '30%', right: '5%' },
    { size: 75, top: '70%', left: '85%' },
    { size: 95, top: '10%', left: '45%' },
  ]

  return positions.slice(0, icons.value.length * 2).map((pos, index) => ({
    ...pos,
    icon: icons.value[index % icons.value.length],
  }))
})

onMounted(() => {
  appear.value = true
  setTimeout(() => {
    appeared.value = true
  }, 500)
})
</script>
