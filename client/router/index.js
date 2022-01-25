import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';

import appRoutes from '@/router/app.routes';
import adminRoutes from '@/router/admin.routes';

Vue.use(VueRouter);

const handleRoutes = () => {
  const splitHost = window.location.hostname.split('.');

  if (splitHost[0] === 'app') return appRoutes;
  else if (splitHost[0] === 'admin') return adminRoutes;
  else return [
      {
        path: '/',
        name: 'LandingPage',
        component: () => import('@/views/landing/LandingPage'),
        meta: {
          isLandingPage: true,
          pageTitle: '$vuetify.pageTitles.landing'
        }
      },
      {
        path: '*',
        redirect: '/'
      }
    ];
}

const routes = handleRoutes();

const router = new VueRouter({
  routes,
  mode: 'history',
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.isPublicRoute)) {
    if (!store.getters['user/getAuthStatus']) next();
    else next('/dashboard');
  }

  if (to.matched.some(record => record.meta.isPrivateRoute)) {
    if (!store.getters['user/getAuthStatus']) next({ name: 'LoginPage', query: { redirect: to.fullPath } })
    else next();
  }

  if (to.matched.some(record => record.meta.isLandingPage)) next();
})

export default router;
