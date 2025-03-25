// router.js
import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import AboutPage from '../pages/AboutPage.vue';
import ProjectsPage from '../pages/ProjectsPage.vue';
import ContactPage from '../pages/ContactPage.vue';
import ErrorPage from '../pages/ErrorPage.vue';

const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/sobre', name: 'about', component: AboutPage },
  { path: '/projetos', name: 'projects', component: ProjectsPage },
  {
    path: '/projetos/:id',
    name: 'project-detail',
    component: () => import('@/pages/ProjectDetail.vue')
  },  
  { path: '/contato', name: 'contact', component: ContactPage },
  {
    path: "/:pathMatch(.*)*", // Captura qualquer rota não definida
    name: "error-404",
    component: ErrorPage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;