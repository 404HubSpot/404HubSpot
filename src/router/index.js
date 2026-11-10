import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ProgrammingClasses from '../views/ProgrammingClasses.vue'
import Contact from '../views/Contact.vue'
import OurProcess from '../views/OurProcess.vue'
import WebDevelopment from '../views/services/WebDevelopment.vue'
import SoftwareDevelopment from '../views/services/SoftwareDevelopment.vue'
import MobileApps from '../views/services/MobileApps.vue'
import MPesaIntegration from '../views/services/MPesaIntegration.vue'
import GraphicsDesign from '../views/services/GraphicsDesign.vue'
import TeamDetail from '../views/TeamDetail.vue'
import Work from '../views/Work.vue'
import CaseStudy from '../views/CaseStudy.vue'
import NotFound from '../views/NotFound.vue'
import CourseDetail from '../views/CourseDetail.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/programming-classes', name: 'ProgrammingClasses', component: ProgrammingClasses },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/our-process', name: 'OurProcess', component: OurProcess },
  { path: '/work', name: 'Work', component: Work },
  { path: '/work/:slug', name: 'CaseStudy', component: CaseStudy },
  { path: '/services/web-development', name: 'WebDevelopment', component: WebDevelopment },
  { path: '/services/software-development', name: 'SoftwareDevelopment', component: SoftwareDevelopment },
  { path: '/services/mobile-apps', name: 'MobileApps', component: MobileApps },
  { path: '/services/m-pesa-integration', name: 'MPesaIntegration', component: MPesaIntegration },
  { path: '/services/graphics-design', name: 'GraphicsDesign', component: GraphicsDesign },
  { path: '/team/:slug', name: 'TeamDetail', component: TeamDetail },
  { path: '/classes/:slug', name: 'CourseDetail', component: CourseDetail },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, top: 100 }
    return { top: 0 }
  }
})

router.afterEach(async (to) => {
  const { applySeo } = await import("../lib/seo");
  const { team } = await import("../data/site");
  const { courses } = await import("../data/courses");
  const { projects } = await import("../data/projects");
  applySeo(to, team, courses, projects);
});

export default router
