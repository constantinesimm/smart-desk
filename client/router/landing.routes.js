const landingRoutes = [
  {
    path: '/',
    name: 'LandingPage',
    component: () => import('../views/landing/LandingPage'),
    meta: {
      layout: 'blank'
    }
  },
  {
    path: '*',
    name: 'ErrorPage',
    component: () => import('@/views/ErrorPage'),
    meta: {
      layout: 'blank'
    }
  }
];

export default landingRoutes;
