<template>
  <div class="page-shell landing-page" ref="root">
    <GlobalNav />
    <main id="main-content" tabindex="-1">
      <PageHero
        kicker="WORK — EVIDENCE FIRST"
        title="Real builds. <em>Readable evidence.</em>"
        lede="Open-source work by the 404HubSpot team, grouped by the service it belongs to. Every card links to the public repository it describes."
      >
        <template #actions>
          <a
            :href="whatsappUrl('Hello 404HubSpot, I have a project similar to the work on your site.')"
            target="_blank"
            rel="noopener noreferrer"
            class="action action-dark"
            data-magnetic
            >Discuss your build <UiIcon name="diagonal"
          /></a>
          <router-link to="/contact" class="text-action"
            >Ask a question <UiIcon name="arrow"
          /></router-link>
        </template>
        <template #art>
          <div class="hero-art work-hero-art">
            <div class="work-hero-panel">
              <span class="eyebrow">WHAT IS ON THIS PAGE</span>
              <ul class="work-hero-list">
                <li>
                  <b>{{ projects.length }}</b><span>published builds</span>
                </li>
                <li>
                  <b>{{ ownerCount }}</b><span>team members credited</span>
                </li>
                <li>
                  <b>{{ repoCount }}</b><span>public repositories linked</span>
                </li>
              </ul>
              <p>
                Descriptions were read from each repository on
                {{ snapshot.retrievedAt }}. No screenshots, client names or
                performance claims appear without recorded permission.
              </p>
            </div>
          </div>
        </template>
      </PageHero>

      <section class="site-container work-section" data-reveal>
        <div class="section-heading">
          <div>
            <span class="eyebrow">01 / FILTER BY SERVICE</span>
            <h2>Find the work <span class="muted-heading">closest to yours.</span></h2>
          </div>
          <p>
            Filters live in the address bar, so a filtered view can be shared or
            reloaded. Browser back returns to the previous selection.
          </p>
        </div>

        <div class="work-tools">
          <div class="work-filters" role="group" aria-label="Filter work by service">
            <button
              v-for="filter in portfolioFilters"
              :key="filter.id"
              type="button"
              class="work-filter"
              :class="{ 'is-active': selected === filter.id }"
              :aria-pressed="selected === filter.id"
              @click="setFilter(filter.id)"
            >
              {{ filter.label }}
              <span aria-hidden="true">{{ countFor(filter.id) }}</span>
            </button>
          </div>
          <p class="work-count" aria-live="polite">
            Showing {{ visible.length }} of {{ projects.length }}
            {{ visible.length === 1 ? "build" : "builds" }}
            <template v-if="selected !== 'all'">in {{ selectedLabel }}</template>
          </p>
        </div>

        <p v-if="unknownFilter" class="work-note" role="status">
          “{{ rawFilter }}” is not a filter we publish, so every build is shown.
          <button type="button" class="link-button" @click="setFilter('all')">
            Clear the filter
          </button>
        </p>

        <div v-if="visible.length" class="work-grid">
          <ProjectCard
            v-for="project in visible"
            :key="project.slug"
            :project="project"
            data-reveal
          />
        </div>

        <div v-else class="panel-card work-empty">
          <span class="eyebrow">NO PUBLISHED WORK IN THIS CATEGORY</span>
          <h2>Nothing in {{ selectedLabel }} yet.</h2>
          <p>
            We only publish builds we can show public evidence for, so this
            category stays empty until a project clears that bar. You can still
            talk to us about the work — the scope comes from your project, not
            from a sample.
          </p>
          <div class="hero-actions">
            <button type="button" class="action action-dark" @click="setFilter('all')">
              Show all work <UiIcon name="arrow" />
            </button>
            <router-link
              :to="`/contact?service=${selected}`"
              class="text-action"
              >Discuss a {{ selectedLabel.toLowerCase() }} project
              <UiIcon name="arrow"
            /></router-link>
          </div>
        </div>
      </section>

      <section class="site-container section-space" data-reveal>
        <div class="panel-card work-standard">
          <span class="eyebrow">02 / WHAT WE PUBLISH, AND WHAT WE DON'T</span>
          <h2>If we cannot link to it, it does not go up.</h2>
          <ul>
            <li>
              <UiIcon name="check" />
              <span
                ><b>Every card links to a public repository.</b> The description
                is written from that repository, not from memory.</span
              >
            </li>
            <li>
              <UiIcon name="check" />
              <span
                ><b>The builder is credited.</b> These are team builds, so the
                person who wrote them is named and linked.</span
              >
            </li>
            <li>
              <UiIcon name="check" />
              <span
                ><b>Numbers are attributed or absent.</b> Where a repository
                states a measurement, the case study quotes it as the author's
                figure and says it was not reproduced by us.</span
              >
            </li>
          </ul>
          <p class="work-standard-note">
            Held back on purpose: client work without written permission,
            repositories with no readable documentation, and anything whose
            outcomes we cannot source.
          </p>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>
<script>
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import GlobalNav from "../components/GlobalNav.vue";
import Footer from "../components/Footer.vue";
import PageHero from "../components/PageHero.vue";
import UiIcon from "../components/UiIcon.vue";
import ProjectCard from "../components/portfolio/ProjectCard.vue";
import {
  filterLabel,
  normaliseFilter,
  portfolioFilters,
  portfolioSnapshot,
  projects,
  projectsFor,
} from "../data/projects";
import { whatsappUrl } from "../data/site";
import { useReveal, useMagnetic } from "../composables/useReveal";

export default {
  name: "Work",
  components: { GlobalNav, Footer, PageHero, UiIcon, ProjectCard },
  setup() {
    const root = ref(null);
    const route = useRoute();
    const router = useRouter();
    useReveal(root);
    useMagnetic(root);

    const snapshot = portfolioSnapshot;
    const rawFilter = computed(() => {
      const value = route.query.service;
      return Array.isArray(value) ? value[0] : value;
    });
    const selected = computed(() => normaliseFilter(route.query.service));
    const unknownFilter = computed(
      () => Boolean(rawFilter.value) && selected.value === "all",
    );
    const selectedLabel = computed(() => filterLabel(selected.value));
    const visible = computed(() => projectsFor(selected.value));
    const countFor = (id) => projectsFor(id).length;
    const ownerCount = new Set(projects.map((project) => project.owner)).size;
    const repoCount = projects.reduce(
      (total, project) => total + project.repos.length,
      0,
    );

    // push (not replace) so browser back restores the previous filter, and the
    // URL stays shareable. "all" drops the query entirely for a clean link.
    const setFilter = (id) => {
      const known = portfolioFilters.some((filter) => filter.id === id);
      const next = known ? id : "all";
      router.push({
        name: "Work",
        query: next === "all" ? {} : { service: next },
      });
    };

    return {
      root,
      snapshot,
      projects,
      portfolioFilters,
      rawFilter,
      selected,
      selectedLabel,
      unknownFilter,
      visible,
      countFor,
      ownerCount,
      repoCount,
      setFilter,
    };
  },
  methods: { whatsappUrl },
};
</script>
