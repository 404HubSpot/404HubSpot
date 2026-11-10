<template>
  <div class="page-shell landing-page" ref="root">
    <GlobalNav />
    <main v-if="project" id="main-content" tabindex="-1">
      <section class="site-container profile-hero case-hero" data-hero>
        <router-link to="/work" class="text-action profile-back"
          ><UiIcon name="arrow" class="flip" /> All work</router-link
        >
        <div class="case-head">
          <div>
            <span class="hero-kicker"
              ><span class="status-dot"></span> OPEN-SOURCE CASE STUDY ·
              EVIDENCE READ {{ snapshot.retrievedAt.toUpperCase() }}</span
            >
            <h1>{{ project.title }}</h1>
            <p class="case-subtitle">{{ project.subtitle }}</p>
            <div class="tag-list case-tags">
              <span v-for="label in serviceLabels" :key="label">{{ label }}</span>
              <span v-for="item in project.stack.slice(0, 4)" :key="item">{{
                item
              }}</span>
            </div>
            <div class="hero-actions">
              <a
                :href="project.repos[0].url"
                target="_blank"
                rel="noopener noreferrer"
                class="action action-dark"
                data-magnetic
                >Open the repository <UiIcon name="diagonal"
              /></a>
              <router-link
                :to="`/contact?service=${project.services[0]}`"
                class="text-action"
                >Discuss a similar build <UiIcon name="arrow"
              /></router-link>
            </div>
          </div>
          <div
            class="case-cover"
            :class="`tone-${project.cover.tone}`"
            role="img"
            :aria-label="project.cover.alt"
          >
            <span class="project-mark" aria-hidden="true">{{
              project.cover.mark
            }}</span>
            <span class="case-cover-meta" aria-hidden="true"
              >{{ project.repos[0].name }} ·
              {{ project.repos[0].language }}</span
            >
          </div>
        </div>
      </section>

      <section class="site-container case-story" data-reveal>
        <div class="detail-grid">
          <div>
            <div class="case-section" data-reveal>
              <span class="eyebrow">01 / THE PROBLEM</span>
              <h2>The problem</h2>
              <p>{{ project.context }}</p>
            </div>
            <div class="case-section" data-reveal>
              <span class="eyebrow">02 / WHY IT WAS HARD</span>
              <h2>What was hard</h2>
              <p>{{ project.challenge }}</p>
            </div>
            <div class="case-section" data-reveal>
              <span class="eyebrow">03 / HOW IT WAS BUILT</span>
              <h2>How it was built</h2>
              <ol class="case-list">
                <li v-for="item in project.implementation" :key="item">
                  {{ item }}
                </li>
              </ol>
            </div>
            <div class="case-section" data-reveal>
              <span class="eyebrow">04 / WHAT IT PRODUCED</span>
              <h2>What it produced</h2>
              <ul class="case-list case-outcomes">
                <li v-for="outcome in project.outcomes" :key="outcome.text">
                  <UiIcon name="spark" />
                  <div>
                    <p>{{ outcome.text }}</p>
                    <span class="case-basis">{{ outcome.basis }}</span>
                  </div>
                </li>
              </ul>
            </div>
            <div class="case-section case-limits" data-reveal>
              <span class="eyebrow">05 / WHAT THIS DOES NOT CLAIM</span>
              <h2>What this does not claim</h2>
              <p>{{ project.limits }}</p>
            </div>
          </div>

          <aside class="case-sidebar">
            <div class="panel-card" data-reveal>
              <span class="eyebrow">THE BUILD</span>
              <dl class="case-facts">
                <div>
                  <dt>Built by</dt>
                  <dd>
                    <router-link v-if="owner" :to="`/team/${owner.slug}`"
                      >{{ owner.name }} <UiIcon name="arrow"
                    /></router-link>
                    <template v-else>{{ project.owner }}</template>
                  </dd>
                </div>
                <div>
                  <dt>Role</dt>
                  <dd>{{ project.role }}</dd>
                </div>
                <div>
                  <dt>Services</dt>
                  <dd>
                    <router-link
                      v-for="service in project.services"
                      :key="service"
                      :to="`/services/${service}`"
                      >{{ labelFor(service) }} <UiIcon name="arrow"
                    /></router-link>
                  </dd>
                </div>
                <div>
                  <dt>Stack</dt>
                  <dd>{{ project.stack.join(" · ") }}</dd>
                </div>
              </dl>
            </div>

            <div class="panel-card case-evidence" data-reveal>
              <span class="eyebrow">EVIDENCE</span>
              <ul>
                <li v-for="repo in project.repos" :key="repo.name">
                  <a :href="repo.url" target="_blank" rel="noopener noreferrer"
                    >{{ repo.name }} <UiIcon name="diagonal"
                  /></a>
                  <span
                    >{{ repo.language }} · README read
                    {{ repo.readmeRetrieved }}</span
                  >
                </li>
              </ul>
              <p class="case-permission">{{ project.permissionBasis }}</p>
            </div>

            <div class="panel-card case-inquiry" data-reveal>
              <span class="eyebrow">START FROM HERE</span>
              <h2>Need something like {{ project.title }}?</h2>
              <p>
                Tell us what your version has to do. We scope from your
                requirements, not from this build's features.
              </p>
              <router-link
                :to="`/contact?service=${project.services[0]}`"
                class="action action-dark"
                >Request a scoped quote <UiIcon name="arrow"
              /></router-link>
              <a
                :href="whatsappUrl(`Hello 404HubSpot, I read the ${project.title} case study and have a similar project.`)"
                target="_blank"
                rel="noopener noreferrer"
                class="text-action"
                >Chat on WhatsApp <UiIcon name="diagonal"
              /></a>
            </div>
          </aside>
        </div>
      </section>

      <section class="site-container case-footer" data-reveal>
        <div class="panel-card case-footer-card">
          <router-link to="/work" class="text-action"
            ><UiIcon name="arrow" class="flip" /> All work</router-link
          >
          <p>
            Repositories change after the date we read them. If something here
            no longer matches the code, trust the repository — and tell us.
          </p>
        </div>
      </section>
    </main>

    <main v-else id="main-content" tabindex="-1">
      <section class="site-container profile-hero case-missing" data-hero>
        <span class="hero-kicker"
          ><span class="status-dot"></span> CASE STUDY NOT PUBLISHED</span
        >
        <h1>This case study <em>isn't published.</em></h1>
        <p>
          The link may be wrong, or the build may be held back until its public
          evidence and permission are recorded. We would rather show nothing than
          a story we cannot back up.
        </p>
        <div class="hero-actions">
          <router-link to="/work" class="action action-dark"
            >See published work <UiIcon name="arrow"
          /></router-link>
          <router-link to="/contact" class="text-action"
            >Ask us directly <UiIcon name="diagonal"
          /></router-link>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>
<script>
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import GlobalNav from "../components/GlobalNav.vue";
import Footer from "../components/Footer.vue";
import UiIcon from "../components/UiIcon.vue";
import {
  filterLabel,
  findProject,
  portfolioSnapshot,
} from "../data/projects";
import { team, whatsappUrl } from "../data/site";
import { useReveal, useMagnetic } from "../composables/useReveal";

export default {
  name: "CaseStudy",
  components: { GlobalNav, Footer, UiIcon },
  setup() {
    const root = ref(null);
    const route = useRoute();
    useReveal(root);
    useMagnetic(root);
    const project = computed(() => findProject(route.params.slug));
    const owner = computed(
      () => team.find((member) => member.slug === project.value?.owner) || null,
    );
    const serviceLabels = computed(() =>
      project.value ? project.value.services.map(labelFor) : [],
    );
    return {
      root,
      project,
      owner,
      serviceLabels,
      snapshot: portfolioSnapshot,
      labelFor,
    };
  },
  methods: { whatsappUrl },
};

function labelFor(serviceId) {
  return filterLabel(serviceId);
}
</script>
