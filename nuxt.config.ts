// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },

  // ssr: false,
  modules: [
    "@nuxt/ui",
    "nuxt-particles",
    "@nuxtjs/google-fonts",
    "@vueuse/motion/nuxt",
    "v-wave/nuxt",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
  ],

  colorMode: {
    preference: "system",
  },

  particles: {
    mode: "full",
  },

  googleFonts: {
    families: {
      "Bebas Neue": 400,
      Bungee: true,
      "Ubuntu Mono": [400, 700],
      "Ubuntu Sans": [100, 200, 300, 400, 500, 600, 700, 800],
      "Rubik Glitch Pop": true,
    },
  },

  vWave: {
    color: "rgb(var(--color-primary-DEFAULT) )",
  },

  compatibilityDate: "2024-08-09",
});
