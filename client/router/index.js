import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';

import appRoutes from '@/router/app.routes';
import adminRoutes from '@/router/admin.routes';
import landingRoutes from '@/router/landing.routes';

Vue.use(VueRouter);

const routes = () => {
  const subdomains = {
    app: appRoutes,
    admin: adminRoutes,
    landing: landingRoutes,
    allowedOrigins: ['app', 'admin'],
  };

  const splitHost = window.location.hostname.split('.');
  const sub = splitHost.shift();

  if (subdomains.allowedOrigins.includes(sub)) return subdomains[sub];
  else return subdomains.landing;
}


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes(),
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.isPublicRoute)) {
    if (!store.getters['user/getAuthStatus']) next();
    else next({ name: 'DashboardPage' });
  } else if (to.matched.some(record => record.meta.isPrivateRoute)) {
    if (!store.getters['user/getAuthStatus']) next({ name: 'LoginPage', query: { redirect: to.fullPath } })
    else next();
  }
})

export default router;
