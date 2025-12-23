<template>
  <section id="projects">
    <h2 class="text-3xl font-bold mb-8 flex items-center gap-3">
      <UIcon class="w-8 h-8 text-primary" name="i-heroicons-code-bracket" />
      Mes repos GitHub
    </h2>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Repository Cards -->
      <UCard
        v-for="repository in repositories"
        :key="repository.name"
        class="hover:shadow-lg transition-shadow"
      >
        <template #header>
          <div class="flex items-start justify-between">
            <h3 class="text-lg font-semibold">{{ repository.name }}</h3>
            <UIcon class="w-5 h-5 text-muted" name="i-simple-icons-github" />
          </div>
        </template>

        <p class="text-sm text-muted mb-4">{{ repository.description }}</p>

        <div class="flex flex-wrap gap-2 mb-4">
          <UBadge
            v-for="tech in repository.technologies"
            :key="tech"
            color="primary"
            variant="subtle"
          >
            {{ tech }}
          </UBadge>
        </div>

        <template #footer>
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <UBadge
                v-if="repository.language"
                color="neutral"
                variant="subtle"
              >
                {{ repository.language }}
              </UBadge>
            </div>
            <UButton
              :to="repository.url"
              target="_blank"
              trailing-icon="i-heroicons-arrow-top-right-on-square"
              variant="ghost"
            >
              Voir
            </UButton>
          </div>
        </template>
      </UCard>
    </div>

    <div class="mt-8 text-center">
      <UButton
        color="neutral"
        size="lg"
        target="_blank"
        to="https://github.com/vfourny"
        trailing-icon="i-heroicons-arrow-top-right-on-square"
        variant="subtle"
      >
        Voir tous mes projets sur GitHub
      </UButton>
    </div>
  </section>
</template>

<script lang="ts" setup>
const github = useGithub()

const repositories = await github.getRepos()
</script>
