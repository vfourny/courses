// middleware/theme.global.ts
import { MODULES_COLORS } from '#shared/types/const'

function getModuleFromRoute(path: string): Module | null {
  if (path.startsWith('/node')) return Module.NODE
  if (path.startsWith('/vue')) return Module.VUE
  if (path.startsWith('/git')) return Module.GIT
  if (path.startsWith('/ci-cd')) return Module.CI_CD

  return null
}

export default defineNuxtRouteMiddleware((to) => {
  const appConfig = useAppConfig()

  const module = getModuleFromRoute(to.path)

  // Module inconnu → thème par défaut
  if (!module) {
    appConfig.ui.colors.primary = 'amber'
    appConfig.ui.colors.neutral = 'stone'
    return
  }

  const colors = MODULES_COLORS[module]

  if (!colors) return

  appConfig.ui.colors.primary = colors.primary
  appConfig.ui.colors.neutral = colors.neutral
})
