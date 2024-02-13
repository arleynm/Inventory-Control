import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router'; 

import Home from '../views/HomeView.vue';
import Login from '../views/LoginView.vue';
import Inicial from '../views/InicialView.vue';
import users from '../views/UserControlView.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/inicial',
    name: 'Inicial',
    component: Inicial,
  },
  {
    path: '/users',
    name: 'users',
    component: users,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;