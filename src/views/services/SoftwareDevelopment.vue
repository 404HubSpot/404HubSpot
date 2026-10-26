<template>
  <div class="page-shell landing-page" ref="root">
    <GlobalNav />
    <main id="main-content" tabindex="-1">
      <PageHero
        kicker="SOFTWARE DEVELOPMENT — CUSTOM TOOLS & SYSTEMS"
        title="Software that fits<br /><em>how your business works.</em>"
        lede="Plan internal tools, workflow automation and business systems around a real process, with scope and handoff agreed before the build."
      >
        <template #actions>
          <a
            :href="whatsappUrl('Hello 404HubSpot, I would like to discuss custom software for my business.')"
            target="_blank"
            rel="noopener noreferrer"
            class="action action-dark"
          >
            Discuss your workflow <UiIcon name="diagonal" />
          </a>
          <router-link
            :to="{ path: '/contact', query: { service: 'software-development' } }"
            class="text-action"
          >
            Request a scoped quote <UiIcon name="arrow" />
          </router-link>
        </template>
        <template #art>
          <div class="hero-art software-hero-art" aria-hidden="true">
            <div class="preview-grid"></div>
            <span class="preview-coordinate">UNDERSTAND → AGREE → BUILD</span>
            <div class="software-workflow">
              <span class="software-workflow-label">A PROCESS, MADE CLEAR</span>
              <div class="software-workflow-step"><span>01</span> Capture the work</div>
              <div class="software-workflow-connector"></div>
              <div class="software-workflow-step"><span>02</span> Move it forward</div>
              <div class="software-workflow-connector"></div>
              <div class="software-workflow-step"><span>03</span> See what needs attention</div>
              <span class="software-workflow-note">An illustrative workflow, not a client project</span>
            </div>
            <span class="preview-caption">SCOPE BEFORE BUILD</span>
          </div>
        </template>
      </PageHero>

      <section class="section-space site-container" data-reveal>
        <div class="section-heading">
          <div>
            <span class="eyebrow">01 / WHAT WE CAN SCOPE</span>
            <h2>Useful tools for<br /><span class="muted-heading">work behind the scenes.</span></h2>
          </div>
          <p>Start with the task that is difficult to manage today. The right solution and its boundaries are agreed in discovery.</p>
        </div>
        <div class="software-capability-grid">
          <article v-for="item in capabilities" :key="item.title" class="panel-card software-capability-card">
            <span class="software-card-index">{{ item.index }}</span>
            <h3>{{ item.title }}</h3>
            <p>{{ item.body }}</p>
          </article>
        </div>
      </section>

      <section class="section-space site-container" data-reveal>
        <div class="section-heading">
          <div>
            <span class="eyebrow">02 / HOW AN ENGAGEMENT WORKS</span>
            <h2>Shared checkpoints.<br /><span class="muted-heading">Clear next steps.</span></h2>
          </div>
          <p>Decisions, approvals and responsibilities stay visible from the first conversation through handover.</p>
        </div>
        <ol class="process-timeline software-process">
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
            <span class="eyebrow">03 / EXAMPLE SCENARIOS</span>
            <h2>Start with a problem,<br /><span class="muted-heading">not a platform name.</span></h2>
          </div>
          <p>These are prompts for a discovery conversation, not claims about delivered customer work.</p>
        </div>
        <p class="software-example-note">Illustrative scenarios only — not client case studies.</p>
        <div class="software-example-grid">
          <article v-for="example in examples" :key="example.title" class="software-example-card">
            <span>{{ example.label }}</span>
            <h3>{{ example.title }}</h3>
            <p>{{ example.body }}</p>
          </article>
        </div>
      </section>

      <section class="section-space site-container" data-reveal>
        <div class="section-heading">
          <div>
            <span class="eyebrow">04 / INTEGRATIONS & HANDOFF</span>
            <h2>Agree the edges<br /><span class="muted-heading">before work begins.</span></h2>
          </div>
          <p>Third-party connections and ongoing responsibilities depend on access, provider terms and the final written scope.</p>
        </div>
        <div class="detail-grid software-handoff-grid">
          <article class="panel-card software-handoff-card">
            <h3>What we confirm together</h3>
            <ul class="software-list">
              <li v-for="item in confirmations" :key="item"><UiIcon name="check" /> {{ item }}</li>
            </ul>
          </article>
          <article class="panel-card software-handoff-card">
            <h3>What the handoff records</h3>
            <ul class="software-list">
              <li v-for="item in handoff" :key="item"><UiIcon name="arrow" /> {{ item }}</li>
            </ul>
          </article>
        </div>
      </section>

      <section class="section-space site-container" data-reveal>
        <div class="section-heading">
          <div>
            <span class="eyebrow">05 / OWNER-APPROVED STARTING BANDS</span>
            <h2>Plan the investment.<br /><span class="muted-heading">Then scope it properly.</span></h2>
          </div>
          <p>These are starting bands in KES, not fixed quotes. Requirements and deliverables are confirmed before work begins.</p>
        </div>
        <div class="pricing-grid two software-pricing-grid">
          <article v-for="plan in priceBands" :key="plan.name" class="price-card software-price-card">
            <span class="software-card-index">{{ plan.label }}</span>
            <h3>{{ plan.name }}</h3>
            <div class="price-amount">{{ plan.range }}</div>
            <p>{{ plan.description }}</p>
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
        <p class="software-pricing-note">A written quote confirms features, integrations, delivery milestones, ownership, training and any support arrangement. No fixed delivery timeline, support period or third-party platform is implied by these bands.</p>
      </section>

      <section class="section-space site-container" data-reveal>
        <div class="section-heading">
          <div>
            <span class="eyebrow">06 / FAQ</span>
            <h2>Before we scope<br /><span class="muted-heading">the first version.</span></h2>
          </div>
          <p>Practical answers for deciding whether custom software is the right next step.</p>
        </div>
        <div class="software-faq-list">
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

      <section class="closing-section site-container software-closing" data-reveal>
        <div class="closing-card">
          <span class="eyebrow">START WITH THE WORK</span>
          <h2>Let's map the problem <span>before we build.</span></h2>
          <div>
            <a
              :href="whatsappUrl('Hello 404HubSpot, I would like to scope a software development project.')"
              target="_blank"
              rel="noopener noreferrer"
              class="action action-dark"
            >
              Start on WhatsApp <UiIcon name="diagonal" />
            </a>
            <router-link
              :to="{ path: '/contact', query: { service: 'software-development' } }"
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
import { services, whatsappUrl } from "../../data/site";
import { useReveal, useMagnetic } from "../../composables/useReveal";

defineOptions({ name: "SoftwareDevelopment" });

const root = ref<HTMLElement | null>(null);
useReveal(root);
useMagnetic(root);

const capabilities = [
  {
    index: "01",
    title: "Internal tools",
    body: "Give a team a clearer way to capture, find and update the information it uses day to day.",
  },
  {
    index: "02",
    title: "Workflow automation",
    body: "Explore repetitive handoffs and reporting tasks that may be simplified once the current process is understood.",
  },
  {
    index: "03",
    title: "Business systems",
    body: "Shape a purpose-built system around agreed roles, records and the steps a business needs to manage.",
  },
];

const steps = [
  {
    title: "Understand the current process",
    body: "Discuss the people, tasks, constraints and outcome. Identify what should remain manual and what may be improved.",
  },
  {
    title: "Agree scope and responsibilities",
    body: "Record requirements, priorities, assumptions, decision owners, access needs and the items outside the engagement.",
  },
  {
    title: "Plan the solution and checkpoints",
    body: "Confirm the proposed approach, integrations to investigate, delivery milestones and how feedback or approval will work.",
  },
  {
    title: "Build and review in agreed steps",
    body: "Work through the approved scope, share progress at agreed checkpoints and raise changes for discussion before they expand the work.",
  },
  {
    title: "Test and document the handoff",
    body: "Review the agreed behaviors, record access and ownership responsibilities, and document any separately agreed support.",
  },
];

const examples = [
  {
    label: "RECORDS",
    title: "Keep routine records together",
    body: "Explore whether a small internal tool could make a recurring record-keeping process easier to follow.",
  },
  {
    label: "HANDOFFS",
    title: "Make the next action visible",
    body: "Map a multi-step task and discuss whether reminders or a clearer handoff could reduce missed follow-ups.",
  },
  {
    label: "REPORTS",
    title: "Reduce repeated report preparation",
    body: "Review how information is gathered today and identify which reporting steps, if any, are suitable to automate.",
  },
];

const confirmations = [
  "Which third-party tools or providers matter to the workflow.",
  "Whether suitable APIs, account access and provider permissions are available.",
  "What data is involved, who may access it and what constraints apply.",
  "Any external subscriptions, hosting or provider costs outside the project quote.",
];

const handoff = [
  "What was delivered and how the agreed workflow is expected to operate.",
  "Who owns source access, hosting accounts, credentials and ongoing administration.",
  "Whether setup notes, user guidance or training are included in the scope.",
  "Whether post-launch support or maintenance is included, and for what period.",
];

const priceBands = [
  {
    label: "SMALL BUSINESS",
    name: "Small Business System",
    range: "KES 280,000 – 650,000",
    description: "An owner-approved starting band for a scoped internal system. The exact modules, roles and delivery plan require discovery.",
    cta: "I'm interested in a Small Business System",
  },
  {
    label: "LARGER SCOPE",
    name: "Enterprise Platform",
    range: "From KES 650,000",
    description: "An owner-approved starting band for broader requirements. Integrations, security responsibilities and delivery milestones must be scoped.",
    cta: "I'm interested in an Enterprise Platform",
  },
];

const faqs = [
  {
    question: "Do I need a detailed technical brief?",
    answer: "No. Start with the task, who does it today and what is difficult. We can use discovery to record requirements and identify unanswered questions.",
  },
  {
    question: "Can you connect software to another platform?",
    answer: "An integration can be considered after we confirm the provider, API availability, account permissions, data needs and any third-party costs. It is only included when written into the agreed scope.",
  },
  {
    question: "Are the scenarios shown completed client projects?",
    answer: "No. They are illustrative prompts to help explain possible software needs, not case studies or claims of work delivered for a customer.",
  },
  {
    question: "What happens to support and ownership after delivery?",
    answer: "The quote and handoff record who owns source and provider accounts, what documentation is included, and whether any ongoing support is agreed. No support period is assumed by default.",
  },
  {
    question: "How do you confirm the final price?",
    answer: "The published bands are starting points. A written quote confirms the requirements, deliverables, assumptions and responsibilities before work begins.",
  },
];
</script>

<style scoped>
.software-hero-art {
  display: grid;
  align-items: center;
  padding: 42px;
}

.software-workflow {
  position: relative;
  z-index: 1;
  display: grid;
  gap: 12px;
  width: min(100%, 410px);
  margin-inline: auto;
  padding: 24px;
  border: 1px solid var(--site-border);
  border-radius: 16px;
  background: var(--site-surface);
  box-shadow: var(--site-shadow);
}

.software-workflow-label,
.software-workflow-note,
.software-card-index,
.software-example-card > span {
  color: var(--site-muted);
  font: 10px var(--site-mono);
  letter-spacing: 0.08em;
}

.software-workflow-step {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px;
  border: 1px solid var(--site-border);
  border-radius: 10px;
  font-size: 13px;
  font-weight: 600;
}

.software-workflow-step span {
  color: var(--site-brand);
  font: 11px var(--site-mono);
}

.software-workflow-connector {
  width: 1px;
  height: 12px;
  margin-inline: 21px;
  background: var(--site-border);
}

.software-capability-grid,
.software-example-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.software-capability-card,
.software-example-card,
.software-handoff-card,
.software-price-card {
  min-width: 0;
}

.software-capability-card h3,
.software-example-card h3,
.software-handoff-card h3,
.software-price-card h3 {
  margin-top: 18px;
  font-size: 18px;
  letter-spacing: -0.4px;
}

.software-capability-card p,
.software-example-card p,
.software-price-card > p {
  margin-top: 10px;
  color: var(--site-muted);
  font-size: 13px;
  line-height: 1.75;
}

.software-process {
  list-style: none;
  padding: 0;
}

.software-process .process-row {
  display: grid;
  grid-template-columns: 48px 1fr;
  gap: 20px;
  align-items: start;
  padding: 22px;
  border: 1px solid var(--site-border);
  border-radius: 14px;
  background: var(--site-surface);
}

.software-process .process-row p {
  margin-top: 8px;
  color: var(--site-muted);
  font-size: 13px;
  line-height: 1.75;
}

.software-example-note {
  margin: -12px 0 22px;
  color: var(--site-brand);
  font-size: 12px;
  font-weight: 600;
}

.software-example-card {
  padding: 24px;
  border: 1px solid var(--site-border);
  border-radius: 14px;
  background: var(--site-surface);
}

.software-handoff-grid {
  align-items: stretch;
  gap: 18px;
}

.software-list {
  display: grid;
  gap: 13px;
  margin: 20px 0 0;
  padding: 0;
  list-style: none;
}

.software-list li {
  display: grid;
  grid-template-columns: 18px 1fr;
  gap: 10px;
  align-items: start;
  color: var(--site-muted);
  font-size: 13px;
  line-height: 1.7;
}

.software-list svg {
  width: 18px;
  height: 18px;
  color: var(--site-brand);
}

.software-price-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.software-price-card .price-amount {
  margin-top: 18px;
}

.software-price-card .action {
  margin-top: auto;
}

.software-pricing-note {
  max-width: 900px;
  margin: 20px auto 0;
  color: var(--site-muted);
  font-size: 12px;
  line-height: 1.7;
  text-align: center;
}

.software-faq-list {
  display: grid;
  gap: 10px;
  max-width: 860px;
  margin-inline: auto;
}

.software-faq-list details {
  border: 1px solid var(--site-border);
  border-radius: 12px;
  background: var(--site-surface);
}

.software-faq-list summary {
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

.software-faq-list summary::-webkit-details-marker {
  display: none;
}

.software-faq-list summary svg {
  width: 18px;
  height: 18px;
  flex: 0 0 auto;
  transition: transform 180ms ease;
}

.software-faq-list details[open] summary svg {
  transform: rotate(45deg);
}

.software-faq-list details > p {
  margin: 0;
  padding: 0 20px 18px;
  color: var(--site-muted);
  font-size: 13px;
  line-height: 1.75;
}

.software-closing .closing-card h2 {
  max-width: 680px;
}

@media (max-width: 900px) {
  .software-capability-grid,
  .software-example-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 600px) {
  .software-hero-art {
    min-height: 300px;
    padding: 28px 12px;
  }

  .software-workflow {
    padding: 18px;
  }

  .software-capability-grid,
  .software-example-grid {
    grid-template-columns: 1fr;
  }

  .software-process .process-row {
    grid-template-columns: 36px 1fr;
    gap: 12px;
    padding: 18px;
  }

  .software-closing .closing-card > div {
    align-items: flex-start;
  }
}
</style>
