export interface Module {
  id: string
  title: string
  subtitle: string
  description: string
  icon: string
  to: string
  gradient: string
  image: string
  keyPoints: string[]
}

export const useModules = () => {
  const { data: resources } = useAsyncData('resources', () =>
    queryCollection('resources').all(),
  )

  const modules = computed<Module[]>(() => {
    if (!resources.value) return []

    return resources.value
      .map((resource) => resource.summary)
      .filter((summary): summary is Module => summary !== undefined)
      .sort((a, b) => {
        // Ordre prédéfini : node, cicd, vue, git
        const order = ['node', 'cicd', 'vue', 'git']
        return order.indexOf(a.id) - order.indexOf(b.id)
      })
  })

  return { modules }
}
