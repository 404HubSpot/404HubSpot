export const contact = {
  phone: "254708345963",
  email: "hubspot861@gmail.com",
};

export const whatsappUrl = (message) =>
  `https://wa.me/${contact.phone}?text=${encodeURIComponent(message)}`;

export const services = [
  {
    id: "01",
    icon: "web",
    title: "Web Development",
    description:
      "Fast, thoughtful websites that turn visitors into your next customers.",
    route: "/services/web-development",
    tags: ["Websites", "Web apps"],
    tone: "mint",
  },
  {
    id: "02",
    icon: "code",
    title: "Software Development",
    description:
      "Less busywork. More possibility. Custom tools built around your business.",
    route: "/services/software-development",
    tags: ["Custom systems", "Automation"],
    tone: "sand",
  },
  {
    id: "03",
    icon: "phone",
    title: "Mobile Apps",
    description:
      "Put your business in their pocket with intuitive iOS and Android experiences.",
    route: "/services/mobile-apps",
    tags: ["iOS", "Android"],
    tone: "lilac",
  },
  {
    id: "04",
    icon: "payment",
    title: "M-Pesa Integration",
    description:
      "Connect your business to seamless payments with the Safaricom Daraja API.",
    route: "/services/m-pesa-integration",
    tags: ["Daraja API", "Payments"],
    tone: "mint",
  },
  {
    id: "05",
    icon: "design",
    title: "Graphics Design",
    description:
      "A visual identity that feels like you. Made to stand out and stay consistent.",
    route: "/services/graphics-design",
    tags: ["Brand identity", "Visual design"],
    tone: "rose",
  },
  {
    id: "06",
    icon: "learn",
    title: "Programming Classes",
    description:
      "Go from curious to capable with practical projects and expert mentorship.",
    route: "/programming-classes",
    tags: ["Hands-on learning", "Mentorship"],
    tone: "sand",
  },
];

export const team = [
  {
    id: 1,
    slug: "francis-masila",
    name: "Francis Masila",
    role: "Fullstack Developer & Designer",
    focus: "Fullstack builds with a designer's eye.",
    bio: "Francis ships websites, apps and brand visuals end to end — from TradeNest trading tools to forex-learning sites and AI experiments like face recognition. Fullstack code with a designer's finish.",
    image: "/assets/frank.jpeg",
    avatar: "https://avatars.githubusercontent.com/u/135224370?v=4",
    github: "https://github.com/masila002",
    githubUser: "masila002",
    linkedin: "https://linkedin.com/in/francis-masila-34111027b",
    location: "Kenya",
    stats: { repos: 35, followers: 21 },
    languages: ["HTML", "Python", "TypeScript", "JavaScript", "Vue", "PHP"],
    skills: ["Fullstack Development", "Brand & Visual Design", "Vue", "Python", "Trading Tools"],
    repos: [
      { name: "TradeNest", desc: "Trading tools platform", lang: "TypeScript", stars: 1, url: "https://github.com/masila002/TradeNest" },
      { name: "face-recognition-final", desc: "Face recognition experiments", lang: "Python", stars: 2, url: "https://github.com/masila002/face-recognition-final" },
      { name: "tick-probability-pro", desc: "Probability tooling", lang: "TypeScript", stars: 1, url: "https://github.com/masila002/tick-probability-pro" },
      { name: "Trades", desc: "Forex-learning website", lang: "HTML", stars: 1, url: "https://github.com/masila002/Trades" },
      { name: "AgroPuls3", desc: "Agri web project", lang: "HTML", stars: 1, url: "https://github.com/masila002/AgroPuls3" },
      { name: "Vue-template", desc: "Reusable Vue starter", lang: null, stars: 2, url: "https://github.com/masila002/Vue-template" },
    ],
    portfolio: "",
  },
  {
    id: 2,
    slug: "don-artkins",
    name: "Don Artkins",
    role: "AI Engineer & System Architect",
    focus: "Fullstack, mobile, dev tools, open source, DevOps.",
    bio: "Don is a fullstack developer working across web, mobile, dev tools, open source and DevOps — and the team's AI engineer and system architect. Proof in the open: SycX (AI study app in Dart), SycX-API (Flask), gitswitch and hp-fingerprint (dev tools), parrot-blackbox (backup automation) and baseline (AI-agent workflow). Based in Nakuru.",
    image: null,
    avatar: "https://avatars.githubusercontent.com/u/196287924?v=4",
    github: "https://github.com/DonArtkins",
    githubUser: "DonArtkins",
    linkedin: "https://linkedin.com/in/donartkins",
    location: "Nakuru, Kenya",
    stats: { repos: 69, followers: 63 },
    languages: ["JavaScript", "TypeScript", "Python", "Dart", "Shell", "Vue"],
    skills: ["Fullstack Development", "Mobile (Flutter/Dart)", "AI Engineering", "System Architecture", "DevOps & Automation", "Dev Tools", "Open Source"],
    repos: [
      { name: "SycX", desc: "AI-powered summarization app for students", lang: "Dart", stars: 3, url: "https://github.com/DonArtkins/SycX" },
      { name: "SycX-API", desc: "Minimal high-performance Flask REST template", lang: "Python", stars: 1, url: "https://github.com/DonArtkins/SycX-API" },
      { name: "gitswitch", desc: "Switch GitHub accounts/configs on one machine", lang: "JavaScript", stars: 1, url: "https://github.com/DonArtkins/gitswitch" },
      { name: "hp-fingerprint", desc: "Fingerprint-auth installer for HP EliteBook", lang: "Shell", stars: 2, url: "https://github.com/DonArtkins/hp-fingerprint" },
      { name: "parrot-blackbox", desc: "Crash-proof multi-cloud backup automation", lang: "JavaScript", stars: 0, url: "https://github.com/DonArtkins/parrot-blackbox" },
      { name: "baseline", desc: "Planning-first workflow for building with AI agents", lang: "Python", stars: 0, url: "https://github.com/DonArtkins/baseline" },
    ],
    portfolio: "",
  },
  {
    id: 3,
    slug: "eric-njuki",
    name: "Eric Njuki",
    role: "UI/UX Designer",
    focus: "Interfaces with motion and intent.",
    bio: "Eric designs beautiful, intuitive experiences and prototypes them in code — Vue builds from wildlife conservation to hospital sites, plus dedicated GSAP motion experiments.",
    image: null,
    avatar: "https://avatars.githubusercontent.com/u/196622729?v=4",
    github: "https://github.com/Ericnjuki254",
    githubUser: "Ericnjuki254",
    linkedin: "https://linkedin.com/in/ericnjuki",
    location: "Kenya",
    stats: { repos: 6, followers: 20 },
    languages: ["Vue", "JavaScript", "HTML"],
    skills: ["UI/UX Design", "Vue Prototyping", "GSAP Motion", "Web Interfaces"],
    repos: [
      { name: "Wildlife-Gurdians", desc: "Conservation web experience", lang: "Vue", stars: 1, url: "https://github.com/Ericnjuki254/Wildlife-Gurdians" },
      { name: "hospital-website", desc: "Hospital website build", lang: "Vue", stars: 0, url: "https://github.com/Ericnjuki254/hospital-website" },
      { name: "GSAP-", desc: "GSAP animation experiments", lang: "Vue", stars: 0, url: "https://github.com/Ericnjuki254/GSAP-" },
      { name: "Multi-Step-Login", desc: "Stepped login UI", lang: "HTML", stars: 1, url: "https://github.com/Ericnjuki254/Multi-Step-Login" },
      { name: "Luminus-school", desc: "School site", lang: "JavaScript", stars: 0, url: "https://github.com/Ericnjuki254/Luminus-school" },
    ],
    portfolio: "",
  },
  {
    id: 4,
    slug: "christine-jemutai",
    name: "Christine Jemutai",
    role: "Frontend Developer",
    focus: "Clean, responsive interfaces.",
    bio: "Christine builds frontend that feels effortless — Vue apps, portfolio builds and component craft like navs and landing sections.",
    image: "/assets/chemuu.jpeg",
    avatar: "https://avatars.githubusercontent.com/u/196191892?v=4",
    github: "https://github.com/chemuu933",
    githubUser: "chemuu933",
    linkedin: "https://linkedin.com/in/christine kibet",
    location: "Kenya",
    stats: { repos: 10, followers: 14 },
    languages: ["HTML", "Vue", "JavaScript"],
    skills: ["Frontend Development", "Vue", "Responsive UI", "Components"],
    repos: [
      { name: "ChemuuPortfolio", desc: "Personal portfolio site", lang: "Vue", stars: 0, url: "https://github.com/chemuu933/ChemuuPortfolio" },
      { name: "JCSM", desc: "Vue web build", lang: "Vue", stars: 1, url: "https://github.com/chemuu933/JCSM" },
      { name: "Navbar", desc: "Navigation component craft", lang: "JavaScript", stars: 1, url: "https://github.com/chemuu933/Navbar" },
      { name: "Alphas-", desc: "Web project", lang: "HTML", stars: 1, url: "https://github.com/chemuu933/Alphas-" },
      { name: "UniPower", desc: "Web project", lang: "HTML", stars: 0, url: "https://github.com/chemuu933/UniPower" },
    ],
    portfolio: "",
  },
  {
    id: 5,
    slug: "glory-kinya",
    name: "Glory Kinya",
    role: "Fullstack Developer & Graphic Designer",
    focus: "Product and identity, together.",
    bio: "Glory (Kiki) pairs fullstack development with graphic design — and machine-learning curiosity. Open work includes ResuSensei (AI resume analyzer), an offline desktop Bible app, Express APIs and Google ML certification study. Portfolio on the profile.",
    image: null,
    avatar: "https://avatars.githubusercontent.com/u/119857712?v=4",
    github: "https://github.com/kiki-glow",
    githubUser: "kiki-glow",
    linkedin: "",
    location: "Kenya",
    stats: { repos: 46, followers: 10 },
    languages: ["HTML", "Python", "JavaScript", "TypeScript", "CSS", "PHP"],
    skills: ["Fullstack Development", "Graphic Design", "Machine Learning", "APIs", "Desktop Apps"],
    repos: [
      { name: "ResuSensei", desc: "AI resume analyzer web app", lang: "Python", stars: 2, url: "https://github.com/kiki-glow/ResuSensei" },
      { name: "Word-Of-Truth", desc: "Offline Bible for desktop", lang: "TypeScript", stars: 2, url: "https://github.com/kiki-glow/Word-Of-Truth" },
      { name: "pet_shelter_api", desc: "TypeScript + Express pet shelter API", lang: "TypeScript", stars: 0, url: "https://github.com/kiki-glow/pet_shelter_api" },
      { name: "Google_Machine_Learning__Certification_Course", desc: "Google ML certification study", lang: "Jupyter Notebook", stars: 0, url: "https://github.com/kiki-glow/Google_Machine_Learning__Certification_Course" },
      { name: "SD_Seminar", desc: "Seminar management in AL", lang: "AL", stars: 0, url: "https://github.com/kiki-glow/SD_Seminar" },
    ],
    portfolio: "https://my-portfolio-1-g2xm.onrender.com/",
  },
];

// GitHub sources, fetched 2026-09-30 via api.github.com (profiles + repo lists).
// Live counts drift; detail pages note the snapshot date. Refresh before any public claim.

// Provisional Kenya/Africa price bands to stop undercharging.
// Status 2026-09-30: web search integration returned no results, so these bands
// are OWNER-REVIEW REQUIRED (spec 02 gate). They lift current site prices toward
// Nairobi agency norms; do not present as quotes — WhatsApp inquiry confirms scope.
export const pricing = {
  web: [
    { name: "Launch Landing Page", range: "KES 20,000 – 35,000", blurb: "One sharp page, copy polish, contact + WhatsApp, SEO basics.", features: ["Single page design", "Mobile responsive", "SEO optimized", "Contact + WhatsApp integration"], cta: "I'm interested in a Landing Page", featured: false },
    { name: "Business Website", range: "KES 40,000 – 75,000", blurb: "5–10 pages with CMS, blog and analytics. Most popular.", features: ["5–10 pages", "Content management system", "Blog functionality", "Social + analytics integration"], cta: "I'm interested in a Business Website", featured: true, badge: "POPULAR" },
    { name: "E-Commerce", range: "From KES 85,000", blurb: "Catalog, cart, M-Pesa checkout and admin dashboard.", features: ["Product catalog & inventory", "Cart & M-Pesa checkout", "Order management", "Admin dashboard"], cta: "I'm interested in an E-Commerce website", featured: false },
  ],
  software: [
    { name: "Small Business System", range: "KES 280,000 – 650,000", blurb: "Internal tools, automation and reports.", features: ["Core modules & roles", "Up to 3 months delivery", "User training", "3 months support"], cta: "I'm interested in Small Business Software", featured: false },
    { name: "Enterprise Platform", range: "From KES 650,000", blurb: "Scalable architecture, integrations and security.", features: ["Custom features & integrations", "Scalable architecture", "Advanced security", "Dedicated PM + maintenance"], cta: "I'm interested in Enterprise Software", featured: true, badge: "ENTERPRISE" },
  ],
  mobile: [
    { name: "Basic App", range: "KES 400,000 – 700,000", blurb: "Single platform, clean UI, store submission.", features: ["Simple UI/UX", "Core features", "Single platform", "Store submission"], cta: "I'm interested in a Basic Mobile App", featured: false },
    { name: "Cross-Platform App", range: "KES 750,000 – 1,500,000", blurb: "iOS + Android, backend, M-Pesa and push.", features: ["iOS & Android", "Backend integration", "M-Pesa payments", "Push notifications"], cta: "I'm interested in a Cross-Platform Mobile App", featured: true, badge: "POPULAR" },
    { name: "Enterprise App", range: "From KES 1,500,000", blurb: "Complex integrations, admin and hardening.", features: ["Custom features", "Complex integrations", "Admin dashboard", "Advanced security + maintenance"], cta: "I'm interested in an Enterprise Mobile App", featured: false },
  ],
  mpesa: [
    { name: "STK Push Starter", range: "KES 25,000 – 40,000", blurb: "Lipa na M-Pesa with callbacks and sandbox testing.", features: ["STK Push", "Payment callbacks", "Sandbox testing", "Go-live assistance"], cta: "I'm interested in Basic M-Pesa Integration", featured: false },
    { name: "Full Daraja Suite", range: "From KES 100,000", blurb: "STK + B2C/B2B, balance, status queries and webhooks.", features: ["STK, B2C, B2B", "Balance + status APIs", "Webhook management", "Monitoring + support"], cta: "I'm interested in Full M-Pesa Integration", featured: true, badge: "COMPLETE" },
  ],
  graphics: [
    { name: "Logo Design", range: "KES 25,000 – 55,000", blurb: "Concepts, revisions and full file pack.", features: ["3 initial concepts", "2 revision rounds", "PNG/SVG/PDF pack", "Color variations"], cta: "I'm interested in Logo Design", featured: false },
    { name: "Brand Identity", range: "KES 85,000 – 200,000", blurb: "Logo, stationery, guidelines and social kit.", features: ["Logo + stationery", "Brand guidelines", "Business cards", "Social templates"], cta: "I'm interested in Brand Identity Design", featured: true, badge: "POPULAR" },
    { name: "Marketing Pack", range: "From KES 35,000", blurb: "Flyers, socials, banners and email headers.", features: ["Flyers & brochures", "Social graphics", "Banners", "Email templates"], cta: "I'm interested in Marketing Materials Design", featured: false },
  ],
};
