// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@formkit/nuxt", "@pinia/nuxt", "@nuxt/test-utils/module"],
  css: ["vue-final-modal/style.css"],
  formkit: {
    // Experimental support for auto loading (see note):
    autoImport: true,
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "~/assets/scss/main.scss";',
        },
      },
    },
  },
  app: {
    head: {
      link: [
        {
          href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0",
          rel: "stylesheet",
        },
        {
          href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
          rel: "stylesheet",
        },
      ],
    },
  },
  ignore: ["server/api/handlers"],
  sourcemap: {
    server: false,
  },
});
