<template>
  <UContainer>
    <UPage>
      <template #left>
        <UPageAside>
          <UContentNavigation
            v-if="formattedNavigation"
            :key="route.path"
            :navigation="formattedNavigation"
            :default-open="true"
            :highlight="true"
            type="single"
          />
        </UPageAside>
      </template>

      <slot />

      <template #right>
        <ResourcesList />
      </template>
    </UPage>
  </UContainer>
</template>

<script lang="ts" setup>
const route = useRoute()
const { navigation } = useCurrentModule()

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
