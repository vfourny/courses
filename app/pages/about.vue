<template>
  <UContainer>
    <UPage>
      <!-- Header Section -->
      <UPageHeader
        description="Développeur Full-Stack et formateur passionné par le partage de connaissances"
        title="À propos de moi"
      />

      <UPageBody class="space-y-16">
        <section>
          <div class="prose prose-primary dark:prose-invert max-w-none">
            <p class="text-lg leading-relaxed">
              {{ profile.description }}
            </p>
          </div>
        </section>

        <ExperienceSection />

        <TechnologiesSection />

        <RepositoriesSection />
        <ContactSection />
      </UPageBody>
    </UPage>
  </UContainer>
</template>

<script lang="ts" setup>
const profile = useProfile()

// SEO
useSeoMeta({
  title: 'À propos - Valentin FOURNY',
  description:
    'Développeur Full-Stack et formateur passionné par le partage de connaissances en Node.js, Vue.js, CI/CD et Git.',
  ogTitle: 'À propos de Valentin FOURNY',
  ogDescription:
    'Découvrez mon parcours, mes compétences et mes projets en développement web moderne.',
})
</script>
