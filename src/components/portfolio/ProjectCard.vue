<template>
  <article class="project-card">
    <div
      class="project-cover"
      :class="`tone-${project.cover.tone}`"
      role="img"
      :aria-label="project.cover.alt"
    >
      <span class="project-mark" aria-hidden="true">{{ project.cover.mark }}</span>
      <span class="project-cover-tag" aria-hidden="true">{{
        serviceLabels.join(" · ")
      }}</span>
    </div>
    <div class="project-body">
      <div class="project-meta">
        <span class="eyebrow">OPEN-SOURCE BUILD</span>
        <span v-if="owner">BY {{ owner.name.toUpperCase() }}</span>
      </div>
      <h3>
        <router-link v-if="project.publishedDetail" :to="`/work/${project.slug}`">
          {{ project.title }}<UiIcon name="diagonal" />
        </router-link>
        <template v-else>{{ project.title }}<UiIcon name="diagonal" /></template>
      </h3>
      <p>{{ project.summary }}</p>
      <div class="tag-list project-tags">
        <span v-for="label in serviceLabels" :key="label">{{ label }}</span>
      </div>
      <div class="project-foot">
        <a
          :href="primaryRepo.url"
          target="_blank"
          rel="noopener noreferrer"
          class="text-action"
          >{{ primaryRepo.name }} <UiIcon name="diagonal"
        /></a>
        <router-link
          v-if="project.publishedDetail"
          :to="`/work/${project.slug}`"
          class="text-action"
          :aria-label="`Read the ${project.title} case study`"
          >The story <UiIcon name="arrow"
        /></router-link>
      </div>
    </div>
  </article>
</template>
<script>
import UiIcon from "../UiIcon.vue";
import { team } from "../../data/site";
import { portfolioFilters } from "../../data/projects";
export default {
  name: "ProjectCard",
  components: { UiIcon },
  props: { project: { type: Object, required: true } },
  computed: {
    owner() {
      return team.find((member) => member.slug === this.project.owner) || null;
    },
    primaryRepo() {
      return this.project.repos[0];
    },
    serviceLabels() {
      return this.project.services
        .map(
          (id) =>
            portfolioFilters.find((filter) => filter.id === id)?.label || id,
        )
        .slice(0, 2);
    },
  },
};
</script>
