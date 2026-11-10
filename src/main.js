import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'
import './styles/landing.css'
import './styles/portfolio.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
gsap.defaults({ duration: 0.6, ease: 'power3.out' })

// Customer auth (Clerk) is deferred to the fullstack phase —
// see project-kit/feature-specs/34-customer-auth.md (PLANNED).

const app = createApp(App)
app.use(router)
app.mount('#app')
