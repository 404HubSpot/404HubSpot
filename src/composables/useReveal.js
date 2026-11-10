import { onMounted, onUnmounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Scoped scroll-reveal: fades/slides [data-reveal] once into view.
// Respects prefers-reduced-motion, cleans up on unmount (gsap.context revert).
export function useReveal(rootRef, options = {}) {
  let ctx = null;
  const reduceQuery =
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)")
      : { matches: true };

  onMounted(() => {
    // A hidden document never advances requestAnimationFrame, so GSAP's from
    // state would stay applied and leave the content invisible. Skip the
    // entrance entirely rather than hide content an animation cannot reveal.
    if (
      !rootRef.value ||
      reduceQuery.matches ||
      document.visibilityState === "hidden"
    )
      return;
    ctx = gsap.context(() => {
      gsap.utils.toArray("[data-reveal]").forEach((el, i) => {
        gsap.fromTo(
          el,
          { autoAlpha: 0, y: 26 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            delay: Math.min((i % 4) * 0.06, 0.24),
            overwrite: "auto",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              once: true,
            },
            ...options,
          },
        );
      });
      // Gentle hero entrance for [data-hero] children
      const heroKids = gsap.utils.toArray("[data-hero] > *");
      if (heroKids.length) {
        gsap.fromTo(
          heroKids,
          { autoAlpha: 0, y: 22 },
          { autoAlpha: 1, y: 0, duration: 0.7, ease: "power3.out", stagger: 0.08 },
        );
      }
    }, rootRef.value);
  });

  onUnmounted(() => {
    ctx?.revert();
    ScrollTrigger.getAll().forEach((t) => {
      if (t.trigger && rootRef.value?.contains(t.trigger)) t.kill();
    });
  });
}

export { gsap, ScrollTrigger };

// Magnetic hover for [data-magnetic]: subtle GSAP pull toward cursor.
// Desktop pointers only, reduced-motion safe, cleaned up on unmount.
export function useMagnetic(rootRef, strength = 6) {
  let ctx = null;
  onMounted(() => {
    if (
      !rootRef.value ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      window.matchMedia("(pointer: coarse)").matches
    )
      return;
    ctx = gsap.context(() => {
      gsap.utils.toArray("[data-magnetic]").forEach((el) => {
        const xTo = gsap.quickTo(el, "x", { duration: 0.3, ease: "power3" });
        const yTo = gsap.quickTo(el, "y", { duration: 0.3, ease: "power3" });
        el.addEventListener("mousemove", (e) => {
          const r = el.getBoundingClientRect();
          xTo(((e.clientX - r.left) / r.width - 0.5) * strength * 2);
          yTo(((e.clientY - r.top) / r.height - 0.5) * strength * 2);
        });
        el.addEventListener("mouseleave", () => {
          xTo(0);
          yTo(0);
        });
      });
    }, rootRef.value);
  });
  onUnmounted(() => ctx?.revert());
}
