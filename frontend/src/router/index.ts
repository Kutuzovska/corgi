import { createRouter, createWebHashHistory } from 'vue-router';
import TheAuth from '../pages/TheAuth.vue';
import TheHome from '../pages/TheHome.vue';
import App from '../App.vue';

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: App,
      redirect: '/home',
    },
    {
      path: '/home',
      component: TheHome,
    },
    {
      path: '/auth',
      component: TheAuth,
    },
  ],
});
