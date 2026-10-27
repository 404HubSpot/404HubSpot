<template>
  <div class="page-shell landing-page" ref="root">
    <GlobalNav />
    <main id="main-content" tabindex="-1">
      <PageHero
        kicker="MOBILE APPS — IOS & ANDROID"
        title="Your business, <em>in their pocket.</em>"
        lede="iOS and Android apps built on approaches the team actually ships — scoped in discovery, tested on real devices and handed to the stores with ownership recorded in writing."
      >
        <template #actions>
          <a
            :href="whatsappUrl('Hello 404HubSpot, I would like to discuss a mobile app.')"
            target="_blank"
            rel="noopener noreferrer"
            class="action action-dark"
          >
            Discuss your app <UiIcon name="diagonal" />
          </a>
          <router-link
            :to="{ path: '/contact', query: { service: 'mobile-apps' } }"
            class="text-action"
          >
            Request a scoped quote <UiIcon name="arrow" />
          </router-link>
        </template>
        <template #art>
          <div class="hero-art mobile-hero-art">
            <div class="preview-grid" aria-hidden="true"></div>
            <span class="preview-coordinate" aria-hidden="true">DISCOVER → TEST → LAUNCH</span>
            <div class="mobile-phone" aria-hidden="true">
              <div class="mobile-phone-head">
                <span class="window-dots"><i></i><i></i><i></i></span>
                <span>your-app · build</span>
              </div>
              <div class="mobile-phone-body">
                <span class="mobile-block mobile-block-brand"></span>
                <span class="mobile-block"></span>
                <div class="mobile-row">
                  <span class="mobile-block mobile-block-half"></span>
                  <span class="mobile-block mobile-block-half"></span>
                </div>
                <span class="mobile-block mobile-block-wide"></span>
                <span class="mobile-chip">DEVICE TEST PASSED</span>
                <span class="mobile-chip mobile-chip-review">STORE REVIEW →</span>
              </div>
            </div>
            <p class="mobile-art-note">An illustrative concept — not a client project or app screenshot.</p>
            <span class="preview-caption" aria-hidden="true">IOS · ANDROID · FLUTTER</span>
          </div>
        </template>
      </PageHero>

      <section class="section-space site-container" data-reveal>
        <div class="section-heading">
          <div>
            <span class="eyebrow">01 / DELIVERY APPROACHES</span>
            <h2>The right stack,<br /><span class="muted-heading">chosen for your users.</span></h2>
          </div>
          <p>Approaches the team can actually deliver — agreed in discovery, not assumed. Our cross-platform Flutter work is what we build and teach.</p>
        </div>
        <div class="mobile-approach-grid">
          <article v-for="item in approaches" :key="item.title" class="panel-card mobile-approach-card">
            <span class="mobile-card-index">{{ item.index }}</span>
            <h3>{{ item.title }}</h3>
            <p>{{ item.body }}</p>
            <ul class="mobile-approach-list">
              <li v-for="point in item.points" :key="point"><UiIcon name="check" /> {{ point }}</li>
            </ul>
          </article>
        </div>
      </section>

      <section class="section-space site-container" data-reveal>
        <div class="section-heading">
          <div>
            <span class="eyebrow">02 / HOW AN ENGAGEMENT WORKS</span>
            <h2>From discovery<br /><span class="muted-heading">to the stores.</span></h2>
          </div>
          <p>One honest sequence — scope agreed first, devices tested for real, handoff recorded in writing.</p>
        </div>
        <ol class="process-timeline mobile-process">
          <li v-for="(step, index) in steps" :key="step.title" class="process-row">
            <span class="process-num">{{ String(index + 1).padStart(2, "0") }}</span>
            <div>
              <h3>{{ step.title }}</h3>
              <p>{{ step.body }}</p>
            </div>
          </li>
        </ol>
      </section>

      <section class="section-space site-container" data-reveal>
        <div class="section-heading">
          <div>
            <span class="eyebrow">03 / TESTING & STORE HANDOFF</span>
            <h2>Tested on real devices.<br /><span class="muted-heading">No launch surprises.</span></h2>
          </div>
          <p>The device matrix and store responsibilities are agreed in scope — nothing is promised beyond it.</p>
        </div>
        <div class="detail-grid mobile-handoff-grid">
          <article class="panel-card mobile-handoff-card">
            <h3>What device testing covers</h3>
            <ul class="mobile-list">
              <li v-for="item in deviceTesting" :key="item"><UiIcon name="check" /> {{ item }}</li>
            </ul>
          </article>
          <article class="panel-card mobile-handoff-card">
            <h3>What the store handoff records</h3>
            <ul class="mobile-list">
              <li v-for="item in storeHandoff" :key="item"><UiIcon name="arrow" /> {{ item }}</li>
            </ul>
          </article>
        </div>
        <p class="mobile-timeline-note">Store review and approval timelines are decided by Apple and Google — we prepare the listing and respond to review feedback, but approval and release dates are never guaranteed.</p>
      </section>

      <section class="section-space site-container" data-reveal>
        <div class="section-heading">
          <div>
            <span class="eyebrow">04 / OWNER-APPROVED STARTING BANDS</span>
            <h2>Plan the investment.<br /><span class="muted-heading">Then scope it properly.</span></h2>
          </div>
          <p>These are starting bands in KES, not fixed quotes. Features, devices and milestones are confirmed before work begins.</p>
        </div>
        <div class="pricing-grid mobile-pricing-grid">
          <article v-for="plan in priceBands" :key="plan.name" class="price-card mobile-price-card">
            <span v-if="plan.badge" class="badge-pop">{{ plan.badge }}</span>
            <h3>{{ plan.name }}</h3>
            <div class="price-amount">{{ plan.range }}</div>
            <p>{{ plan.blurb }}</p>
            <ul>
              <li v-for="feature in plan.features" :key="feature"><UiIcon name="check" /> {{ feature }}</li>
            </ul>
            <a
              :href="whatsappUrl(`Hello 404HubSpot, ${plan.cta}. Please help me scope the requirements.`)"
              target="_blank"
              rel="noopener noreferrer"
              class="action action-dark"
            >
              Discuss this range <UiIcon name="diagonal" />
            </a>
          </article>
        </div>
        <p class="mobile-pricing-note">A written quote confirms features, device matrix, delivery milestones, account ownership, training and any separately agreed maintenance. No fixed delivery timeline or store-approval outcome is implied by these bands.</p>
      </section>

      <section class="section-space site-container" data-reveal>
        <div class="section-heading">
          <div>
            <span class="eyebrow">05 / FAQ</span>
            <h2>Before we scope<br /><span class="muted-heading">the first version.</span></h2>
          </div>
          <p>Straight answers about platforms, testing, store review and what happens after launch.</p>
        </div>
        <div class="mobile-faq-list">
          <details v-for="item in faqs" :key="item.question">
            <summary>{{ item.question }}<UiIcon name="plus" /></summary>
            <p>{{ item.answer }}</p>
          </details>
        </div>
      </section>

      <section class="section-space site-container" data-reveal>
        <div class="section-heading">
          <div>
            <span class="eyebrow">RELATED SERVICES</span>
            <h2>Choose the right<br /><span class="muted-heading">starting point.</span></h2>
          </div>
          <p>If your need is already clear, explore the other ways we can help.</p>
        </div>
        <div class="services-grid">
          <ServiceCard v-for="service in services" :key="service.id" :service="service" />
        </div>
      </section>

      <section class="section-space site-container closing-section" data-reveal>
        <div class="closing-card">
          <span class="eyebrow">READY WHEN YOU ARE</span>
          <h2>Let's scope your mobile app <span>this week.</span></h2>
          <div>
            <a
              :href="whatsappUrl('Hello 404HubSpot, I would like to scope a mobile app development project.')"
              target="_blank"
              rel="noopener noreferrer"
              class="action action-dark"
            >
              Start on WhatsApp <UiIcon name="diagonal" />
            </a>
            <router-link
              :to="{ path: '/contact', query: { service: 'mobile-apps' } }"
              class="text-action"
            >
              Request a scoped quote <UiIcon name="arrow" />
            </router-link>
          </div>
          <span class="closing-art" aria-hidden="true">✳</span>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import GlobalNav from "../../components/GlobalNav.vue";
import Footer from "../../components/Footer.vue";
import PageHero from "../../components/PageHero.vue";
import UiIcon from "../../components/UiIcon.vue";
import ServiceCard from "../../components/ServiceCard.vue";
import { pricing, services, whatsappUrl } from "../../data/site";
import { useReveal, useMagnetic } from "../../composables/useReveal";

defineOptions({ name: "MobileApps" });

const root = ref<HTMLElement | null>(null);
useReveal(root);
useMagnetic(root);

const approaches = [
  {
    index: "01",
    title: "Cross-platform (Flutter)",
    body: "One codebase, both stores. Flutter/Dart is the stack the team builds on and teaches — our most evidenced mobile approach.",
    points: ["Single codebase for iOS and Android", "The stack behind our Flutter & Dart Mobile class", "Native-feeling UI with one design system"],
  },
  {
    index: "02",
    title: "Native Android (Kotlin)",
    body: "For Android-first products that need deep platform integration, hardware access or Play-specific capabilities.",
    points: ["Android-first scope", "Kotlin toolchain", "Deep platform integration"],
  },
  {
    index: "03",
    title: "Native iOS (Swift)",
    body: "For iOS-only audiences or requirements that call for platform-specific work on Apple hardware.",
    points: ["iOS-first scope", "Swift toolchain", "Platform-specific features"],
  },
];

const steps = [
  {
    title: "Discover and scope",
    body: "Agree the audience, core flows, approach (cross-platform or native), the devices to test on, and what stays outside this engagement.",
  },
  {
    title: "Design the flows",
    body: "Wireframes to an interactive prototype with agreed feedback checkpoints before build time is spent.",
  },
  {
    title: "Build with checkpoints",
    body: "Work through the approved scope with installable test builds at agreed milestones and any scope changes raised before they grow.",
  },
  {
    title: "Test on real devices",
    body: "Test the agreed device and OS matrix, core flows, error states and pre-submission checks — then fix and re-test before handoff.",
  },
  {
    title: "Hand off to the stores",
    body: "Prepare the listing, support the submission, and record who owns which store account, the listing assets and any separately agreed maintenance in writing.",
  },
];

const deviceTesting = [
  "The device and OS version matrix agreed in the written scope.",
  "Core flows on real representative hardware, where access is available.",
  "Error, offline and permission states agreed in the flows.",
  "Basic performance checks on the agreed devices.",
];

const storeHandoff = [
  "Which Apple App Store / Google Play accounts are opened and who owns them.",
  "The listing assets to prepare: store name, description, icons and screenshots.",
  "We prepare the submission and respond to review feedback; stores make final decisions.",
  "Any post-launch update or maintenance responsibilities, recorded in writing.",
];

const priceBands = pricing.mobile;

const faqs = [
  {
    question: "Cross-platform or native — which should I choose?",
    answer: "Discovery decides it: your users, the flows needed, the platform features required and your maintenance plan. Flutter (cross-platform) is the approach we build most and teach; native is considered where a platform requires it.",
  },
  {
    question: "How long until my app is on the App Store or Play?",
    answer: "No timeline is promised. Store review and approval depend on Apple and Google, and outcomes are outside our control. The written scope instead states the milestones we commit to: prototype, test builds, device testing and submission readiness.",
  },
  {
    question: "Do you guarantee store approval?",
    answer: "No — no honest developer can. We prepare the listing to store requirements, respond to review feedback with fixes, and hand the decision to the store. Re-submission after feedback is supported while the engagement is live.",
  },
  {
    question: "Who owns the app and the store accounts after launch?",
    answer: "That is recorded in the handoff: which accounts were opened, who administers them, where source access lives, and what documentation or training is included. Nothing is assumed by default.",
  },
  {
    question: "What happens after the app is live?",
    answer: "OS versions, devices and store policies keep changing. Any update, maintenance or support arrangement is scoped and priced separately in writing — it is not bundled silently into the build.",
  },
];
</script>

<style scoped>
.mobile-hero-art {
  position: relative;
  display: grid;
  align-items: center;
  padding: 42px;
}

.mobile-phone {
  position: relative;
  z-index: 1;
  display: grid;
  gap: 0;
  width: min(100%, 270px);
  margin-inline: auto;
  border: 1px solid var(--site-border);
  border-radius: 28px;
  background: var(--site-surface);
  box-shadow: var(--site-shadow);
  overflow: hidden;
}

.mobile-phone-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 14px 18px;
  border-bottom: 1px solid var(--site-border);
  color: var(--site-muted);
  font: 10px var(--site-mono);
  letter-spacing: 0.08em;
}

.mobile-phone-body {
  display: grid;
  gap: 10px;
  padding: 20px 18px 24px;
}

.mobile-block {
  height: 22px;
  border: 1px solid var(--site-border);
  border-radius: 8px;
  background: color-mix(in srgb, var(--site-brand) 8%, transparent);
}

.mobile-block-brand {
  height: 34px;
  background: color-mix(in srgb, var(--site-brand) 16%, transparent);
}

.mobile-block-wide {
  height: 44px;
}

.mobile-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.mobile-chip {
  justify-self: start;
  padding: 6px 10px;
  border: 1px solid var(--site-border);
  border-radius: 999px;
  color: var(--site-brand);
  font: 10px var(--site-mono);
  letter-spacing: 0.08em;
}

.mobile-chip-review {
  background: var(--site-brand);
  color: var(--site-surface);
  border-color: transparent;
}

.mobile-art-note {
  position: relative;
  z-index: 1;
  margin: 14px 0 0;
  color: var(--site-brand);
  font-size: 11px;
  font-weight: 600;
  text-align: center;
}

.mobile-approach-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.mobile-approach-card,
.mobile-handoff-card {
  min-width: 0;
}

.mobile-card-index,
.mobile-approach-list li svg,
.mobile-list li svg {
  color: var(--site-brand);
}

.mobile-card-index {
  font: 10px var(--site-mono);
  color: var(--site-brand);
  letter-spacing: 0.08em;
}

.mobile-approach-card h3,
.mobile-handoff-card h3 {
  margin-top: 18px;
  font-size: 18px;
  letter-spacing: -0.4px;
}

.mobile-approach-card > p,
.mobile-handoff-card > p {
  margin-top: 10px;
  color: var(--site-muted);
  font-size: 13px;
  line-height: 1.75;
}

.mobile-approach-list,
.mobile-list {
  display: grid;
  gap: 12px;
  margin: 18px 0 0;
  padding: 0;
  list-style: none;
}

.mobile-approach-list li,
.mobile-list li {
  display: grid;
  grid-template-columns: 18px 1fr;
  gap: 10px;
  align-items: start;
  color: var(--site-muted);
  font-size: 13px;
  line-height: 1.7;
}

.mobile-approach-list svg,
.mobile-list svg {
  width: 18px;
  height: 18px;
}

.mobile-process {
  list-style: none;
  padding: 0;
}

.mobile-process .process-row {
  display: grid;
  grid-template-columns: 48px 1fr;
  gap: 20px;
  align-items: start;
  padding: 22px;
  border: 1px solid var(--site-border);
  border-radius: 14px;
  background: var(--site-surface);
}

.mobile-process .process-row p {
  margin-top: 8px;
  color: var(--site-muted);
  font-size: 13px;
  line-height: 1.75;
}

.mobile-handoff-grid {
  align-items: stretch;
  gap: 18px;
}

.mobile-timeline-note {
  max-width: 900px;
  margin: 20px auto 0;
  color: var(--site-brand);
  font-size: 12px;
  font-weight: 600;
  line-height: 1.7;
  text-align: center;
}

.mobile-pricing-grid {
  align-items: stretch;
}

.mobile-price-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 0;
}

.mobile-price-card .price-amount {
  margin-top: 18px;
}

.mobile-price-card > p {
  color: var(--site-muted);
}

.mobile-price-card .action {
  margin-top: auto;
}

.mobile-pricing-note {
  max-width: 900px;
  margin: 20px auto 0;
  color: var(--site-muted);
  font-size: 12px;
  line-height: 1.7;
  text-align: center;
}

.mobile-faq-list {
  display: grid;
  gap: 10px;
  max-width: 860px;
  margin-inline: auto;
}

.mobile-faq-list details {
  border: 1px solid var(--site-border);
  border-radius: 12px;
  background: var(--site-surface);
}

.mobile-faq-list summary {
  display: flex;
  min-height: 58px;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 16px 20px;
  cursor: pointer;
  font-weight: 600;
  list-style: none;
}

.mobile-faq-list summary::-webkit-details-marker {
  display: none;
}

.mobile-faq-list summary svg {
  width: 18px;
  height: 18px;
  flex: 0 0 auto;
  transition: transform 180ms ease;
}

.mobile-faq-list details[open] summary svg {
  transform: rotate(45deg);
}

.mobile-faq-list details > p {
  margin: 0;
  padding: 0 20px 18px;
  color: var(--site-muted);
  font-size: 13px;
  line-height: 1.75;
}

@media (max-width: 900px) {
  .mobile-approach-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 600px) {
  .mobile-hero-art {
    min-height: 300px;
    padding: 28px 12px;
  }

  .mobile-approach-grid {
    grid-template-columns: 1fr;
  }

  .mobile-process .process-row {
    grid-template-columns: 36px 1fr;
    gap: 12px;
    padding: 18px;
  }

  .closing-card > div {
    align-items: flex-start;
  }
}
</style>
