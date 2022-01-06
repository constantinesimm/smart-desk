import Vue from 'vue';
Vue.prototype.$eventHub = new Vue();

export default Vue.prototype.$eventHub;
