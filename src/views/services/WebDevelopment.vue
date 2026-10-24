<template>
  <div class="page-shell landing-page" ref="root">
    <GlobalNav />
    <main id="main-content" tabindex="-1">
      <PageHero
        kicker="WEB DEVELOPMENT — BUILT AROUND YOUR GOALS"
        title="A better website should bring <em>real movement.</em>"
        lede="Launch a clear, fast, conversion-ready web experience built around your customers, operations and next stage of growth."
      >
        <template #actions>
          <a :href="whatsappUrl(`Hello 404HubSpot, I need a website. My budget is ___.`)" target="_blank" rel="noopener noreferrer" class="action action-dark">Start on WhatsApp <UiIcon name="diagonal" /></a>
          <router-link to="/contact" class="text-action">Get a scoped quote <UiIcon name="arrow" /></router-link>
        </template>
        <template #art>
          <div class="hero-art">
            <div class="preview-grid"></div>
            <span class="preview-coordinate">DESIGN → BUILD → GROW</span>
            <LottiePlayer :animation-data="orbit" label="Orbit illustration" style="position:absolute;top:24px;right:24px;width:150px" />
            <div class="browser-preview" style="top:90px">
              <div class="browser-bar"><span class="window-dots"><i></i><i></i><i></i></span><span>your-site.co.ke</span><span>↗</span></div>
              <div class="mock-site-content"><span class="mini-label">BUILT FOR WHAT'S NEXT</span><strong>Fast. Clear.<br /><em>Made to convert.</em></strong><span class="mock-button">Let's build ↗</span></div>
              <div class="mock-site-footer"><span>RESPONSIVE BY DEFAULT</span><span>01 / 03</span></div>
            </div>
            <span class="preview-caption">360 → 1920PX READY</span>
          </div>
        </template>
      </PageHero>

      <section class="section-space site-container web-dev-process" data-reveal>
        <div class="section-heading">
          <div><span class="eyebrow">01 / HOW WE BUILD</span><h2>From a sharp brief<br /><span class="muted-heading">to a confident launch.</span></h2></div>
          <p>A practical five-stage process keeps decisions visible, feedback focused and the finish line clear.</p>
        </div>
        <div class="process-timeline">
          <div v-for="(s, i) in steps" :key="s.title" class="process-row" data-reveal>
            <span class="process-num">{{ i + 1 }}</span>
            <div><h3>{{ s.title }}</h3><p style="color:var(--site-muted);font-size:13px;line-height:1.8;margin-top:8px">{{ s.body }}</p></div>
          </div>
        </div>
      </section>

      <section class="section-space site-container web-dev-scope" data-reveal>
        <div class="section-heading">
          <div><span class="eyebrow">02 / WHAT YOU RECEIVE</span><h2>Clear scope.<br /><span class="muted-heading">Useful deliverables.</span></h2></div>
          <p>Every engagement starts with the same essentials: what the project must achieve, who owns each decision and what “done” includes.</p>
        </div>
        <div class="detail-grid web-dev-delivery-grid">
          <article class="panel-card web-dev-delivery-card">
            <h3>Included deliverables</h3>
            <ul class="web-dev-scope-list">
              <li v-for="item in scope.included" :key="item"><UiIcon name="check" /> {{ item }}</li>
            </ul>
          </article>
          <article class="panel-card web-dev-delivery-card">
            <h3>Confirmations and boundaries</h3>
            <ul class="web-dev-scope-list">
              <li v-for="item in scope.exclusions" :key="item"><UiIcon name="arrow" /> {{ item }}</li>
            </ul>
          </article>
        </div>
      </section>

      <section class="section-space site-container web-dev-pricing" data-reveal>
        <div class="section-heading">
          <div><span class="eyebrow">03 / STARTING BANDS</span><h2>Plan with clarity.<br /><span class="muted-heading">Build to your scope.</span></h2></div>
          <p>Starting prices are confirmed for planning. Final scope and quote are confirmed on WhatsApp before work begins.</p>
        </div>
        <div class="pricing-grid">
          <article v-for="p in pricing.web" :key="p.name" class="price-card" :class="{ featured: p.featured }" data-reveal>
            <span v-if="p.badge" class="badge-pop">{{ p.badge }}</span>
            <h3>{{ p.name }}</h3>
            <div class="price-amount">{{ p.range }}</div>
            <p style="font-size:12px;opacity:.8">{{ p.blurb }}</p>
            <ul><li v-for="f in p.features" :key="f"><UiIcon name="check" /> {{ f }}</li></ul>
            <a :href="whatsappUrl(`Hello 404HubSpot, ${p.cta}.`)" target="_blank" rel="noopener noreferrer" :class="['action', p.featured ? 'action-light' : 'action-dark']" style="margin-top:auto">Get started <UiIcon name="diagonal" /></a>
          </article>
        </div>
      </section>

      <section class="section-space site-container web-dev-faq" data-reveal>
        <div class="section-heading">
          <div><span class="eyebrow">04 / FAQ</span><h2>Useful answers before<br /><span class="muted-heading">the first call.</span></h2></div>
          <p>Open any answer for the practical next step.</p>
        </div>
        <div class="web-dev-faq-list">
          <details v-for="item in faqs" :key="item.question">
            <summary>{{ item.question }}<UiIcon name="plus" /></summary>
            <p>{{ item.answer }}</p>
          </details>
        </div>
      </section>

      <section class="section-space site-container web-dev-services" data-reveal>
        <div class="section-heading">
          <div><span class="eyebrow">EVERYTHING ELSE WE DO</span><h2>All services.<br /><span class="muted-heading">One partner.</span></h2></div>
          <p>Every offering, one team — hop to any detail page.</p>
        </div>
        <div class="services-grid">
          <ServiceCard v-for="service in services" :key="service.id" :service="service" />
        </div>
      </section>

      <section class="closing-section site-container web-dev-closing" data-reveal>
        <div class="closing-card">
          <span class="eyebrow">READY WHEN YOU ARE</span>
          <h2>Let's scope your site <span>this week.</span></h2>
          <div>
            <a :href="whatsappUrl(`Hello 404HubSpot, I'd like a web project quote.`)" target="_blank" rel="noopener noreferrer" class="action action-dark">Chat on WhatsApp <UiIcon name="diagonal" /></a>
            <router-link to="/our-process" class="text-action">See our process <UiIcon name="arrow" /></router-link>
          </div>
          <span class="closing-art" aria-hidden="true">✳</span>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>
<script>
import { ref } from "vue";
import GlobalNav from "../../components/GlobalNav.vue";
import Footer from "../../components/Footer.vue";
import PageHero from "../../components/PageHero.vue";
import LottiePlayer from "../../components/LottiePlayer.vue";
import UiIcon from "../../components/UiIcon.vue";
import ServiceCard from "../../components/ServiceCard.vue";
import { pricing, services, whatsappUrl } from "../../data/site";
import { useReveal, useMagnetic } from "../../composables/useReveal";
import orbit from "../../assets/lottie/orbit.json";

export default {
  name: "WebDevelopment",
  components: { GlobalNav, Footer, PageHero, LottiePlayer, UiIcon, ServiceCard },
  setup() {
    const root = ref(null);
    useReveal(root);
    useMagnetic(root);
    return {
      root, pricing, services, orbit,
      steps: [
        { title: "Discovery & Planning", body: "Goals, audience, pages and technology are scoped into milestones and a written quote." },
        { title: "Design & Prototyping", body: "Wireframes move to polished layouts in your approved brand. You approve the direction before code." },
        { title: "Development", body: "Responsive Vue builds use clean components and integrations scoped for the project." },
        { title: "Testing & QA", body: "Desktop and mobile checks cover routes, links, forms, accessibility basics and performance." },
        { title: "Launch & Support", body: "You receive launch, hosting and handover responsibilities in writing, plus the agreed support window." },
      ],
      scope: {
        included: [
          "Responsive page or application build",
          "Approved content and visual implementation",
          "Project-specific integrations and contact actions",
          "Technical QA and launch handover",
        ],
        exclusions: [
          "Hosting, domain and third-party plan costs",
          "New copy or media not provided in the approved scope",
          "Payment, CRM or API access outside the agreed integration",
          "Ongoing hosting administration or updates after handover",
        ],
      },
      faqs: [
        { question: "What do you need from me before work starts?", answer: "We confirm goals, target users, must-have features, existing brand assets, content ownership and the people who approve decisions." },
        { question: "Can I see the design before development?", answer: "Yes. The design stage establishes and records direction for approval before the build starts." },
        { question: "What is included in a final quote?", answer: "The quote records scope, deliverables, timelines, responsibilities, integrations and the stated starting price or agreed project total." },
        { question: "Who owns the site after launch?", answer: "Ownership and handover responsibilities are confirmed with you before launch, including source access and third-party accounts." },
      ],
    };
  },
  methods: { whatsappUrl },
};
</script>
