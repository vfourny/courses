<template>
  <section class="border-t pt-16">
    <div class="text-center space-y-6">
      <h2 class="text-3xl font-bold">Restons en contact</h2>
      <p class="text-lg text-muted max-w-2xl mx-auto">
        Vous avez un projet, une question, ou simplement envie d'échanger ?
        N'hésitez pas à me contacter !
      </p>
      <div class="flex items-center justify-center gap-4">
        <UButton
          color="primary"
          icon="i-heroicons-envelope"
          size="lg"
          to="mailto:fourny.valentin@gmail.com"
        >
          M'envoyer un email
        </UButton>
        <UButton
          color="neutral"
          icon="i-simple-icons-linkedin"
          size="lg"
          target="_blank"
          to="https://www.linkedin.com/in/vfourny/"
          variant="subtle"
        >
          LinkedIn
        </UButton>
        <UButton
          color="neutral"
          icon="i-simple-icons-discord"
          size="lg"
          target="_blank"
          to="https://discord.com/users/vfourny"
          variant="subtle"
        >
          Discord
        </UButton>
        <UButton
          color="neutral"
          icon="i-simple-icons-github"
          size="lg"
          target="_blank"
          to="https://github.com/vfourny"
          variant="subtle"
        >
          GitHub
        </UButton>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
// Ce composant peut recevoir les liens sociaux en props si nécessaire
</script>
