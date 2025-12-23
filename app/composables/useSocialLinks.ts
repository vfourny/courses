export interface SocialLink {
  icon: string
  to: string
  target?: string
  'aria-label': string
}

export const useSocialLinks = () => {
  const socialLinks: SocialLink[] = [
    {
      icon: 'i-heroicons-envelope',
      to: 'mailto:fourny.valentin@gmail.com',
      'aria-label': 'Email - fourny.valentin@gmail.com',
    },
    {
      icon: 'i-simple-icons-linkedin',
      to: 'https://www.linkedin.com/in/vfourny/',
      target: '_blank',
      'aria-label': 'LinkedIn',
    },
    {
      icon: 'i-simple-icons-discord',
      to: 'https://discord.com/users/vfourny',
      target: '_blank',
      'aria-label': 'Discord - vfourny',
    },
    {
      icon: 'i-simple-icons-github',
      to: 'https://github.com/vfourny',
      target: '_blank',
      'aria-label': 'GitHub Profile',
    },
  ]

  return { socialLinks }
}
