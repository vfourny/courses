export interface Technology {
  name: string
  icon: string
  color: string
}

export interface TechnologyCategory {
  title: string
  icon: string
  technologies: Technology[]
}

export interface Experience {
  position: string
  company: string
  period: string
  description: string
  isCurrent?: boolean
  badgeColor?: 'primary' | 'neutral'
}

export const useProfile = () => {
  return {
    name: 'Valentin FOURNY',
    title: 'Développeur Full-Stack, formateur et entrepreneur.',
    description:
      "Depuis plus de 10 ans, je construis des applications web avec Node.js et Vue.js. Je suis Tech Lead sur des architectures monorepo modernes (TRPC, Nuxt) et j'enseigne ces mêmes technologies à l'IUT du Littoral. Partager ce qui fonctionne en production me semble plus utile que des cours théoriques.",
    experiences: [
      {
        position: 'Tech Lead Fullstack',
        company: 'Nexity · Freelance',
        period: 'Avr. 2025 - Aujourd\'hui',
        description:
          'Techlead sur une stack monorepo NodeJS, TRPC, Vue.js/Nuxt pour une application B2B. Mise en place d\'un design system cohérent, refactorisation de composants, architecture clean code, tests unitaires et E2E. Création d\'une API TRPC type Back For Front et accompagnement de développeurs Junior/Confirmé.',
        isCurrent: true,
        badgeColor: 'primary'
      },
      {
        position: 'Vacataire - Formateur',
        company: 'IUT du Littoral Côte d\'Opale',
        period: 'Déc. 2020 - Aujourd\'hui',
        description:
          'Enseignement en DUT 1ère et 2ème années sur plusieurs modules : programmation web côté serveur (NodeJS, Prisma, Express), côté client (VueJS, Nuxt, Vite, TailwindCSS) et industrialisation (Docker, Github, CI/CD). Responsable de la refonte et l\'harmonisation des cours de deuxième année.',
        isCurrent: true,
        badgeColor: 'primary'
      },
      {
        position: 'Ingénieur Full Stack',
        company: 'guiild · Freelance',
        period: 'Mai 2022 - Mars 2025',
        description:
          'Lead Front Developer sur plusieurs missions client. Responsable front d\'un périmètre métier avec Vue 3, Tailwind CSS, Cypress, Vitest et TypeScript. Mise en place d\'applications backoffice et de souscription avec Design System propriétaire. Développement d\'applications d\'annonce publicitaire mobile (JS vanilla & React).',
        badgeColor: 'neutral'
      },
      {
        position: 'Développeur Fullstack',
        company: 'Extia · CDI',
        period: 'Juin 2020 - Mai 2022',
        description:
          'Responsable technique pour le périmètre conversion et ABTest de la Redoute. Mise en place de différents ABTest pour améliorer le taux de conversion. Migration JQuery vers React. Technologies : React, Storybook, NextJS, ABTasty, Dotaki.',
        badgeColor: 'neutral'
      },
      {
        position: 'Ingénieur Développeur Fullstack',
        company: 'Sopra Steria · Alternance',
        period: 'Janv. 2019 - Sept. 2019',
        description:
          'Industrialisation d\'un centre de service via applications web. Gestion de base de données MongoDB, conception d\'API back (Express, Swagger) et applications front (VueJS, Vuetify, Vuex). Mise en place d\'environnement Agile, gestion et suivi de projet avec GitLab.',
        badgeColor: 'neutral'
      },
      {
        position: 'Analyste Développeur Appro Logistique',
        company: 'Sopra Steria · Alternance',
        period: 'Sept. 2016 - Déc. 2018',
        description:
          'Travail dans le secteur de la grande distribution. Développement d\'outillage d\'automatisation (SQL, Java), développement et maintenance d\'applications (AS400, C). Support de formations et méthode Agile.',
        badgeColor: 'neutral'
      }
    ] as Experience[],
    technologies: [
      {
        title: 'Frontend',
        icon: 'i-heroicons-squares-2x2',
        technologies: [
          { name: 'Vue.js & Nuxt', icon: 'i-simple-icons-vuedotjs', color: 'text-green-500' },
          { name: 'React & Next.js', icon: 'i-simple-icons-react', color: 'text-blue-500' },
          { name: 'TypeScript', icon: 'i-simple-icons-typescript', color: 'text-blue-500' },
          { name: 'JavaScript (ES6+)', icon: 'i-simple-icons-javascript', color: 'text-yellow-500' },
          { name: 'Tailwind CSS', icon: 'i-simple-icons-tailwindcss', color: 'text-cyan-500' },
          { name: 'SASS/SCSS', icon: 'i-simple-icons-sass', color: 'text-blue-600' },
          { name: 'Pinia & Vuex', icon: 'i-heroicons-circle-stack', color: 'text-yellow-500' },
          { name: 'HTML5 & CSS3', icon: 'i-simple-icons-html5', color: 'text-orange-500' }
        ]
      },
      {
        title: 'Backend',
        icon: 'i-heroicons-server',
        technologies: [
          { name: 'Node.js & Express', icon: 'i-simple-icons-nodedotjs', color: 'text-green-600' },
          { name: 'Fastify', icon: 'i-simple-icons-fastify', color: 'text-black dark:text-white' },
          { name: 'TypeScript', icon: 'i-simple-icons-typescript', color: 'text-blue-500' },
          { name: 'REST APIs', icon: 'i-heroicons-bolt', color: 'text-purple-500' },
          { name: 'GraphQL', icon: 'i-simple-icons-graphql', color: 'text-pink-500' },
          { name: 'PostgreSQL', icon: 'i-simple-icons-postgresql', color: 'text-blue-600' },
          { name: 'MongoDB', icon: 'i-simple-icons-mongodb', color: 'text-green-600' },
          { name: 'Redis', icon: 'i-simple-icons-redis', color: 'text-red-500' }
        ]
      },
      {
        title: 'DevOps & Outils',
        icon: 'i-heroicons-cog-6-tooth',
        technologies: [
          { name: 'Git & GitHub', icon: 'i-simple-icons-git', color: 'text-orange-500' },
          { name: 'GitHub Actions', icon: 'i-simple-icons-githubactions', color: 'text-blue-500' },
          { name: 'Docker', icon: 'i-simple-icons-docker', color: 'text-blue-600' },
          { name: 'Kubernetes', icon: 'i-simple-icons-kubernetes', color: 'text-blue-500' },
          { name: 'CI/CD Pipelines', icon: 'i-heroicons-arrow-path', color: 'text-green-500' },
          { name: 'Nginx', icon: 'i-simple-icons-nginx', color: 'text-gray-700' },
          { name: 'ESLint & Prettier', icon: 'i-simple-icons-eslint', color: 'text-purple-600' },
          { name: 'Vitest & Jest', icon: 'i-simple-icons-vitest', color: 'text-red-600' }
        ]
      }
    ] as TechnologyCategory[]
  }
}
