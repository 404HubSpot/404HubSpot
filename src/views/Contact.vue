<template>
  <div class="page-shell landing-page" ref="root">
    <GlobalNav />
    <main id="main-content" tabindex="-1">
      <PageHero
        kicker="CONTACT — LET'S BUILD SOMETHING"
        title="Tell us your <em>idea.</em> We'll reply fast."
        lede="WhatsApp for speed, email for detail, or the form for a scoped quote. Replies within 24 hours — in-person meetings happen in Nakuru, by appointment."
      >
        <template #actions>
          <a :href="whatsappUrl('Hello 404HubSpot, I have a project.')" target="_blank" rel="noopener noreferrer" class="action action-dark">WhatsApp us <UiIcon name="diagonal" /></a>
          <a :href="`mailto:${contact.email}`" class="text-action">{{ contact.email }} <UiIcon name="arrow" /></a>
        </template>
        <template #art>
          <div class="hero-art">
            <div class="preview-grid"></div>
            <div class="payment-flow" style="padding: 28px">
              <div class="flow-top"><span>EMAIL</span><UiIcon name="check" /></div>
              <div class="flow-connector">↓</div>
              <div class="flow-center"><span class="status-dot"></span><b>WhatsApp</b><span>fastest</span><UiIcon name="check" /></div>
              <div class="flow-connector">↓</div>
              <div class="flow-bottom"><span>MEET — NAKURU<br /><b>by appointment.</b></span></div>
            </div>
          </div>
        </template>
      </PageHero>

      <section class="section-space site-container" data-reveal>
        <div class="detail-grid">
          <div class="panel-card" data-reveal>
            <span class="eyebrow">DIRECT CHANNELS</span>
            <h2 style="margin: 10px 0 18px">Talk to a human.</h2>
            <div style="display:grid;gap:14px;font-size:13px">
              <div><b>Email</b><br /><a :href="`mailto:${contact.email}`" style="color:var(--site-brand)">{{ contact.email }}</a></div>
              <div><b>WhatsApp</b><br /><a :href="whatsappUrl('Hello, I would like to discuss a project.')" target="_blank" rel="noopener noreferrer" style="color:var(--site-brand)">Chat now ↗</a></div>
              <div><b>Where we are</b><br /><span>Nakuru, Kenya — call or WhatsApp <a :href="`tel:+${contact.phone}`" style="color:var(--site-brand)">+{{ contact.phone }}</a> to arrange an in-person or video meeting. No drop-in hours are advertised; appointments are confirmed individually.</span></div>
              <div><b>Response time</b><br /><span>We reply within 24 hours, every day of the week.</span></div>
            </div>
          </div>
          <div class="panel-card" data-reveal>
            <span class="eyebrow">QUICK QUOTE FORM</span>
            <h2 style="margin: 10px 0 18px">Scope in 60 seconds.</h2>
            <form @submit.prevent="submitForm" style="display:grid;gap:14px" novalidate>
              <div class="form-row"><label for="name">Full name *</label><input id="name" v-model="form.name" required aria-required="true" :aria-invalid="!!errors['name']" aria-describedby="contact-error-summary name-error" placeholder="June Chemuu" @blur="validateField('name')" /><p id="name-error" v-if="errors['name']" class="contact-field-error">{{ errors["name"] }}</p></div>
              <div class="form-row"><label for="email">Email *</label><input id="email" v-model="form.email" type="email" required aria-required="true" :aria-invalid="!!errors['email']" aria-describedby="contact-error-summary email-error" placeholder="june@example.com" @blur="validateField('email')" /><p id="email-error" v-if="errors['email']" class="contact-field-error">{{ errors["email"] }}</p></div>
              <div class="form-row"><label for="phone">Phone</label><input id="phone" v-model="form.phone" type="tel" aria-describedby="phone-error" placeholder="+254 7__ ___ ___" @blur="validateField('phone')" /><p id="phone-error" v-if="errors['phone']" class="contact-field-error">{{ errors["phone"] }}</p></div>
              <div class="form-row"><label for="service">Service *</label><select id="service" v-model="form.service" required aria-required="true" :aria-invalid="!!errors['service']" aria-describedby="contact-error-summary service-error" @change="validateField('service')"><option value="">Select a service</option><option v-for="so in serviceOptions" :key="so" :value="so">{{ so }}</option></select><p id="service-error" v-if="errors['service']" class="contact-field-error">{{ errors["service"] }}</p></div>
              <div class="form-row"><label for="budget">Budget</label><select id="budget" v-model="form.budget"><option value="">Select budget range</option><option>Under KES 50,000</option><option>KES 50,000 - 150,000</option><option>KES 150,000 - 500,000</option><option>KES 500,000+</option><option>Not sure yet</option></select></div>
              <div class="form-row"><label for="description">Project details *</label><textarea id="description" v-model="form.description" required aria-required="true" :aria-invalid="!!errors['description']" aria-describedby="contact-error-summary description-error description-counter" rows="5" placeholder="Goals, timeline, must-haves..." @blur="validateField('description')"></textarea><p id="description-error" v-if="errors['description']" class="contact-field-error">{{ errors["description"] }}</p><p id="description-counter" style="font-size:11px;color:var(--site-muted)">{{ form.description.length }}/1000</p></div>
              <div class="contact-error-summary"><ul id="contact-error-summary" role="alert" aria-live="assertive"><li v-for="msg in invalidFieldMessages" :key="msg"><UiIcon name="arrow" /> {{ msg }}</li></ul></div>
              <button type="submit" class="action action-dark" :disabled="submitting" style="width:100%">{{ submitting ? "Opening WhatsApp…" : "Send via WhatsApp" }}</button>
              <p v-if="formNote" role="status" aria-live="polite" style="font-size:12px;color:var(--site-muted)">{{ formNote }}</p>
              <p style="font-size:11px;color:var(--site-muted)">By sending, you agree to be contacted about this inquiry. The form does not store your details on our servers — it opens WhatsApp with your message prefilled; durable inquiry capture arrives with the backend work (tracked in the project plan).</p>
            </form>
          </div>
        </div>
      </section>

      <section class="section-space site-container" data-reveal>
        <div class="section-heading">
          <div>
            <span class="eyebrow">ESTIMATOR — 60 SECONDS</span>
            <h2>Rough price, now.<br /><span class="muted-heading">Then a real quote.</span></h2>
          </div>
          <p>Pick a service and a scope tier for the owner-approved starting band. Written quotes confirm scope; these bands never fix a price.</p>
        </div>
        <ScopeEstimator />
      </section>

      <section class="section-space site-container closing-section" data-reveal>
        <div class="closing-card">
          <span class="eyebrow">PREFER DIRECT?</span>
          <h2>WhatsApp is the fastest <span>way to reach us.</span></h2>
          <div>
            <a :href="whatsappUrl('Hello 404HubSpot, I would like to discuss a project.')" target="_blank" rel="noopener noreferrer" class="action action-dark">Chat on WhatsApp <UiIcon name="diagonal" /></a>
            <a :href="`mailto:${contact.email}`" class="text-action">{{ contact.email }} <UiIcon name="arrow" /></a>
          </div>
          <span class="closing-art" aria-hidden="true">✳</span>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref, watch } from "vue";
import { useRoute } from "vue-router";
import GlobalNav from "../components/GlobalNav.vue";
import Footer from "../components/Footer.vue";
import PageHero from "../components/PageHero.vue";
import UiIcon from "../components/UiIcon.vue";
import ScopeEstimator from "../components/forms/ScopeEstimator.vue";
import { contact, services, whatsappUrl } from "../data/site";

const route = useRoute();

const form = reactive({
  name: "",
  email: "",
  phone: "",
  service: "",
  budget: "",
  description: "",
});

const errors = reactive<Record<string, string>>({});
const submitting = ref(false);
const formNote = ref("");

const serviceOptions = computed(() => services.map((s) => s.title));

// Prefill the service select when arriving via ?service=<slug>
watch(
  () => route.query.service,
  (slug) => {
    if (!slug || typeof slug !== "string") return;
    const match = services.find((s) => s.route === `/services/${slug}`);
    if (match) form.service = match.title;
  },
  { immediate: true },
);

function validateField(field: string): boolean {
  const value: string = (form as Record<string, string>)[field] ?? "";
  let msg = "";

  switch (field) {
    case "name":
      if (!value.trim()) msg = "Please enter your full name.";
      else if (value.trim().length < 2) msg = "Name looks too short.";
      break;
    case "email":
      if (!value.trim()) msg = "Please enter your email address.";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) msg = "Please enter a valid email address.";
      break;
    case "phone":
      if (value.trim() && !/^\+?[\d\s()\-]{7,}$/.test(value)) msg = "Please enter a valid phone number.";
      break;
    case "service":
      if (!value.trim()) msg = "Please select a service.";
      break;
    case "description":
      if (!value.trim()) msg = "Please tell us about your project.";
      else if (value.trim().length < 10) msg = "Please give a bit more detail (10+ characters).";
      break;
  }

  if (msg) errors[field] = msg;
  else delete errors[field];
  return !msg;
}

const invalidFieldMessages = computed(() => Object.values(errors));

function submitForm() {
  const fields = ["name", "email", "service", "description"];
  let valid = true;
  for (const f of fields) if (!validateField(f)) valid = false;

  if (!valid) {
    const firstError = fields.find((f) => errors[f]);
    if (firstError) {
      const el = document.getElementById(firstError) as HTMLElement | null;
      el?.focus?.();
    }
    return;
  }

  submitting.value = true;
  formNote.value = "";

  const lines = [
    `*New inquiry — 404HubSpot*`,
    `*Name:* ${form.name.trim()}`,
    `*Email:* ${form.email.trim()}`,
    form.phone.trim() ? `*Phone:* ${form.phone.trim()}` : null,
    `*Service:* ${form.service}`,
    form.budget ? `*Budget:* ${form.budget}` : null,
    `*Details:*\n${form.description.trim()}`,
  ].filter(Boolean);

  const message = lines.join("\n");
  const url = whatsappUrl(message);

  try {
    window.open(url, "_blank", "noopener,noreferrer");
    formNote.value = "WhatsApp opened with your details prefilled. Send the message when you're ready.";
  } catch {
    formNote.value = "Couldn't open WhatsApp. Please copy your details and message us directly.";
  } finally {
    submitting.value = false;
  }
}
</script>
