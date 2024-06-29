<template>
  <div class="">
    <NuxtLoadingIndicator color="rgb(var(--color-primary-DEFAULT) / var(--tw-text-opacity))" :height="5" />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <UNotifications />

  </div>
</template>

<style>
body {
  @apply antialiased font-sans text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-900;
}
</style>