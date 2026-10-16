<template>
  <div class="page-shell landing-page" ref="root">
    <GlobalNav />
    <main id="main-content" tabindex="-1" v-if="course">
      <section class="site-container profile-hero" data-hero>
        <router-link to="/programming-classes" class="text-action profile-back"><UiIcon name="arrow" class="flip" /> All courses</router-link>
        <div>
          <span class="hero-kicker"><span class="status-dot"></span> {{ course.level.toUpperCase() }} · {{ course.duration.toUpperCase() }}</span>
          <h1 style="font-size: clamp(38px, 4.5vw, 60px)">{{ course.name }}</h1>
          <p style="color: var(--site-muted); margin-top: 14px; font-size: 14px; line-height: 1.8; max-width: 640px">{{ course.description }}</p>
          <div class="tag-list" style="margin-top: 16px">
            <span v-for="t in course.track" :key="t">{{ t }}</span>
            <span v-if="course.fee">{{ course.fee }}</span>
          </div>
          <div class="hero-actions">
            <a :href="whatsappUrl(`Hello 404HubSpot, ${course.cta}.`)" target="_blank" rel="noopener noreferrer" class="action action-dark" data-magnetic>Join on WhatsApp <UiIcon name="diagonal" /></a>
            <router-link to="/contact" class="text-action">Ask a question <UiIcon name="arrow" /></router-link>
          </div>
        </div>
      </section>

      <section class="site-container" data-reveal>
        <div class="detail-grid">
          <div class="panel-card" data-reveal>
            <span class="eyebrow">WHAT YOU'LL LEARN</span>
            <ul style="list-style:none;padding:0;margin-top:14px;display:grid;gap:10px;font-size:13px">
              <li v-for="s in course.skills" :key="s" style="display:flex;gap:8px;align-items:flex-start"><UiIcon name="check" /> {{ s }}</li>
            </ul>
            <span class="eyebrow" style="margin-top:22px">YOU LEAVE WITH</span>
            <ul style="list-style:none;padding:0;margin-top:14px;display:grid;gap:10px;font-size:13px">
              <li v-for="o in course.outcomes" :key="o" style="display:flex;gap:8px;align-items:flex-start"><UiIcon name="spark" /> {{ o }}</li>
            </ul>
          </div>
          <div>
            <router-link v-if="mentor" :to="`/team/${mentor.slug}`" class="team-card-link" :aria-label="`Mentor ${mentor.name}`" data-reveal>
              <article class="team-card">
                <div class="team-portrait" style="height:200px">
                  <img v-if="mentorSrc" :src="mentorSrc" :alt="mentor.name" loading="lazy" width="400" height="440" @error="stage++" />
                  <span v-else class="portrait-initials" aria-hidden="true">{{ mentor.name.split(" ").map((p) => p[0]).join("") }}</span>
                </div>
                <div class="team-details">
                  <span class="eyebrow">YOUR MENTOR</span>
                  <h3>{{ mentor.name }}</h3>
                  <span>{{ mentor.role }}</span>
                </div>
              </article>
            </router-link>
            <div class="panel-card" style="margin-top:18px" data-reveal>
              <span class="eyebrow">FACTS</span>
              <p v-if="course.fee" style="font-size:13px;margin-top:10px"><b>Fee:</b> {{ course.fee }}</p>
              <p style="font-size:13px;margin-top:6px"><b>Format:</b> {{ course.duration }}</p>
              <p style="font-size:12px;color:var(--site-muted);margin-top:8px">Ask us for current fees and availability.</p>
            </div>
          </div>
        </div>
      </section>

      <section v-if="course.evidence.length" class="section-space site-container" data-reveal>
        <div class="section-heading">
          <div><span class="eyebrow">TAUGHT FROM REAL CODE</span><h2>Shipped <span class="muted-heading">on GitHub.</span></h2></div>
          <p>Lessons reference these public repos by the team — read them before you join.</p>
        </div>
        <div class="services-grid">
          <article v-for="r in course.evidence" :key="r.url" class="service-card" data-reveal>
            <div class="service-card-top"><span class="service-icon"><UiIcon name="code" /></span><span class="card-index">@{{ r.owner }}</span></div>
            <h3><a :href="r.url" target="_blank" rel="noopener noreferrer">{{ r.name }} <UiIcon name="diagonal" /></a></h3>
            <p>Public repo used in this course.</p>
          </article>
        </div>
      </section>

      <section class="site-container" data-reveal style="padding-bottom: 88px">
        <div class="panel-card" style="display:flex;justify-content:space-between;align-items:center;gap:16px;flex-wrap:wrap">
          <router-link v-if="prev" :to="`/classes/${prev.slug}`" class="text-action">← {{ prev.name }}</router-link>
          <span v-else></span>
          <router-link v-if="next" :to="`/classes/${next.slug}`" class="text-action">{{ next.name }} →</router-link>
        </div>
      </section>
    </main>
    <main id="main-content" tabindex="-1" v-else>
      <div class="site-container" style="padding-block: 88px">
        <h1>Course not found.</h1>
        <router-link to="/programming-classes" class="text-action">All courses</router-link>
      </div>
    </main>
    <Footer />
  </div>
</template>
<script>
import { ref, computed, watch } from "vue";
import { useRoute } from "vue-router";
import GlobalNav from "../components/GlobalNav.vue";
import Footer from "../components/Footer.vue";
import UiIcon from "../components/UiIcon.vue";
import { courses } from "../data/courses";
import { team, whatsappUrl } from "../data/site";
import { useReveal, useMagnetic } from "../composables/useReveal";

export default {
  name: "CourseDetail",
  components: { GlobalNav, Footer, UiIcon },
  setup() {
    const root = ref(null);
    const route = useRoute();
    useReveal(root);
    useMagnetic(root);
    const idx = computed(() => courses.findIndex((c) => c.slug === route.params.slug));
    const course = computed(() => courses[idx.value] ?? null);
    const mentor = computed(() => team.find((m) => m.slug === course.value?.mentor) ?? null);
    const stage = ref(0);
    const mentorSrc = computed(() => {
      if (!mentor.value) return null;
      const c = [mentor.value.image, mentor.value.avatar].filter(Boolean);
      return c[Math.min(stage.value, c.length)] || null;
    });
    watch(
      () => route.params.slug,
      () => {
        stage.value = 0;
      },
    );
    const prev = computed(() => (idx.value > 0 ? courses[idx.value - 1] : null));
    const next = computed(() => (idx.value >= 0 && idx.value < courses.length - 1 ? courses[idx.value + 1] : null));
    watch(() => route.params.slug, () => {});
    return { root, course, mentor, mentorSrc, stage, prev, next };
  },
  methods: { whatsappUrl },
};
</script>
