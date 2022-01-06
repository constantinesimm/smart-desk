import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import '@/assets/styles/layout.scss'
import vuetify from './plugins/vuetify'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.config.productionTip = process.env.NODE_ENV === 'development';

Vue.prototype.$eventHub = new Vue();

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


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#smartBot-app')
