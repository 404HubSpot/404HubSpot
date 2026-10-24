<template>
  <div class="landing-page" ref="root">
    <GlobalNav />
    <main id="main-content" tabindex="-1">
      <section class="hero-section site-container" data-hero>
        <div class="hero-copy">
          <span class="hero-kicker"
            ><span class="status-dot"></span> YOUR NEXT CHAPTER STARTS
            HERE</span
          >
          <h1>
            Big ideas.<br />Built
            <span class="hero-word"
              >beautifully.<svg
                viewBox="0 0 420 18"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 12C105 2 279 0 416 10M40 16C153 8 285 8 375 14"
                  stroke="currentColor"
                  stroke-width="3"
                  stroke-linecap="round"
                /></svg
            ></span>
          </h1>
          <p>
            We turn your vision into websites, apps, and digital experiences
            that move your business forward. And teach you the skills to build
            your own.
          </p>
          <div class="hero-actions">
            <router-link to="/contact" class="action action-dark"
              >Let’s build something <UiIcon name="diagonal" /></router-link
            ><router-link
              :to="{ path: '/', hash: '#services' }"
              class="text-action"
              >Explore our services <UiIcon name="arrow"
            /></router-link>
          </div>
          <div class="hero-note">
            <span class="tiny-avatars"
              ><img
                src="/assets/frank.jpeg"
                alt=""
                width="34"
                height="34"
              /><img
                src="/assets/chemuu.jpeg"
                alt=""
                width="34"
                height="34"
              /><span>✳</span></span
            ><span
              >Human ideas. Thoughtful code.<br /><b
                >Your dedicated digital team.</b
              ></span
            >
          </div>
        </div>
        <BuildPreview />
      </section>
      <div class="capability-strip">
        <div class="site-container">
          <span>FROM THE FIRST IDEA<br /><b>TO THE NEXT BIG THING</b></span
          ><span><UiIcon name="web" /> Digital experiences</span
          ><span><UiIcon name="payment" /> Connected payments</span
          ><span><UiIcon name="learn" /> Practical learning</span
          ><span class="strip-signoff"
            >Built with purpose. <UiIcon name="spark"
          /></span>
        </div>
      </div>
      <section
        id="services"
        class="services-section section-space site-container web-dev-hub"
        data-reveal
      >
        <div class="section-heading">
          <div>
            <span class="eyebrow">01 / SERVICES HUB</span>
            <h2>
              Find the right build.<br /><span class="muted-heading"
                >Explore every service.</span
              >
            </h2>
          </div>
          <p>
            Choose a web, software, mobile, payments or design service to see
            the scope, starting bands and next step.
          </p>
        </div>
        <div class="services-grid">
          <ServiceCard
            v-for="service in services"
            :key="service.id"
            :service="service"
          />
        </div>
      </section>
      <section class="payment-feature site-container" data-reveal>
        <div class="payment-feature-inner">
          <div class="payment-feature-copy">
            <span class="eyebrow">BUILT FOR THE WAY KENYA PAYS</span>
            <h2>Great business.<br />Seamless payments.</h2>
            <p>
              Bring M-Pesa into your website or app. We connect your business
              with Safaricom’s Daraja API, so you can focus on what comes next.
            </p>
            <router-link
              to="/services/m-pesa-integration"
              class="action action-light"
              >Explore M-Pesa integration <UiIcon name="diagonal"
            /></router-link>
          </div>
          <div
            class="payment-flow"
            aria-label="Payment integration: customer, M-Pesa, your business"
          >
            <div class="flow-top">
              <span>YOUR CUSTOMER</span><UiIcon name="phone" />
            </div>
            <div class="flow-connector">↓</div>
            <div class="flow-center">
              <span class="status-dot"></span><b>M-PESA</b
              ><span>Daraja API</span><UiIcon name="check" />
            </div>
            <div class="flow-connector">↓</div>
            <div class="flow-bottom">
              <UiIcon name="web" /><span
                >Your business,<br /><b>all connected.</b></span
              ><UiIcon name="spark" />
            </div>
          </div>
        </div>
      </section>
      <section
        id="learning"
        class="learning-section section-space site-container"
        data-reveal
      >
        <div class="learning-art" aria-label="Programming course illustration">
          <div class="lesson-window">
            <div class="lesson-top">
              <span class="window-dots"><i></i><i></i><i></i></span
              ><span>hello_future.py</span><span>Python</span>
            </div>
            <div class="lesson-code">
              <span>01 <i># Every builder starts somewhere.</i></span
              ><span>02 </span><span>03 <b>def</b> build_your_future():</span
              ><span>04 &nbsp;&nbsp;skills = <em>"Learn by doing"</em></span
              ><span>05 &nbsp;&nbsp;<b>return</b> possibilities</span
              ><span>06 </span
              ><span>07 <b>print</b>(<em>"Hello, future!"</em>)</span>
            </div>
            <div class="lesson-output">
              <span>OUTPUT</span>
              <p>Hello, future! <span class="cursor-mark">▍</span></p>
            </div>
          </div>
          <div class="language-pills">
            <span>Python</span><span>JavaScript</span><span>SQL</span
            ><span>Scratch</span>
          </div>
          <span class="learning-sticker"
            ><UiIcon name="code" /> MADE FOR<br />THE CURIOUS.</span
          >
        </div>
        <div class="learning-copy">
          <span class="eyebrow">02 / LEARN WITH US</span>
          <h2>
            Don’t just use tech.<br /><span class="muted-heading"
              >Learn to create it.</span
            >
          </h2>
          <p>
            Start with curiosity. Leave with something you built. Our
            programming classes combine practical projects with mentorship from
            people who do this every day.
          </p>
          <ul>
            <li><UiIcon name="check" /> Beginner-friendly, hands-on lessons</li>
            <li><UiIcon name="check" /> Real projects for your portfolio</li>
            <li><UiIcon name="check" /> Guidance from working developers</li>
          </ul>
          <router-link to="/programming-classes" class="action action-dark"
            >Find your first class <UiIcon name="diagonal"
          /></router-link>
        </div>
      </section>
      <section id="process" class="process-section section-space" data-reveal>
        <div class="site-container">
          <div class="section-heading">
            <div>
              <span class="eyebrow">03 / HOW WE WORK</span>
              <h2>A clear path.<br />From “what if” to what’s next.</h2>
            </div>
            <router-link to="/our-process" class="text-action"
              >Get to know our process <UiIcon name="diagonal"
            /></router-link>
          </div>
          <div class="process-grid">
            <article v-for="step in steps" :key="step.number">
              <div class="step-top">
                <span>{{ step.number }}</span
                ><UiIcon :name="step.icon" />
              </div>
              <h3>{{ step.title }}</h3>
              <p>{{ step.description }}</p>
            </article>
          </div>
        </div>
      </section>
      <TeamSection />
      <section class="closing-section site-container" data-reveal>
        <div class="closing-card">
          <span class="eyebrow">LET’S MAKE YOUR NEXT MOVE A GOOD ONE</span>
          <h2>
            You bring the idea.<br />We’ll bring the <span>possibilities.</span>
          </h2>
          <div>
            <a
              :href="
                whatsappUrl(
                  'Hello, I have an idea I would like to build with 404HubSpot.',
                )
              "
              target="_blank"
              rel="noopener noreferrer"
              class="action action-dark" data-magnetic
              >Start a conversation <UiIcon name="diagonal" /></a
            ><a :href="`mailto:${contact.email}`" class="closing-email"
              >{{ contact.email }} <UiIcon name="arrow"
            /></a>
          </div>
          <span class="closing-art" aria-hidden="true">✳</span>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>
<script>
import GlobalNav from "../components/GlobalNav.vue";
import Footer from "../components/Footer.vue";
import ServiceCard from "../components/ServiceCard.vue";
import BuildPreview from "../components/BuildPreview.vue";
import UiIcon from "../components/UiIcon.vue";
import TeamSection from "./services/Teamsection.vue";
import { services, contact, whatsappUrl } from "../data/site";
import { ref } from "vue";
import { useReveal, useMagnetic } from "../composables/useReveal";
export default {
  name: "Home",
  components: {
    GlobalNav,
    Footer,
    ServiceCard,
    BuildPreview,
    UiIcon,
    TeamSection,
  },
  setup() {
    const root = ref(null);
    useReveal(root);
    useMagnetic(root);
    return { root };
  },
  data() {
    return {
      services,
      contact,
      steps: [
        {
          number: "01",
          icon: "spark",
          title: "First, we listen.",
          description:
            "We get to know your business, your goals, and the problem you want to solve. Good work starts with good questions.",
        },
        {
          number: "02",
          icon: "code",
          title: "Then, we build.",
          description:
            "We turn the plan into thoughtful design and dependable code, keeping you involved along the way.",
        },
        {
          number: "03",
          icon: "diagonal",
          title: "Together, we grow.",
          description:
            "We launch, help you get comfortable, and support your next steps. The finish line is just the beginning.",
        },
      ],
    };
  },
  methods: { whatsappUrl },
};
</script>
