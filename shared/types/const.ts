import { Module } from '#shared/types/enums'
import type { ModuleColorConfig } from '#shared/types/types'

export const MODULES_COLORS = {
  [Module.NODE]: {
    primary: 'lime',
    neutral: 'neutral',
  },
  [Module.VUE]: {
    primary: 'emerald',
    neutral: 'gray',
  },
  [Module.CI_CD]: {
    primary: 'blue',
    neutral: 'zinc',
  },
  [Module.GIT]: {
    primary: 'red',
    neutral: 'stone',
  },
} satisfies ModuleColorConfig
