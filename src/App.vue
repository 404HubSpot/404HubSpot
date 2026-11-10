<template>
  <div id="app">
    <router-view v-slot="{ Component, route }">
      <!-- Reduced motion skips the transition entirely. Calling the JS hooks'
           `done` synchronously under mode="out-in" left the incoming view
           unmounted (blank page) on in-app navigation. -->
      <transition
        v-if="!reducedMotion"
        :css="false"
        @before-enter="beforeEnter"
        @enter="enter"
        @leave="leave"
        mode="out-in"
      >
        <!-- Keyed by path so query-only changes (e.g. /work?service=...) do not
             remount and re-animate the whole page. -->
        <component :is="Component" :key="route.path" />
      </transition>
      <component v-else :is="Component" :key="route.path" />
    </router-view>
  </div>
</template>

<script>
import { gsap } from "gsap";

const reduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default {
  name: "App",
  data() {
    return { reducedMotion: reduced() };
  },
  mounted() {
    this.motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    this.onMotionChange = (event) => {
      this.reducedMotion = event.matches;
    };
    this.motionQuery.addEventListener("change", this.onMotionChange);
  },
  beforeUnmount() {
    this.motionQuery?.removeEventListener("change", this.onMotionChange);
  },
  methods: {
    beforeEnter(el) {
      // Never hide the view in a background tab: requestAnimationFrame does not
      // run there, so the entrance would leave the page stuck invisible.
      if (!reduced() && document.visibilityState === "visible")
        gsap.set(el, { autoAlpha: 0, y: 18 });
    },
    enter(el, done) {
      if (reduced()) return done();
      gsap.to(el, { autoAlpha: 1, y: 0, duration: 0.45, ease: "power3.out", onComplete: done, overwrite: "auto" });
    },
    leave(el, done) {
      if (reduced()) return done();
      gsap.to(el, { autoAlpha: 0, y: -12, duration: 0.25, ease: "power2.in", onComplete: done, overwrite: "auto" });
    },
  },
};
</script>
