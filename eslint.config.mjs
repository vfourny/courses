// @ts-check
import nuxtConfig from '@vfourny/node-toolkit/eslint/nuxt'

// eslint-disable-next-line no-restricted-imports
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  ...nuxtConfig,
  {
    // Ajout des composables personnalisés aux globales
    languageOptions: {
      globals: {
        useCurrentModule: 'readonly',
        useLoadingIndicator: 'readonly',
        queryCollection: 'readonly',
      },
    },
  },
  {
    files: [
      '*.config.{js,ts,mjs}',
      'app.vue',
      'error.vue',
      'app/pages/**/*.vue',
      'app/middleware/**/*.ts',
      'app/app.config.ts',
    ],
    rules: {
      'import/no-default-export': 'off',
    },
  },
  {
    ignores: ['node_modules', 'dist', '.nuxt', 'coverage', '.output'],
  },
)
