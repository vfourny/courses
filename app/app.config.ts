export default defineAppConfig({
  ui: {
    colors: {
      primary: 'amber',
      neutral: 'stone',
    },
    button: {
      defaultVariants: {
        color: 'primary',
      },
    },
    pageHeader: {
      slots: {
        root: 'border-primary-200 dark:border-primary-800',
        title: 'text-primary-600 dark:text-primary-400 font-bold',
      },
    },
    separator: {
      defaultVariants: {
        color: 'primary',
      },
    },
    contentToc: {
      slots: {
        title: 'text-primary-600 dark:text-primary-400 font-bold',
      },
    },
    pageLinks: {
      slots: {
        title: 'text-primary-600 dark:text-primary-400 font-bold',
      },
    },
    contentSurround: {
      slots: {
        link: 'bg-primary-50 dark:bg-primary-950/50 hover:bg-primary-100 dark:hover:bg-primary-900/50 border-primary-200 dark:border-primary-800',
        linkLeading:
          'bg-primary-100 dark:bg-primary-900 border-primary-200 dark:border-primary-800 ring-primary-400 dark:ring-primary-800',
        linkLeadingIcon: 'text-primary-600 dark:text-primary-400',
        linkTitle: 'text-primary-600 dark:text-primary-400 font-semibold',
      },
    },
    prose: {
      h2: {
        base: 'text-primary-600 dark:text-primary-400 font-bold',
      },
      h3: {
        base: 'text-primary-500 dark:text-primary-300 font-bold',
      },
      h4: {
        base: 'text-primary-400 dark:text-primary-300 font-semibold',
      },
      th: {
        base: 'bg-primary-100/50 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400 font-semibold',
      },
      blockquote: {
        base: 'border-l-primary-500 dark:border-l-primary-400',
      },
    },
  },
  seo: {
    siteName: 'Valentin FOURNY - Courses',
  },
  header: {
    colorMode: true,
  },
  toc: {
    title: 'Table of Contents',
  },
})
