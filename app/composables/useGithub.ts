import type { Endpoints } from '@octokit/types'

type GitHubRepository =
  Endpoints['GET /users/{username}/repos']['response']['data'][number]

export interface Repository {
  name: string
  description: string
  technologies: string[]
  stars: number
  forks: number
  url: string
  language: string | null
  updatedAt: string
}

export const useGithub = () => {
  const getRepos = async (): Promise<Repository[]> => {
    try {
      const repos = await $fetch<GitHubRepository[]>(
        `https://api.github.com/users/vfourny/repos`,
        {
          query: {
            sort: 'updated',
            per_page: 100,
            type: 'owner',
          },
        },
      )

      // Mapper les données GitHub vers votre structure
      return repos
        .filter((repo) => !repo.fork && !repo.archived) // Exclure forks et archives
        .map((repo) => ({
          name: repo.name,
          description: repo.description || 'Pas de description disponible',
          technologies: repo.topics || [], // GitHub topics comme technologies
          stars: repo.stargazers_count ?? 0,
          forks: repo.forks_count ?? 0,
          url: repo.html_url,
          language: repo.language ?? null,
          updatedAt: repo.updated_at ?? new Date().toISOString(),
        }))
        .sort((a, b) => b.stars - a.stars) // Trier par étoiles
    } catch (error) {
      console.error('Erreur lors de la récupération des repos:', error)
      return []
    }
  }

  return { getRepos }
}
