// Per-route SEO: title, description, canonical, OG/Twitter, indexing.
// Canonical domain comes from VITE_SITE_URL. Fallback is PROVISIONAL —
// owner must confirm the primary domain (open question, spec 14 gate) and
// mirror it in public/sitemap.xml + public/robots.txt + this file.
export const SITE_URL = (
  import.meta.env.VITE_SITE_URL || "https://404hubspot.co.ke"
).replace(/\/$/, "");

export const DEFAULT_OG_IMAGE = `${SITE_URL}/assets/logo.png`;

const BASE = {
  Home: ["404HubSpot — Websites, Apps, M-Pesa & Tech Training in Kenya", "We turn your vision into websites, apps, and digital experiences that move your business forward — plus practical programming classes in Kenya."],
  ProgrammingClasses: ["Programming Classes in Kenya — Python, JavaScript, SQL | 404HubSpot", "Live, mentored programming classes: Python, JavaScript, SQL and Scratch. Hands-on projects, 1-on-1 guidance."],
  Contact: ["Contact 404HubSpot — Start Your Project", "Tell us your idea. WhatsApp, email or the quote form — replies within 24 hours."],
  OurProcess: ["Our Process — From Idea to Launch | 404HubSpot", "Seven clear steps from consultation to support. 50% to start, 50% on delivery."],
  WebDevelopment: ["Web Development Services Kenya | 404HubSpot", "Fast, high-converting websites and web apps — designed, built and supported. Fair KES pricing."],
  SoftwareDevelopment: ["Custom Software Development Kenya | 404HubSpot", "Custom systems and automation built around your business — sprints, docs, support."],
  MobileApps: ["Mobile App Development Kenya (iOS & Android) | 404HubSpot", "Native and cross-platform apps with M-Pesa, push and store deployment handled."],
  MPesaIntegration: ["M-Pesa Daraja API Integration Kenya | 404HubSpot", "STK Push to full Daraja suite — sandbox-tested, production-hardened M-Pesa payments."],
  GraphicsDesign: ["Graphics Design & Brand Identity Kenya | 404HubSpot", "Logos, brand kits and marketing sets — a visual identity that feels like you."],
  NotFound: ["Page not found | 404HubSpot", "That page took a wrong turn. Head home or pick a popular destination."],
};

function upsert(tag, attrs) {
  const sel = attrs.name
    ? `meta[name="${attrs.name}"]`
    : attrs.property
      ? `meta[property="${attrs.property}"]`
      : `link[rel="${attrs.rel}"]`;
  let el = document.head.querySelector(sel);
  if (!el) {
    el = document.createElement(tag);
    document.head.appendChild(el);
  }
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
  return el;
}

export function applySeo(route, team = [], courses = []) {
  let title = "404HubSpot";
  let description = BASE.Home[1];
  let noindex = false;
  let path = route.path;

  if (route.name === "CourseDetail") {
    const c = courses.find((t) => t.slug === route.params.slug);
    if (c) {
      title = `${c.name} — ${c.level} | 404HubSpot Courses`;
      description = `${c.name}: ${c.tagline} ${c.duration}. Ask us for current fees and availability.`;
    } else {
      title = "Course | 404HubSpot";
      noindex = true;
    }
  } else if (route.name === "TeamDetail") {
    const m = team.find((t) => t.slug === route.params.slug);
    if (m) {
      title = `${m.name} — ${m.role} | 404HubSpot`;
      description = `${m.name}, ${m.role} at 404HubSpot. ${m.focus} Open-source proof on GitHub.`;
    } else {
      title = "Team profile | 404HubSpot";
      noindex = true;
    }
  } else if (BASE[route.name]) {
    [title, description] = BASE[route.name];
    if (route.name === "NotFound") noindex = true;
  }

  const canonical = `${SITE_URL}${path === "/" ? "/" : path}`;
  document.title = title;
  upsert("meta", { name: "description", content: description });
  upsert("link", { rel: "canonical", href: canonical });
  upsert("meta", { property: "og:type", content: "website" });
  upsert("meta", { property: "og:site_name", content: "404HubSpot" });
  upsert("meta", { property: "og:title", content: title });
  upsert("meta", { property: "og:description", content: description });
  upsert("meta", { property: "og:url", content: canonical });
  upsert("meta", { property: "og:image", content: DEFAULT_OG_IMAGE });
  upsert("meta", { name: "twitter:card", content: "summary_large_image" });
  upsert("meta", { name: "twitter:title", content: title });
  upsert("meta", { name: "twitter:description", content: description });
  upsert("meta", { name: "twitter:image", content: DEFAULT_OG_IMAGE });
  let robots = document.head.querySelector('meta[name="robots"]');
  if (noindex) {
    if (!robots) {
      robots = document.createElement("meta");
      robots.setAttribute("name", "robots");
      document.head.appendChild(robots);
    }
    robots.setAttribute("content", "noindex, nofollow");
  } else if (robots) {
    robots.remove();
  }
}
