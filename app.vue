<template>
  <div class="">
    <NuxtLoadingIndicator errorColor="red" color="rgb(var(--color-primary-DEFAULT) / var(--tw-text-opacity))"
      :height="5" />

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

.font-logo {
  font-family: 'Bebas Neue';
}

.font2 {
  font-family: 'Bungee';
}

.ubuntu-mono {
  font-family: 'Ubuntu Mono';
}

.ubuntu-sans {
  font-family: 'Ubuntu Sans';

}
</style>