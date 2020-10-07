import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store/index'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      guest: true
    }
  },
  {
    path: '/authorize',
    name: 'Auth',
    component: function () {
      return import(/* webpackChunkName: "auth" */ '../views/Auth.vue')
    }
  },
  {
    path: '/search',
    name: 'About',
    component: function () {
      return import(/* webpackChunkName: "search" */ '../views/Search.vue')
    },
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/album',
    name: 'Album',
    component: function () {
      return import(/* webpackChunkName: "album" */ '../views/Album.vue')
    },
    meta: {
      requiresAuth: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/')
    return
  }
  if (to.matched.some(record => record.meta.guest)) {
    if (store.getters.isLoggedIn) {
      next('/search')
      return
    }
    next()
    return
  }
  next()
})

export default router
