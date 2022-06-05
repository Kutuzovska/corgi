import { defineNuxtConfig } from 'nuxt';

export default defineNuxtConfig({
  css: ['vuetify/lib/styles/main.sass'],
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
  router: {
    options: {},
  },
  modules: [
    '@pinia/nuxt',
  ],
});
