export const useCurrentModule = () => {
  const route = useRoute()

  const currentModuleName = computed(() => {
    if (!route.params.slug) return null
    return route.params.slug[0]
  })

  const { data: modulePage } = useAsyncData(
    `module-${route.path}`,
    () => queryCollection('modules').path(route.path).first(),
    {
      watch: [() => route.path],
    },
  )
  const { data: navigation } = useAsyncData('navigation', () =>
    queryCollectionNavigation('modules', ['meta']),
  )

  const { data: searchSections } = useLazyAsyncData(
    'search',
    () => queryCollectionSearchSections('modules'),
    {
      server: false,
    },
  )
  const { data: surroundedPages } = useAsyncData(
    `${route.path}-surround`,
    () => {
      return queryCollectionItemSurroundings('modules', route.path, {
        fields: ['description'],
      })
    },
  )

  const { data: moduleRessource } = useAsyncData(
    `${route.path}-resource`,
    () =>
      queryCollection('resources')
        .where('stem', 'LIKE', `%${currentModuleName.value}%`)
        .first(),
    {
      watch: [() => route.path],
    },
  )

  const currentModuleToc = computed(() => modulePage.value?.body.toc)

  return {
    modulePage,
    navigation,
    surroundedPages,
    searchSections,
    moduleRessource,
    currentModuleToc,
    currentModuleName,
  }
}
