import { createRouter, createWebHistory } from 'vue-router'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
import HomeView from '../views/HomeView.vue'
import PremiumVtcView from '../views/PremiumVtcView.vue'
import MakaraView from '../views/MakaraView.vue'
import LamarcheView from '../views/LamarcheView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    { path: '/premium-vtc', name: 'premium-vtc', component: PremiumVtcView },
    { path: '/makara', name: 'makara', component: MakaraView },
    { path: '/lamarche', name: 'lamarche', component: LamarcheView }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) {
      return new Promise(resolve => {
        requestAnimationFrame(() => {
          const el = document.querySelector(to.hash)
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' })
            resolve({ el: to.hash })
          } else {
            resolve({ top: 0 })
          }
        })
      })
    }
    return { top: 0 }
  }
})

router.beforeEach((to, from, next) => {
  try {
    ScrollTrigger.getAll().forEach(t => t.kill())
    gsap.globalTimeline.clear()
  } catch(e) { }
  next()
})

export default router
