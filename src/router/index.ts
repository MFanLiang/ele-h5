import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import TabsView from '../views/tabs/TabsView.vue';

const routes: Array<RouteRecordRaw> = [
  // 路由重定向
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/tabs',
    name: 'tabs',
    component: TabsView,
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@views/tabs/home/index.vue'),
      },
      {
        path: '/order',
        name: 'order',
        component: () => import('@views/tabs/order/index.vue'),
      },
      {
        path: '/me',
        name: 'me',
        component: () => import('@views/tabs/me/index.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
