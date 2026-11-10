<template>
  <footer class="site-footer">
    <div class="site-container">
      <div class="footer-grid">
        <div class="footer-about">
          <router-link to="/" class="brand"
            >404<span class="brand-light">HubSpot</span
            ><span class="brand-dot">.</span></router-link
          >
          <p>
            Good people. Thoughtful technology.<br />A little more possibility
            for your business.
          </p>
          <span class="location"
            ><span class="status-dot"></span> Built in Kenya. Connected to the
            world.</span
          >
        </div>
        <div>
          <h2>What we do</h2>
          <router-link
            v-for="service in services.slice(0, 5)"
            :key="service.id"
            :to="service.route"
            >{{ service.title }}</router-link
          >
        </div>
        <div>
          <h2>Explore</h2>
          <router-link to="/">Home</router-link
          ><router-link to="/work">Work</router-link
          ><router-link to="/programming-classes"
            >Programming Classes</router-link
          ><router-link to="/our-process">Our Process</router-link
          ><router-link to="/contact">Contact</router-link>
        </div>
        <div>
          <h2>Say hello</h2>
          <a :href="`mailto:${contact.email}`">{{ contact.email }}</a
          ><a
            :href="whatsappUrl('Hello, I would like to get in touch.')"
            target="_blank"
            rel="noopener noreferrer"
            >Chat on WhatsApp ↗</a
          >
          <div class="social-links">
            <a
              href="https://instagram.com/404hubspot"
              target="_blank"
              rel="noopener noreferrer"
              >Instagram ↗</a
            ><a
              href="https://tiktok.com/@404.hubspot"
              target="_blank"
              rel="noopener noreferrer"
              >TikTok ↗</a
            >
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <span
          >© {{ new Date().getFullYear() }} 404HubSpot. All rights
          reserved.</span
        ><span>We build. You grow. <UiIcon name="spark" /></span>
      </div>
    </div>
  </footer>
</template>
<script>
import UiIcon from "./UiIcon.vue";
import { services, contact, whatsappUrl } from "../data/site";
export default {
  name: "Footer",
  components: { UiIcon },
  data() {
    return { services, contact };
  },
  methods: { whatsappUrl },
};
</script>
