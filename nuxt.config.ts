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
    preference: "blue",
  },
  particles: {
    mode: "full",
  },
  googleFonts: {
    families: {
      "Bebas Neue": 400,
      "Rubik Glitch": 400,
      "Rubik Doodle Triangles": true,
      "Rubik Glitch Pop": true,
    },
  },
  vWave: {
    color: "rgb(var(--color-primary-DEFAULT) / 1)",
  },
});
