import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { createVueI18nAdapter } from 'vuetify/locale/adapters/vue-i18n';
import { useI18n } from 'vue-i18n';
import { aliases, md } from 'vuetify/iconsets/md';
import { ru, en } from 'vuetify/locale';
import { createVuetify } from 'vuetify';
import i18n from '../lang';

export default createVuetify({
  locale: {
    locale: createVueI18nAdapter({ i18n, useI18n }),
    defaultLocale: 'ru',
    fallbackLocale: 'en',
    messages: { ru, en },
  },
  icons: {
    defaultSet: 'md',
    aliases,
    sets: {
      md,
    },
  },
});
