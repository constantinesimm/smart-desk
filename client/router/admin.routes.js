const adminRoutes = [
  {
    path: '/',
    name: 'AdminPage',
    component: () => import('../views/admin/AdminPage')
  }
];

export default adminRoutes;
