import Vue from 'vue'
import Vuetify from 'vuetify'
import preset from './default-preset/preset'

import {
  messages,
  defaultLanguage
} from '../i18n'

Vue.use(Vuetify);

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
