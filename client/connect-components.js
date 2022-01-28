import VueSweetalert2 from 'vue-sweetalert2';
import LottieAnimation from 'lottie-web-vue';
import Vue from "vue";

const connectComponents = Vue => {
  /**
   * Notifications Components
   */
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

  /**
   * Animation Components
   */
  Vue.component('lottie-animation', LottieAnimation);

  /**
   * App Layout Components
   */
  Vue.component('Blanklayout', () => import('@/layouts/BlankLayout'));
  Vue.component('ContentLayout', () => import('@/layouts/ContentLayout'));
  Vue.component('LandingLayout', () => import('@/layouts/LandingLayout'));
};

export default connectComponents;
