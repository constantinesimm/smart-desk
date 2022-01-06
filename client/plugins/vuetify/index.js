import Vue from 'vue'
import Vuetify from 'vuetify'
import VueI18n from 'vue-i18n'
import preset from './default-preset/preset'

import {
  messages,
  defaultLanguage
} from '../i18n'

/*

const i18n = new VueI18n({
  locale: defaultLanguage,
  messages
})
 */


Vue.use(Vuetify)
// Vue.use(VueI18n);


export default new Vuetify({
  preset,
  lang: {
    locales: {
      en: messages.en,
      uk: messages.uk,
      ru: messages.ru
    },
    current: 'uk'
  },
  icons: {
    iconfont: 'mdiSvg',
  },
  theme: {
    options: {
      customProperties: true,
      variations: false,
    },
  },
})
