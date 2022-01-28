import Vue from 'vue';
import App from './App';

import store from './store';
import router from './router';

import '@/connect-styles';
import vuetify from './plugins/vuetify';
import connectComponents from '@/connect-components';
import connectPlugins from '@/connect-plugins';

connectPlugins(Vue);
connectComponents(Vue);

Vue.prototype.$eventHub = new Vue();
Vue.config.productionTip = process.env.NODE_ENV === 'development';


new Vue({
  vuetify,
  router,
  store,
  render: h => h(App),
}).$mount('#app')
