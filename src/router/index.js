import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: EventListView,
      props: (route) => ({ page: parseInt(route.query.page) || 1 })
    },
    {
      path: '/event/:id',
      name: 'event-layout',
      props: true,
      component: () => import('../views/event/Layout.vue'),
      children: [
        {
          path: '',
          name: 'event-details',
          component: () => import('../views/event/Details.vue')
        },
        {
          path: 'register',
          name: 'event-register',
          component: () => import('../views/event/Register.vue')
        },
        {
          path: 'edit',
          name: 'event-edit',
          component: () => import('../views/event/Edit.vue')
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/About.vue')
    }
  ]
})

export default router
