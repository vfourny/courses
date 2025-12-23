<template>
  <UHeader
    class="border-b border-primary-200 dark:border-primary-800 bg-gradient-to-t from-primary-100 to-neutral-50 dark:from-primary-950 dark:to-neutral-950"
  >
    <template #left>
      <div class="flex w-full gap-2 mr-2">
        <UButton
          :variant="isHomePage ? 'solid' : 'outline'"
          aria-label="Accueil"
          color="primary"
          icon="i-heroicons-home"
          to="/"
        /><UColorModeButton
          v-if="header?.colorMode"
          color="primary"
          variant="subtle"
        />

        <UContentSearchButton
          :collapsed="false"
          :kbds="[
            { color: 'primary', value: 'meta' },
            { color: 'primary', value: 'K' },
          ]"
          class="flex flex-grow"
          color="primary"
        />
      </div>
    </template>

    <template #default>
      <nav class="flex items-center gap-2">
        <UButton
          v-for="item in navigation"
          :key="item.path"
          :icon="item.icon"
          :to="item.path"
          :variant="isActiveRoute(item.path) ? 'solid' : 'subtle'"
          color="primary"
          size="md"
        >
          {{ item.title }}
        </UButton>
      </nav>
    </template>

    <template #right>
      <UButton
        aria-label="À propos"
        icon="i-heroicons-information-circle"
        to="/about"
        variant="ghost"
      />
      <UButton
        v-for="(link, index) of socialLinks"
        :key="index"
        v-bind="{ variant: 'ghost', ...link }"
      />
    </template>
  </UHeader>
</template>

<script lang="ts" setup>
const { header } = useAppConfig()
const { socialLinks } = useSocialLinks()
const { navigation } = useCurrentModule()

const route = useRoute()
const isHomePage = computed(() => route.path === '/')

const isActiveRoute = (path: string) => {
  return route.path.startsWith(path)
}
</script>
