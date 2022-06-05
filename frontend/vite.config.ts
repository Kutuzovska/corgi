/* eslint-disable */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// @ts-ignore
import vuetify from 'vite-plugin-vuetify';

export default defineConfig({
  plugins: [
    vue(),
    vuetify({ autoImport: true }),
  ],
  resolve: {
    alias: {
      'vue-i18n': 'vue-i18n/dist/vue-i18n.runtime.esm-browser.prod.js',
    },
  },
});
