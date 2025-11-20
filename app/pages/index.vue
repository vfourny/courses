<template>
  <div>
    <HeroSection :hero="hero" />

    <ModulesSection v-if="modules" :modules="modules" />

    <AboutMeSection :about="about" class="mt-12" />
  </div>
</template>

<script lang="ts" setup>
const { hero, modules, about } = useLanding()
</script>
