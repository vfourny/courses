<template>
  <UContentToc :links="currentModuleToc?.links">
    <template #bottom>
      <div class="block space-y-6">
        <template v-if="moduleRessource?.usefulLinks?.length">
          <USeparator />
          <UPageLinks
            :links="moduleRessource.usefulLinks"
            title="Liens utiles"
          />
        </template>

        <template v-if="moduleRessource?.exercises?.length">
          <USeparator />
          <UPageLinks :links="moduleRessource.exercises" title="Exercices" />
        </template>
      </div>
    </template>
  </UContentToc>
</template>

<script lang="ts" setup>
const { currentModuleToc, moduleRessource } = useCurrentModule()
</script>
