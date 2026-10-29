<template>
  <div class="estimator-grid">
    <article v-for="(tier, i) in tiers" :key="i" class="estimator-card" :class="{ featured: tier.featured }">
      <div class="estimator-head">
        <span class="eyebrow">{{ serviceLabel }}</span>
        <h3>{{ tier.name }}</h3>
        <span class="badge" v-if="tier.badge">{{ tier.badge }}</span>
      </div>
      <p class="estimator-blurb">{{ tier.blurb }}</p>
      <div class="estimator-price">
        <span class="price-amount">{{ tier.range }}</span>
        <span class="price-note">Starting band — written quotes confirm scope.</span>
      </div>
      <ul class="estimator-features">
        <li v-for="f in tier.features" :key="f"><UiIcon name="check" /> {{ f }}</li>
      </ul>
      <button class="action action-dark" @click="pick(tier.cta)">
        {{ tier.cta }}
      </button>
    </article>
  </div>
</template>

<script setup>
import { computed } from "vue";
import UiIcon from "../UiIcon.vue";
import { services, pricing, whatsappUrl } from "../../data/site";

const props = defineProps({
  service: { type: String, default: "" },
});

const serviceKey = computed(() => {
  const s = services.find((svc) => svc.route === `/services/${props.service}`);
  return s ? s.id.toLowerCase() : "";
});

const tiers = computed(() => pricing[serviceKey.value] || []);

const serviceLabel = computed(() => {
  const s = services.find((svc) => svc.route === `/services/${props.service}`);
  return s ? s.title : "Service";
});

function pick(cta) {
  const msg = `Hello 404HubSpot, I'm interested in: ${cta}`;
  window.open(whatsappUrl(msg), "_blank", "noopener,noreferrer");
}
</script>

<style scoped>
.estimator-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  width: 100%;
}
.estimator-card {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  border: 1px solid var(--site-border);
  border-radius: 14px;
  background: var(--site-surface);
}
.estimator-card.featured {
  border-color: var(--site-brand);
}
.estimator-head {
  display: flex;
  align-items: baseline;
  gap: 10px;
}
.estimator-head .eyebrow {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--site-muted);
}
.estimator-head h3 {
  margin: 0 0 6px 0;
  font-size: 17px;
  line-height: 1.3;
}
.estimator-head .badge {
  margin-left: auto;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 2px 8px;
  border-radius: 4px;
  background: var(--site-brand);
  color: #fff;
}
.estimator-blurb {
  margin: 0 0 12px 0;
  font-size: 13px;
  color: var(--site-muted);
  line-height: 1.7;
}
.estimator-price {
  margin-bottom: 12px;
}
.price-amount {
  display: block;
  font-size: 18px;
  font-weight: 700;
  color: var(--site-brand);
}
.price-note {
  font-size: 11px;
  color: var(--site-muted);
}
.estimator-features {
  margin: 0 0 14px 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 8px;
}
.estimator-features li {
  display: grid;
  grid-template-columns: 18px 1fr;
  gap: 8px;
  font-size: 13px;
  color: var(--site-muted);
}
.estimator-features svg {
  width: 18px;
  height: 18px;
}
.estimator-card .action {
  width: 100%;
  margin-top: auto;
}

@media (max-width: 900px) {
  .estimator-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@media (max-width: 600px) {
  .estimator-grid {
    grid-template-columns: 1fr;
  }
}
</style>