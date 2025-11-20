export const useLanding = () => {
  const { modules: moduleItems } = useModules()

  const hero = {
    headline: {
      label: 'Valentin FOURNY - Full-Stack Developer & Teacher',
    },
    title: 'Maîtrisez le Développement Web Moderne',
    description:
      'Des cours structurés et progressifs pour vous guider de Node.js à la CI/CD. Développez les compétences essentielles du développement full-stack avec des projets pratiques et des concepts clairs.',
    links: [
      {
        label: 'Explorer les cours',
        to: '#courses',
        color: 'primary' as const,
        size: 'xl' as const,
      },
      {
        label: 'À mon propos',
        icon: 'mdi:information',
        to: '/about',
        color: 'neutral' as const,
        variant: 'subtle' as const,
        size: 'xl' as const,
      },
      {
        label: 'Me contacter',
        icon: 'mdi:email',
        to: 'mailto:fourny.valentin@gmail.com',
        color: 'neutral' as const,
        variant: 'subtle' as const,
        size: 'xl' as const,
      },
    ],
  }

  const modules = computed(() => ({
    title: 'Nos modules de formation',
    items: moduleItems.value,
  }))

  const about = {
    title: 'À propos de moi',
    links: [
      {
        label: 'En savoir plus',
        to: '/about',
        size: 'xl' as const,
        icon: 'mdi:account',
      },
    ],
  }

  return { hero, modules, about }
}
