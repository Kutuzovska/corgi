import { createPinia } from 'pinia';

/* eslint-disable */
// @ts-ignore
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(createPinia());
});
