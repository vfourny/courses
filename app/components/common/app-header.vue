<template>
  <UHeader
    :toggle="{
      color: 'primary',
      variant: 'subtle',
    }"
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
        />
        <UColorModeButton
          v-if="header?.colorMode"
          color="primary"
          variant="subtle"
        />

        <!-- Mobile: Just icon -->
        <UContentSearchButton
          :kbds="[]"
          class="sm:hidden"
          color="primary"
          icon="i-heroicons-magnifying-glass"
          variant="subtle"
        />

        <!-- Desktop: Full search bar -->
        <UContentSearchButton
          :collapsed="false"
          :kbds="[
            { color: 'primary', value: 'meta' },
            { color: 'primary', value: 'K' },
          ]"
          class="hidden sm:flex flex-grow"
          color="primary"
        />
      </div>
    </template>

    <template #default>
      <nav class="hidden lg:flex items-center gap-2">
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
        class="hidden lg:inline-flex"
        icon="i-heroicons-information-circle"
        to="/about"
        variant="ghost"
      />
      <UButton
        v-for="(link, index) of socialLinks"
        :key="index"
        class="hidden lg:inline-flex"
        v-bind="{ variant: 'ghost', ...link }"
      />
    </template>

    <template #body>
      <div class="flex flex-col gap-4 -mx-2.5">
        <!-- Content navigation (docs) if available -->
        <UContentNavigation
          v-if="formattedNavigation?.length"
          :key="route.path"
          :default-open="true"
          :highlight="true"
          :navigation="formattedNavigation"
          class="px-2.5"
          type="single"
        />

        <USeparator />

        <!-- About & Social Links -->
        <div class="flex flex-col gap-2 px-2.5">
          <UButton
            block
            color="primary"
            icon="i-heroicons-information-circle"
            size="lg"
            to="/about"
            variant="soft"
          >
            À propos
          </UButton>

          <div class="flex gap-2 mt-2">
            <UButton
              v-for="(link, index) of socialLinks"
              :key="index"
              class="flex-1"
              v-bind="{ variant: 'ghost', size: 'lg', ...link }"
            />
          </div>
        </div>
      </div>
    </template>
  </UHeader>
</template>

<script lang="ts" setup>
import type { NavigationMenuItem } from '#ui/types'

const { header } = useAppConfig()
const { socialLinks } = useSocialLinks()
const { navigation } = useCurrentModule()

const route = useRoute()
const isHomePage = computed(() => route.path === '/')

const isActiveRoute = (path: string) => {
  return route.path.startsWith(path)
}

// Transform navigation for UNavigationMenu
const navigationItems = computed<NavigationMenuItem[]>(() => {
  if (!navigation.value?.length) return []

  return navigation.value.map((item) => ({
    label: item.title,
    to: item.path,
    icon: item.icon,
    active: route.path.startsWith(item.path),
  }))
})

// Format content navigation (same as docs layout)
const formattedNavigation = computed(() => {
  if (!navigation.value) return []

  return navigation.value.map((item) => ({
    ...item,
    children: item.children?.map((child) => ({
      ...child,
      icon: child.meta?.icon || child.icon,
    })),
  }))
})
</script>
