import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import i18n from './lang';
import { loadFonts } from './plugins/webfontloader';
import './styles/index.scss';

loadFonts();

createApp(App)
  .use(i18n)
  .use(vuetify)
  .use(router)
  .use(createPinia())
  .mount('#app');
