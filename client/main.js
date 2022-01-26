import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

import '@/assets/styles/layout.scss'
import 'sweetalert2/dist/sweetalert2.min.css'

import vuetify from './plugins/vuetify'
import VueSweetalert2 from 'vue-sweetalert2';
import LottieAnimation from 'lottie-web-vue';
import googleAuth from 'vue-google-oauth2';

Vue.config.productionTip = process.env.NODE_ENV === 'development';

Vue.prototype.$eventHub = new Vue();

Vue.component('lottie-animation', LottieAnimation);
Vue.use(VueSweetalert2);
Vue.use({
  install: function(vue) {
    Vue.prototype.$showSuccess = function(msg) {
      vue.swal({
        text: msg,
        icon: 'success',
        timer: 5000,
        toast: true,
        position: 'top-right',
        showConfirmButton: false
      })
    };

    Vue.prototype.$showError = function(msg) {
      vue.swal({
        text: msg,
        icon: 'error',
        timer: 5000,
        toast: true,
        position: 'top-right',
        showConfirmButton: false
      })
    };
  }
});

Vue.use(googleAuth, {
  clientId: process.env.VUE_APP_GOOGLE_CLIENT_ID,
  scope: 'profile email',
  prompt: 'select_account'
});


new Vue({
  vuetify,
  router,
  store,
  render: h => h(App),
}).$mount('#app')
