import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

/* eslint-disable */
// @ts-ignore
export default defineNuxtPlugin((nuxtApp) => {
  /*  eslint-enable */

  const vuetify = createVuetify({
    components,
    directives,
  });

  nuxtApp.vueApp.use(vuetify);
});
