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
        component: () => import('@/components/app/auth/BoxedLoginForm'),
        meta: {
          layout: 'blank'
        },
      },
      {
        path: 'register',
        name: 'RegisterPage',
        component: () => import('@/components/app/auth/BoxedRegisterForm'),
        meta: {
          layout: 'blank'
        },
      },
      {
        path: 'register/confirm',
        name: 'RegisterConfirmPage',
        component: () => import('@/components/app/auth/BoxedRegisterForm'),
        meta: {
          layout: 'blank'
        }
      },
      {
        path: 'password/restore',
        name: 'PasswordRestorePage',
        component: () => import('@/components/app/auth/BoxedRegisterForm'),
        meta: {
          layout: 'blank'
        }
      },
    ]
  },
  {
    path: '/dashboard',
    name: 'DashboardPage',
    component: () => import('@/views/app/DashboardPage')
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

export default appRoutes;
