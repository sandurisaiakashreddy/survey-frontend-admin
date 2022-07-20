import { createWebHistory, createRouter } from "vue-router";
import Test from '@/components/Test.vue'
import Admin from '@/components/Admin.vue'
import Login from '@/components/Login.vue'
import SurveyManager from '@/components/SurveyManger.vue'
import AddSurvey from '@/components/AddSurvey.vue'
import UserSurvey from '@/components/UserSurvey.vue'
import SurveyQuestion from '@/components/SurveyQuestion.vue'
import EditSurveyQuestion from '@/components/EditSurveyQuestion.vue'
import SubmitAnswer from '@/components/SubmitAnswer.vue'
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
  },
  {
    path: '/user-survey/:id',
    name: 'user-survey',
    component: UserSurvey
  },
  {
    path: '/view-question/:id',
    name: 'survey-specific-question-details',
    component: SurveyQuestion
  },
   //edit questions...
   {
    path: '/edit-this-survey/:id',
    name: 'survey-edit-specific-question',
    component: EditSurveyQuestion
  },
  {
    path: '/survey-feed/:id',
    name: 'survey-feed-specific-survey',
    component: SubmitAnswer
  }
];
const router = createRouter({
  base: process.env.NODE_ENV === 'development' ? '/' : '/album-frontend/',
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;