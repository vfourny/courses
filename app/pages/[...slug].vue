<template>
  <div v-if="modulePage">
    <div class="flex items-start gap-8">
      <div class="flex-1">
        <UPageHeader
          :description="modulePage.description"
          :headline="headline"
          :title="modulePage.title"
        />
      </div>
      <Icon
        v-if="modulePage.meta?.icon"
        :name="modulePage.meta.icon.toString()"
        class="w-32 h-32 lg:w-48 lg:h-48 text-primary/40 dark:text-primary/10 hidden lg:block flex-shrink-0"
      />
    </div>

    <UPageBody>
      <ContentRenderer :value="modulePage" />

      <USeparator v-if="surroundedPages?.length" />

      <UContentSurround :surround="surroundedPages" />
    </UPageBody>
  </div>
</template>

<script lang="ts" setup>
import { findPageHeadline } from '@nuxt/content/utils'

definePageMeta({
  layout: 'docs',
})

const { navigation, modulePage, surroundedPages } = useCurrentModule()

const headline = computed(() =>
  findPageHeadline(navigation?.value, modulePage.value?.path),
)
</script>
