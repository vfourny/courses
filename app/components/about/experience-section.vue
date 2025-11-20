<template>
  <section>
    <h2 class="text-3xl font-bold mb-8 flex items-center gap-3">
      <UIcon class="w-8 h-8 text-primary" name="i-heroicons-briefcase" />
      Mon Expérience
    </h2>

    <div class="space-y-6">
      <!-- Current Position -->
      <UCard>
        <div class="flex flex-col gap-4">
          <div class="flex items-start justify-between">
            <div>
              <h3 class="text-xl font-semibold">
                Formateur & Développeur Full-Stack
              </h3>
              <p class="text-muted">Stygma EURL</p>
            </div>
            <UBadge color="primary" variant="subtle">Actuellement</UBadge>
          </div>
          <p class="text-sm leading-relaxed">
            Création et animation de formations sur les technologies web
            modernes : Node.js, Vue.js, CI/CD et Git. Développement
            d'applications web performantes et accompagnement de développeurs
            dans leur montée en compétences.
          </p>
        </div>
      </UCard>

      <!-- Education -->
      <UCard>
        <div class="flex flex-col gap-4">
          <div class="flex items-start justify-between">
            <div>
              <h3 class="text-xl font-semibold">
                Formation en Développement Web
              </h3>
              <p class="text-muted">École d'Ingénieurs - Spécialisation Web</p>
            </div>
            <UBadge color="neutral" variant="subtle">2018-2021</UBadge>
          </div>
          <p class="text-sm leading-relaxed">
            Formation approfondie en génie logiciel, architectures web, et
            méthodologies agiles. Spécialisation dans les technologies
            JavaScript et le développement d'applications modernes.
          </p>
        </div>
      </UCard>

      <!-- Previous Experience -->
      <UCard>
        <div class="flex flex-col gap-4">
          <div class="flex items-start justify-between">
            <div>
              <h3 class="text-xl font-semibold">Développeur Full-Stack</h3>
              <p class="text-muted">Diverses entreprises tech</p>
            </div>
            <UBadge color="neutral" variant="subtle">2019-2023</UBadge>
          </div>
          <p class="text-sm leading-relaxed">
            Développement d'applications web complexes, mise en place de
            pipelines CI/CD, et contribution à des projets open-source.
            Expertise en JavaScript/TypeScript, Vue.js et Node.js.
          </p>
        </div>
      </UCard>
    </div>
  </section>
</template>

<script lang="ts" setup>
// Ce composant pourra recevoir un tableau d'expériences en props
</script>
