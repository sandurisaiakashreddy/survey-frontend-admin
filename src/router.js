import { createWebHistory, createRouter } from "vue-router";
import Test from '@/components/Test.vue'
import Admin from '@/components/Admin.vue'
import Login from '@/components/Login.vue'
import SurveyManager from '@/components/SurveyManger.vue'
import AddSurvey from '@/components/AddSurvey.vue'
const routes =  [
  {
    path: '/test/:id',
    name: 'test',
    component: Test
  },
  {
    path: '/admin',
    name: 'admin-view',
    component: Admin
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  //suvery manager page, after logging in
  {
    path: '/surveymanager/:id',
    name: 'view of survey manager',
    component: SurveyManager
  },
  //new survey
  {
    path: '/new-survey/:id',
    name: 'new survey',
    component: AddSurvey
  },
  {
    path: '/survey-question/:id',
    name: 'Add question',
    component: Test
  }
];
const router = createRouter({
  base: process.env.NODE_ENV === 'development' ? '/' : '/album-frontend/',
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
