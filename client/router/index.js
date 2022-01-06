import Vue from 'vue';
import VueRouter from 'vue-router';

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

export default router;
