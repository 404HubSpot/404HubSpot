<template>
  <div class="page-shell landing-page" ref="root">
    <GlobalNav />
    <main id="main-content" tabindex="-1">
      <PageHero
        kicker="CONTACT — LET'S BUILD SOMETHING"
        title="Tell us your <em>idea.</em> We'll reply fast."
        lede="WhatsApp for speed, email for detail, or the form for a scoped quote. Replies within 24 hours."
      >
        <template #actions>
          <a :href="whatsappUrl('Hello 404HubSpot, I have a project.')" target="_blank" rel="noopener noreferrer" class="action action-dark">WhatsApp us <UiIcon name="diagonal" /></a>
          <a :href="`mailto:${'hubspot861@gmail.com'}`" class="text-action">hubspot861@gmail.com <UiIcon name="arrow" /></a>
        </template>
        <template #art>
          <div class="hero-art">
            <div class="preview-grid"></div>
            <div class="payment-flow" style="padding: 28px">
              <div class="flow-top"><span>EMAIL</span><UiIcon name="check" /></div>
              <div class="flow-connector">↓</div>
              <div class="flow-center"><span class="status-dot"></span><b>WhatsApp</b><span>fastest</span><UiIcon name="check" /></div>
              <div class="flow-connector">↓</div>
              <div class="flow-bottom"><UiIcon name="phone" /><span>Google Meet<br /><b>by appointment.</b></span></div>
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
              <div><b>Email</b><br /><a href="mailto:hubspot861@gmail.com" style="color:var(--site-brand)">hubspot861@gmail.com</a></div>
              <div><b>WhatsApp</b><br /><a :href="whatsappUrl('Hello, I would like to discuss a project.')" target="_blank" rel="noopener noreferrer" style="color:var(--site-brand)">Chat now ↗</a></div>
              <div><b>Google Meet</b><br /><a :href="googleMeetUrl" target="_blank" rel="noopener noreferrer" style="color:var(--site-brand)">Schedule a consultation ↗</a></div>
            </div>
          </div>
          <div class="panel-card" data-reveal>
            <span class="eyebrow">QUICK QUOTE FORM</span>
            <h2 style="margin: 10px 0 18px">Scope in 60 seconds.</h2>
            <form @submit.prevent="submitForm" style="display:grid;gap:14px">
              <div class="form-row"><label for="name">Full name *</label><input id="name" v-model="form.name" required placeholder="June Chemuu" @blur="validateField('name')" /><p v-if="errors.name" style="color:#b3261e;font-size:12px">{{ errors.name }}</p></div>
              <div class="form-row"><label for="email">Email *</label><input id="email" v-model="form.email" type="email" required placeholder="june@example.com" @blur="validateField('email')" /><p v-if="errors.email" style="color:#b3261e;font-size:12px">{{ errors.email }}</p></div>
              <div class="form-row"><label for="phone">Phone</label><input id="phone" v-model="form.phone" type="tel" placeholder="+254 7__ ___ ___" @blur="validateField('phone')" /></div>
              <div class="form-row"><label for="service">Service *</label><select id="service" v-model="form.service" required @change="validateField('service')"><option value="">Select a service</option><option>Web Development</option><option>Software Development</option><option>Mobile Apps</option><option>M-Pesa Integration</option><option>Graphics Design</option><option>Programming Classes</option></select></div>
              <div class="form-row"><label for="budget">Budget</label><select id="budget" v-model="form.budget"><option value="">Select budget range</option><option>Under KES 50,000</option><option>KES 50,000 - 150,000</option><option>KES 150,000 - 500,000</option><option>KES 500,000+</option><option>Not sure yet</option></select></div>
              <div class="form-row"><label for="description">Project details *</label><textarea id="description" v-model="form.description" required rows="5" placeholder="Goals, timeline, must-haves..." @blur="validateField('description')"></textarea><p style="font-size:11px;color:var(--site-muted)">{{ form.description.length }}/1000</p></div>
              <button type="submit" class="action action-dark" :disabled="!isFormValid" style="width:100%">Send via WhatsApp</button>
              <p v-if="formNote" style="font-size:12px;color:var(--site-muted)">{{ formNote }}</p>
              <p style="font-size:11px;color:var(--site-muted)">By sending, you agree to be contacted about your inquiry.</p>
            </form>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>


<script>
import GlobalNav from '../components/GlobalNav.vue'
import Footer from '../components/Footer.vue'
import PageHero from '../components/PageHero.vue'
import UiIcon from '../components/UiIcon.vue'
import { ref } from 'vue'
import { useReveal, useMagnetic } from '../composables/useReveal'

export default {
  name: 'Contact',
  components: {
    GlobalNav,
    Footer,
    PageHero,
    UiIcon
  },
  setup() {
    const root = ref(null);
    useReveal(root);
    useMagnetic(root);
    return { root };
  },
  created() {
    if (this.$route.query.service === 'software-development') {
      this.form.service = 'Software Development'
    }
  },
  data() {
    return {
      whatsappNumber: '254708345963', // Replace with your actual WhatsApp number
      googleMeetUrl: 'https://meet.google.com/your-meeting-link', // Replace with your Google Meet link
      formNote: '',
      errors: {},
      form: {
        name: '',
        email: '',
        phone: '',
        service: '',
        budget: '',
        timeline: '',
        description: ''
      }
    }
  },
  computed: {
    isFormValid() {
      return this.form.name && 
             this.form.email && 
             this.form.service && 
             this.form.description &&
             !this.errors.name &&
             !this.errors.email &&
             !this.errors.description
    }
  },
  methods: {
    whatsappUrl(text) {
      return `https://wa.me/${this.whatsappNumber}?text=${text}`
    },
    validateField(field) {
      this.errors[field] = ''
      
      switch(field) {
        case 'name':
          if (!this.form.name.trim()) {
            this.errors.name = 'Name is required'
          } else if (this.form.name.trim().length < 2) {
            this.errors.name = 'Name must be at least 2 characters'
          }
          break
        case 'email':
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
          if (!this.form.email.trim()) {
            this.errors.email = 'Email is required'
          } else if (!emailRegex.test(this.form.email)) {
            this.errors.email = 'Please enter a valid email address'
          }
          break
        case 'phone':
          if (this.form.phone && !/^[\d\s\+\-\(\)]+$/.test(this.form.phone)) {
            this.errors.phone = 'Please enter a valid phone number'
          }
          break
        case 'service':
          if (!this.form.service) {
            this.errors.service = 'Please select a service'
          }
          break
        case 'description':
          if (!this.form.description.trim()) {
            this.errors.description = 'Project description is required'
          } else if (this.form.description.trim().length < 20) {
            this.errors.description = 'Description must be at least 20 characters'
          } else if (this.form.description.length > 1000) {
            this.errors.description = 'Description must be less than 1000 characters'
          }
          break
      }
    },
    validateForm() {
      this.validateField('name')
      this.validateField('email')
      this.validateField('phone')
      this.validateField('service')
      this.validateField('description')
      return Object.keys(this.errors).length === 0 || Object.values(this.errors).every(e => !e)
    },
    submitForm() {
      // No backend yet (spec 19 owns POST /api/v1/inquiries): validate here,
      // then hand the inquiry to WhatsApp prefilled — a real channel today.
      this.formNote = ''
      if (!this.validateForm()) {
        this.formNote = 'Please correct the highlighted fields, then send again.'
        return
      }
      const lines = [
        `Name: ${this.form.name.trim()}`,
        `Email: ${this.form.email.trim()}`,
        this.form.phone.trim() ? `Phone: ${this.form.phone.trim()}` : null,
        `Service: ${this.form.service}`,
        this.form.budget ? `Budget: ${this.form.budget}` : null,
        `Details: ${this.form.description.trim()}`,
      ].filter(Boolean)
      window.open(
        this.whatsappUrl(`Hello 404HubSpot, new inquiry:\n${lines.join('\n')}`),
        '_blank',
        'noopener,noreferrer',
      )
      this.formNote = 'Opening WhatsApp with your inquiry prefilled — press send there and we reply within 24 hours.'
    }
  },
  mounted() {
    const urlParams = new URLSearchParams(window.location.search)
    if (urlParams.get('success') === 'true') {
      this.formNote = 'Message noted — we reply within 24 hours.'
    }
  }
}
</script>
