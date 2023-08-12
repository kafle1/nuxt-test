// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  tailwindcss: {
    exposeConfig: true,
  },

  modules: ["@nuxtjs/tailwindcss"],
});
