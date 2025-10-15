import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Animations
import gsap from 'gsap'
import Lenis from '@studio-freight/lenis'

const app = createApp(App)

app.use(router)

// expose gsap on globalProperties for components to use
app.config.globalProperties.$gsap = gsap

// init lenis smooth scroll
const lenis = new Lenis({ smooth: true, duration: 1.2 })
function raf(time) {
	lenis.raf(time)
	requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

app.mount('#app')
