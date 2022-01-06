import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

/**
 * Vuex modules
 */
import AppModule from '@/store/modules/app.module';
import UserModule from '@/store/modules/user.module';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    app: AppModule,
    user: UserModule
  },
  plugins: [
    createPersistedState({
      key: 'smart_bot',
      paths: [
        'app',
        'user'
      ],
      storage: {
        getItem: (key) => localStorage.getItem(key),
        setItem: (key, data) => localStorage.setItem(key, data),
        removeItem: (key) => localStorage.removeItem(key),
      }
    })
  ]

});
