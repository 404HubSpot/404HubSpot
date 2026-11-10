<template>
  <header
    class="site-header"
    ref="header"
    @keydown.esc="dismiss"
    @focusout="onFocusOut"
  >
    <a class="skip-link" href="#main-content" @click.prevent="skipToContent"
      >Skip to content</a
    >
    <nav class="site-container nav-row" aria-label="Main navigation">
      <router-link to="/" class="brand" aria-label="404HubSpot home"
        ><img src="/assets/logo.png" alt="" width="40" height="40" /><span
          >404<span class="brand-light">HubSpot</span
          ><span class="brand-dot">.</span></span
        ></router-link
      >
      <button
        class="menu-toggle"
        ref="mobileTrigger"
        :aria-expanded="mobileOpen"
        aria-controls="primary-navigation"
        :aria-label="mobileOpen ? 'Close navigation' : 'Open navigation'"
        @click="mobileOpen = !mobileOpen"
      >
        <UiIcon :name="mobileOpen ? 'close' : 'menu'" />
      </button>
      <div
        id="primary-navigation"
        class="nav-links"
        :class="{ 'is-open': mobileOpen }"
      >
        <div
          class="services-menu"
          ref="servicesMenu"
          @focusout="onServicesFocusOut"
        >
          <button
            ref="servicesTrigger"
            class="nav-link"
            :class="{ 'is-active': $route.path.startsWith('/services/') }"
            :aria-expanded="servicesOpen"
            aria-controls="service-navigation"
            @click="servicesOpen = !servicesOpen"
          >
            Services <UiIcon name="chevron" />
          </button>
          <div
            v-if="servicesOpen"
            id="service-navigation"
            class="service-dropdown"
          >
            <span class="eyebrow">WHAT WE CAN BUILD TOGETHER</span>
            <router-link
              v-for="service in services"
              :key="service.id"
              :to="service.route"
              ><UiIcon :name="service.icon" /><span>{{ service.title }}</span
              ><UiIcon name="diagonal"
            /></router-link>
          </div>
        </div>
        <router-link class="nav-link" to="/work">Work</router-link>
        <router-link class="nav-link" to="/programming-classes"
          >Programming Classes</router-link
        >
        <router-link class="nav-link" to="/our-process"
          >Our Process</router-link
        >
        <router-link class="nav-link" to="/contact">Contact</router-link>
        <ThemeToggle />
        <a
          class="action action-dark nav-cta"
          :href="
            whatsappUrl(
              'Hello, I would like to discuss a project with 404HubSpot.',
            )
          "
          target="_blank"
          rel="noopener noreferrer"
          >Let’s talk <UiIcon name="diagonal"
        /></a>
      </div>
    </nav>
  </header>
</template>
<script>
import UiIcon from "./UiIcon.vue";
import ThemeToggle from "./ThemeToggle.vue";
import { services, whatsappUrl } from "../data/site";
export default {
  name: "GlobalNav",
  components: { UiIcon, ThemeToggle },
  data() {
    return {
      services,
      mobileOpen: false,
      servicesOpen: false,
      mediaQuery: null,
    };
  },
  methods: {
    whatsappUrl,
    skipToContent() {
      const target =
        document.querySelector("main") || this.$refs.header.nextElementSibling;
      if (target) {
        target.id = "main-content";
        target.tabIndex = -1;
        target.focus();
        target.scrollIntoView();
      }
    },
    close() {
      this.mobileOpen = false;
      this.servicesOpen = false;
    },
    dismiss() {
      if (this.servicesOpen) {
        this.servicesOpen = false;
        this.$refs.servicesTrigger.focus();
      } else if (this.mobileOpen) {
        this.mobileOpen = false;
        this.$refs.mobileTrigger.focus();
      }
    },
    onOutside(event) {
      if (!this.$refs.header?.contains(event.target)) this.close();
      else if (!this.$refs.servicesMenu?.contains(event.target))
        this.servicesOpen = false;
    },
    onFocusOut(event) {
      if (!this.$refs.header?.contains(event.relatedTarget)) this.close();
    },
    onServicesFocusOut(event) {
      if (!this.$refs.servicesMenu?.contains(event.relatedTarget))
        this.servicesOpen = false;
    },
  },
  watch: {
    "$route.fullPath"() {
      this.close();
    },
  },
  mounted() {
    document.addEventListener("pointerdown", this.onOutside);
    this.mediaQuery = window.matchMedia("(min-width: 1000px)");
    this.mediaQuery.addEventListener("change", this.close);
  },
  beforeUnmount() {
    document.removeEventListener("pointerdown", this.onOutside);
    this.mediaQuery.removeEventListener("change", this.close);
  },
};
</script>
