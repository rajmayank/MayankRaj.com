// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/devtools",
    "nuxt-gtag",
    "@nuxt/image",
    "nuxt-icon",
  ],
  gtag: {
    id: "G-XXXXXXXXXX",
    enabled: false,
  },
});
