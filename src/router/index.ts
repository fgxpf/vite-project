import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/components/HelloWorld.vue')
  },
  {
    path: '/map',
    component: () => import('@/components/map/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;
