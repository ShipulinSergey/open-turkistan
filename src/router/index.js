// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/DefaultView.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/MainView.vue'),
      },
      {
        path: 'destination',
        name: 'Destination',
        component: () => import('@/views/DestinationView.vue'),
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('@/views/AboutView.vue'),
      },
      {
        path: 'accommodation',
        name: 'Accommodation',
        component: () => import('@/views/AccommodationView.vue'),
      },
      {
        path: 'opentv',
        name: 'Opentv',
        component: () => import('@/views/OpenTVView.vue'),
      },
      {
        path: 'contacts',
        name: 'Contacts',
        component: () => import('@/views/ContactsView.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
