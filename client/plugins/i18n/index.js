import en from './locales/en';
import uk from './locales/uk';
import ru from './locales/ru';

import store from '@/store';

const messages = {
  en,
  uk,
  ru
};
let defaultLanguage = 'en';
const storedLang = store.getters['app/getSelectedLocale'];

if (storedLang !== null) defaultLanguage = storedLang;

export {
  messages,
  defaultLanguage
}

