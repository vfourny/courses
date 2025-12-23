import type colors from 'tailwindcss/colors'

import type { Module } from '#shared/types/enums'

export type TailwindColorKey = keyof typeof colors

export type ModuleColorConfig = Record<Module, Record<string, TailwindColorKey>>
