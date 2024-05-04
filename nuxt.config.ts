// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui", 
    "nuxt-particles", 
    "@nuxtjs/google-fonts", 
    '@vueuse/motion/nuxt',
    
  ],
  colorMode: {
    preference: 'blue'
  },
  particles: {
    mode: 'full',
    

  },
  googleFonts: {
    families:{
		"Bebas Neue": 400,
		"Rubik Glitch": 400,
		"Rubik Doodle Triangles": true,
		"Rubik Glitch Pop": true,

	}
  }


})