import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) => {
  if (!window._vm) return next()
  const eventBus = window._vm.$bus
  eventBus.$emit('toogle_transition', 'slide-none')
  if (eventBus.can_transition) {
    if (from.meta.tree > to.meta.tree) {
      eventBus.$emit('toogle_transition', 'slide-right')
    }
    if (from.meta.tree < to.meta.tree) {
      eventBus.$emit('toogle_transition', 'slide-left')
    }
    eventBus.can_transition = false
  }
  next()
})


export default router
