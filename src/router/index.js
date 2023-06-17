import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import('../views/HomeView.vue'),
      name: "home-view",
    },
    {
      path: "/persons",
      component:() => import('../views/PersonsView.vue'),
      name: "person-view",
    },
    {
      path: "/projects",
      component: () => import('../views/ProjectsView.vue'),
      name: "Project-View",
    },
    {
      path: "/tasks",
      component: () => import('../views/TasksView.vue'),
      name: "task-view",
    },
    {
      path: "/person/:id",
      component: () => import('../views/PersonDetail.vue'),
      name: "person-detail",
    },
    {
      path: "/task/:id",
      component: () => import('../views/TaskDetail.vue'),
      name: "task-detail",
    },
    {
      path: "/project/:id",
      component: () => import('../views/ProjectDetail.vue'),
      name: "project-detail",
    }

  ]
})

export default router

