import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';

import landingRoutes from './landing.routes';
import appRoutes from './app.routes';
import adminRoutes from './admin.routes';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: location.hostname.split('.')[0] === 'app' ? appRoutes : landingRoutes,
  mode: 'history',
  base: __dirname,
});

export default router;
