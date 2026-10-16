<template>
  <div class="page-shell landing-page" ref="root">
    <GlobalNav />
    <main id="main-content" tabindex="-1">
      <PageHero
        kicker="LEARN — FROM CURIOUS TO CAPABLE"
        title="Don't just use tech. <em>Learn to create it.</em>"
        lede="Twelve tracks taught from real shipped code. Live Google Meet classes, 1-on-1 mentorship, portfolio outcomes."
      >
        <template #actions>
          <a :href="whatsappUrl(`Hello 404HubSpot, I'd like course advice.`)" target="_blank" rel="noopener noreferrer" class="action action-dark" data-magnetic>Course advice <UiIcon name="diagonal" /></a>
          <router-link to="/contact" class="text-action">Ask about schedules <UiIcon name="arrow" /></router-link>
        </template>
        <template #art>
          <div class="hero-art" style="background: var(--site-sand)">
            <div class="lesson-window" style="margin: 28px">
              <div class="lesson-top"><span class="window-dots"><i></i><i></i><i></i></span><span>hello_future.py</span><span>Python</span></div>
              <div class="lesson-code"><span>01 <i># Every builder starts somewhere.</i></span><span>03 <b>def</b> build_your_future():</span><span>04 &nbsp;&nbsp;skills = <em>"Learn by doing"</em></span><span>07 <b>print</b>(<em>"Hello, future!"</em>)</span></div>
              <div class="lesson-output"><span>OUTPUT</span><p>Hello, future! <span class="cursor-mark">▍</span></p></div>
            </div>
            <LottiePlayer :animation-data="spark" label="Spark illustration" style="position:absolute;top:20px;right:20px;width:110px" />
          </div>
        </template>
      </PageHero>

      <section class="section-space site-container" data-reveal>
        <div class="section-heading">
          <div><span class="eyebrow">01 / TWELVE TRACKS</span><h2>Pick your track.<br /><span class="muted-heading">Build week one.</span></h2></div>
          <p>Per-level Kenya bands (owner-review). Open a track for syllabus, mentor and GitHub evidence.</p>
        </div>
        <div class="services-grid courses-grid">
          <router-link
            v-for="c in courses"
            :key="c.id"
            :to="`/classes/${c.slug}`"
            class="team-card-link"
            :aria-label="`${c.name} course details`"
            data-reveal
          >
            <article class="service-card tone-sand">
              <div class="service-card-top">
                <span class="service-icon"><UiIcon name="learn" /></span
                ><span class="card-index">/ {{ String(c.id).padStart(2, "0") }}</span>
              </div>
              <h3>{{ c.name }} <UiIcon name="diagonal" /></h3>
              <p>{{ c.tagline }} — {{ c.level }} · Ask us for current fees.</p>
              <div class="service-card-bottom">
                <div class="tag-list">
                  <span v-for="t in c.track" :key="t">{{ t }}</span>
                </div>
              </div>
            </article>
          </router-link>
        </div>
      </section>

      <section class="section-space site-container" data-reveal>
        <div class="panel-card">
          <span class="eyebrow">02 / WHY US</span>
          <h2 style="margin-top:10px">Live, personal, project-based.</h2>
          <div class="services-grid" style="margin-top:22px">
            <div><h3>Live Google Meet</h3><p style="color:var(--site-muted);font-size:12px;margin-top:8px">Interactive sessions with real-time Q&A.</p></div>
            <div><h3>1-on-1 Mentorship</h3><p style="color:var(--site-muted);font-size:12px;margin-top:8px">Guidance from people who ship daily.</p></div>
            <div><h3>Portfolio Projects</h3><p style="color:var(--site-muted);font-size:12px;margin-top:8px">Leave with work you can show.</p></div>
          </div>
          <a :href="whatsappUrl(`Hello 404HubSpot, I'd like class details and schedule.`)" target="_blank" rel="noopener noreferrer" class="action action-dark" style="margin-top:22px" data-magnetic>Ask on WhatsApp <UiIcon name="diagonal" /></a>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>
<script>
import { ref } from "vue";
import GlobalNav from "../components/GlobalNav.vue";
import Footer from "../components/Footer.vue";
import PageHero from "../components/PageHero.vue";
import LottiePlayer from "../components/LottiePlayer.vue";
import UiIcon from "../components/UiIcon.vue";
import { courses } from "../data/courses";
import { whatsappUrl } from "../data/site";
import { useReveal, useMagnetic } from "../composables/useReveal";
import spark from "../assets/lottie/spark.json";

export default {
  name: "ProgrammingClasses",
  components: { GlobalNav, Footer, PageHero, LottiePlayer, UiIcon },
  setup() {
    const root = ref(null);
    useReveal(root);
    useMagnetic(root);
    return { root, courses, spark };
  },
  methods: { whatsappUrl },
};
</script>
