import { createWebHistory, createRouter } from "vue-router";
import Test from '@/components/Test.vue'
import Admin from '@/components/Admin.vue'
const routes =  [
 
  {
    path: '/test',
    name: 'test',
    component: Test
  },
  {
    path: '/admin',
    name: 'admin-view',
    component: Admin
  }
];
const router = createRouter({
  base: process.env.NODE_ENV === 'development' ? '/' : '/survey-frontend-admin/',
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;