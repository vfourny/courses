<template>
  <section>
    <h2 class="text-3xl font-bold mb-8 flex items-center gap-3">
      <UIcon
        class="w-8 h-8 text-primary"
        name="i-heroicons-code-bracket-square"
      />
      Mes Technologies
    </h2>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Frontend -->
      <UCard>
        <template #header>
          <h3 class="text-lg font-semibold flex items-center gap-2">
            <UIcon
              class="w-5 h-5 text-primary"
              name="i-heroicons-squares-2x2"
            />
            Frontend
          </h3>
        </template>
        <ul class="space-y-2">
          <li class="flex items-center gap-2">
            <UIcon
              class="w-5 h-5 text-green-500"
              name="i-simple-icons-vuedotjs"
            />
            Vue.js & Nuxt
          </li>
          <li class="flex items-center gap-2">
            <UIcon class="w-5 h-5 text-blue-500" name="i-simple-icons-react" />
            React & Next.js
          </li>
          <li class="flex items-center gap-2">
            <UIcon
              class="w-5 h-5 text-blue-500"
              name="i-simple-icons-typescript"
            />
            TypeScript
          </li>
          <li class="flex items-center gap-2">
            <UIcon
              class="w-5 h-5 text-yellow-500"
              name="i-simple-icons-javascript"
            />
            JavaScript (ES6+)
          </li>
          <li class="flex items-center gap-2">
            <UIcon
              class="w-5 h-5 text-cyan-500"
              name="i-simple-icons-tailwindcss"
            />
            Tailwind CSS
          </li>
          <li class="flex items-center gap-2">
            <UIcon class="w-5 h-5 text-blue-600" name="i-simple-icons-sass" />
            SASS/SCSS
          </li>
          <li class="flex items-center gap-2">
            <UIcon
              class="w-5 h-5 text-yellow-500"
              name="i-heroicons-circle-stack"
            />
            Pinia & Vuex
          </li>
          <li class="flex items-center gap-2">
            <UIcon
              class="w-5 h-5 text-orange-500"
              name="i-simple-icons-html5"
            />
            HTML5 & CSS3
          </li>
        </ul>
      </UCard>

      <!-- Backend -->
      <UCard>
        <template #header>
          <h3 class="text-lg font-semibold flex items-center gap-2">
            <UIcon class="w-5 h-5 text-primary" name="i-heroicons-server" />
            Backend
          </h3>
        </template>
        <ul class="space-y-2">
          <li class="flex items-center gap-2">
            <UIcon
              class="w-5 h-5 text-green-600"
              name="i-simple-icons-nodedotjs"
            />
            Node.js & Express
          </li>
          <li class="flex items-center gap-2">
            <UIcon
              class="w-5 h-5 text-black dark:text-white"
              name="i-simple-icons-fastify"
            />
            Fastify
          </li>
          <li class="flex items-center gap-2">
            <UIcon
              class="w-5 h-5 text-blue-500"
              name="i-simple-icons-typescript"
            />
            TypeScript
          </li>
          <li class="flex items-center gap-2">
            <UIcon class="w-5 h-5 text-purple-500" name="i-heroicons-bolt" />
            REST APIs
          </li>
          <li class="flex items-center gap-2">
            <UIcon
              class="w-5 h-5 text-pink-500"
              name="i-simple-icons-graphql"
            />
            GraphQL
          </li>
          <li class="flex items-center gap-2">
            <UIcon
              class="w-5 h-5 text-blue-600"
              name="i-simple-icons-postgresql"
            />
            PostgreSQL
          </li>
          <li class="flex items-center gap-2">
            <UIcon
              class="w-5 h-5 text-green-600"
              name="i-simple-icons-mongodb"
            />
            MongoDB
          </li>
          <li class="flex items-center gap-2">
            <UIcon class="w-5 h-5 text-red-500" name="i-simple-icons-redis" />
            Redis
          </li>
        </ul>
      </UCard>

      <!-- DevOps & Tools -->
      <UCard>
        <template #header>
          <h3 class="text-lg font-semibold flex items-center gap-2">
            <UIcon
              class="w-5 h-5 text-primary"
              name="i-heroicons-cog-6-tooth"
            />
            DevOps & Outils
          </h3>
        </template>
        <ul class="space-y-2">
          <li class="flex items-center gap-2">
            <UIcon class="w-5 h-5 text-orange-500" name="i-simple-icons-git" />
            Git & GitHub
          </li>
          <li class="flex items-center gap-2">
            <UIcon
              class="w-5 h-5 text-blue-500"
              name="i-simple-icons-githubactions"
            />
            GitHub Actions
          </li>
          <li class="flex items-center gap-2">
            <UIcon class="w-5 h-5 text-blue-600" name="i-simple-icons-docker" />
            Docker
          </li>
          <li class="flex items-center gap-2">
            <UIcon
              class="w-5 h-5 text-blue-500"
              name="i-simple-icons-kubernetes"
            />
            Kubernetes
          </li>
          <li class="flex items-center gap-2">
            <UIcon
              class="w-5 h-5 text-green-500"
              name="i-heroicons-arrow-path"
            />
            CI/CD Pipelines
          </li>
          <li class="flex items-center gap-2">
            <UIcon class="w-5 h-5 text-gray-700" name="i-simple-icons-nginx" />
            Nginx
          </li>
          <li class="flex items-center gap-2">
            <UIcon
              class="w-5 h-5 text-purple-600"
              name="i-simple-icons-eslint"
            />
            ESLint & Prettier
          </li>
          <li class="flex items-center gap-2">
            <UIcon class="w-5 h-5 text-red-600" name="i-simple-icons-vitest" />
            Vitest & Jest
          </li>
        </ul>
      </UCard>
    </div>
  </section>
</template>

<script lang="ts" setup>
// Ce composant pourra recevoir les technologies en props si nécessaire
</script>
