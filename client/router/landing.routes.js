import LandingPage from "@/views/landing/LandingPage";

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    meta: {
      layout: 'landing'
    },
    component: LandingPage
  }
]

export default routes;
