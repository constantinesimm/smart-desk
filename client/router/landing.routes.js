
const landingRoutes = [
  {
    path: '/',
    name: 'LandingPage',
    component: () => import('../views/landing/LandingPage'),
    meta: {
      layout: 'landing',
      pageTitle: '$vuetify.pageTitles.landing'
    }
  },
  {
    path: '*',
    name: 'ErrorPage',
    component: () => import('@/views/ErrorPage'),
    meta: {
      layout: 'blank',
      pageTitle: '$vuetify.pageTitles.error'
    }
  }
];

export default landingRoutes;
