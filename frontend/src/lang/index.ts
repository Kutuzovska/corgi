import { createI18n } from 'vue-i18n';
import enLocale from './en';
import ruLocale from './ru';

const messages = {
  en: {
    ...enLocale,
  },
  ru: {
    ...ruLocale,
  },
};

const getLocale = () => {
  const savedLanguage = sessionStorage.getItem('language');
  if (savedLanguage) return savedLanguage;

  return 'en';
};

export default createI18n({
  legacy: false,
  locale: getLocale(),
  messages,
});
