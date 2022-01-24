const appRoutes = [
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/auth',
    name: 'AuthenticatePage',
    component: () => import('@/views/app/AuthenticatePage'),
    children: [
      {
        path: 'login',
        name: 'LoginPage',
        component: () => import('@/components/app/auth/LoginForm'),
        meta: {
          layout: 'blank',
          isPublicRoute: true,
          pageTitle: '$vuetify.pageTitles.app.login'
        },
      },
      {
        path: 'register',
        name: 'RegisterPage',
        component: () => import('@/components/app/auth/RegisterForm'),
        meta: {
          layout: 'blank',
          isPublicRoute: true,
          pageTitle: '$vuetify.pageTitles.app.register'
        },
      },
      {
        path: 'register/confirm',
        name: 'RegisterConfirmPage',
        component: () => import('@/components/app/auth/ConfirmForm'),
        meta: {
          layout: 'blank',
          isPublicRoute: true,
          pageTitle: '$vuetify.pageTitles.app.register'
        }
      },
      {
        path: 'password/restore',
        name: 'PasswordRestorePage',
        component: () => import('@/components/app/auth/PasswordRecoveryForm'),
        meta: {
          layout: 'blank',
          isPublicRoute: true,
          pageTitle: '$vuetify.pageTitles.app.register'
        }
      },
      {
        path: 'password/change',
        name: 'PasswordChangePage',
        component: () => import('@/components/app/auth/ConfirmForm'),
        meta: {
          layout: 'blank',
          isPublicRoute: true,
          pageTitle: '$vuetify.pageTitles.app.register'
        }
      },
    ]
  },
  {
    path: '/dashboard',
    name: 'DashboardPage',
    component: () => import('@/views/app/DashboardPage'),
    meta: {
      layout: 'content',
      isPrivateRoute: true,
      pageTitle: '$vuetify.pageTitles.app.dashboard'
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

export default appRoutes;
