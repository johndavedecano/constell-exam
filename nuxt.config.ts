// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@formkit/nuxt", "@pinia/nuxt", "@nuxt/test-utils/module"],
  formkit: {
    // Experimental support for auto loading (see note):
    autoImport: true,
  },
  css: ["~/assets/scss/main.scss"],
  app: {
    head: {
      link: [
        {
          href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0",
          rel: "stylesheet",
        },
      ],
    },
  },
});
