import Vue from 'vue';
import VueRouter from 'vue-router';

import appRoutes from '@/router/app.routes';
import adminRoutes from '@/router/admin.routes';
import landingRoutes from '@/router/landing.routes';

Vue.use(VueRouter);

const routes = () => {

  console.log(window.location)
  const subdomains = {
    app: appRoutes,
    admin: adminRoutes,
    landing: landingRoutes,
    allowedOrigins: ['app', 'admin'],
  };

  const splitHost = window.location.hostname.split('.');
  const sub = splitHost.shift();

  console.log('splitHost', splitHost)
  console.log('sub', sub)
  if (subdomains.allowedOrigins.includes(sub)) return subdomains[sub];
  else return subdomains.landing;
}

console.log('routes()', routes())
console.log('process.env.BASE_URL', process.env.BASE_URL)
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes(),
});

export default router;

/*
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( '../views/About.vue'),
},
{
  path: '/auth',
    name: 'AuthPage',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import('../views/app/AuthenticatePage'),
  children: [
  {
    path: 'login',
    name: 'LoginForm',
    component: () => import('@/components/app/auth/BoxedLoginForm')
  }
]
},
];
 */
