// Run against a local development/preview server. No production form submissions.
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || "playwright");
const base = process.env.BASE_URL || "http://127.0.0.1:5173";
const widths = [360, 768, 1024, 1440, 1920];
const courseSlugs = [
  "python-foundations",
  "javascript-fullstack",
  "typescript-express-apis",
  "vue-frontend",
  "html-css-foundations",
  "gsap-motion",
  "flutter-dart-mobile",
  "flask-rest-apis",
  "git-dev-tools",
  "ml-foundations",
  "sql-databases",
  "scratch-beginners",
];
const routes = [
  "/",
  "/programming-classes",
  "/contact",
  "/our-process",
  "/services/web-development",
  "/services/software-development",
  "/services/mobile-apps",
  "/services/m-pesa-integration",
  "/services/graphics-design",
  "/team/don-artkins",
  ...courseSlugs.map((slug) => `/classes/${slug}`),
  "/no-such-page-404-check",
];
(async () => {
  const browser = await chromium.launch({
    headless: true,
    ...(process.env.CHROMIUM_PATH
      ? { executablePath: process.env.CHROMIUM_PATH }
      : {}),
  });
  const page = await browser.newPage();
  const errors = [];
  let checks = 0;
  page.on("pageerror", (error) => errors.push(error.message));
  fs.mkdirSync("docs/design/evidence", { recursive: true });
  for (const width of widths) {
    await page.setViewportSize({ width, height: 1000 });
    for (const route of routes) {
      await page.goto(base + route);
      await page.locator("h1, h2").first().waitFor();
      assert.equal(await page.locator("header.site-header").count(), 1);
      assert.equal(await page.locator("footer.site-footer").count(), 1);
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth > innerWidth,
      );
      assert.equal(overflow, false, `${route} overflows at ${width}`);
      checks++;
    }
    await page.goto(base);
    assert.equal(await page.locator(".service-card").count(), 6);
    assert.equal(await page.locator(".team-card").count(), 5);
    await page.locator("#team").scrollIntoViewIfNeeded();
    await page.waitForFunction(() =>
      [...document.querySelectorAll("img")].every(
        (img) => img.complete && img.naturalWidth > 0,
      ),
    );
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.screenshot({
      path: `docs/design/evidence/landing-${width}.png`,
      fullPage: true,
    });
    checks++;
  }
  const approvedPrices = [
    ["/services/web-development", ["KES 20,000 – 35,000", "KES 40,000 – 75,000", "From KES 85,000"]],
    ["/services/software-development", ["KES 280,000 – 650,000", "From KES 650,000"]],
    ["/services/mobile-apps", ["KES 400,000 – 700,000", "KES 750,000 – 1,500,000", "From KES 1,500,000"]],
    ["/services/m-pesa-integration", ["KES 25,000 – 40,000", "From KES 100,000"]],
    ["/services/graphics-design", ["KES 25,000 – 55,000", "KES 85,000 – 200,000", "From KES 35,000"]],
  ];
  for (const [route, prices] of approvedPrices) {
    await page.goto(base + route);
    assert.deepEqual(
      await page.locator(".price-amount").allTextContents(),
      prices,
      `${route} must show only owner-approved prices`,
    );
    checks++;
  }
  await page.goto(base);
  const webDevHubLink = page
    .locator("#services")
    .getByRole("link", { name: "Web Development", exact: true });
  assert.equal(await webDevHubLink.count(), 1);
  assert.equal(await webDevHubLink.getAttribute("href"), "/services/web-development");
  checks += 2;
  await page.goto(base + "/services/web-development");
  assert.equal(await page.locator(".web-dev-scope-list").count(), 2);
  assert.equal(await page.locator(".web-dev-scope-list li").count(), 8);
  assert.equal(
    await page.locator(".web-dev-services .service-card").count(),
    6,
  );
  const firstFaq = page.locator(".web-dev-faq-list details").first();
  await firstFaq.locator("summary").scrollIntoViewIfNeeded();
  await page.waitForTimeout(800);
  await firstFaq.locator("summary").focus();
  await page.keyboard.press("Enter");
  assert.equal(await firstFaq.evaluate((details) => details.open), true);
  assert.equal(await page.locator(".web-dev-faq-list details").count(), 4);
  checks += 5;
  await page.goto(base + "/services/software-development");
  assert.match(
    (await page.locator("h1").innerText()).replace(/\s+/g, " "),
    /Software that fits how your business works\./,
  );
  assert.equal(await page.locator(".software-capability-card").count(), 3);
  assert.equal(await page.locator(".software-process .process-row").count(), 5);
  assert.equal(await page.locator(".software-example-card").count(), 3);
  assert.match(
    await page.locator(".software-example-note").innerText(),
    /illustrative scenarios only.*not client case studies/i,
  );
  assert.equal(await page.locator(".software-price-card").count(), 2);
  assert.doesNotMatch(
    await page.locator("main").innerText(),
    /3 months support|dedicated PM/i,
  );
  const softwareWhatsApp = new URL(
    await page.locator(".software-closing a[target='_blank']").getAttribute("href"),
  );
  assert.match(softwareWhatsApp.searchParams.get("text"), /software development project/i);
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForFunction(
    () => getComputedStyle(document.querySelector(".software-closing")).visibility === "visible",
  );
  const softwareQuoteLink = page
    .locator(".software-closing")
    .getByRole("link", { name: /Request a scoped quote/ });
  assert.equal(await softwareQuoteLink.getAttribute("href"), "/contact?service=software-development");
  await softwareQuoteLink.click();
  await page.waitForURL("**/contact?service=software-development");
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForFunction(
    () => getComputedStyle(document.querySelector("#service").closest("section")).visibility === "visible",
  );
  assert.equal(await page.locator("#service").inputValue(), "Software Development");
  checks += 10;
  for (const width of [360, 1440]) {
    await page.setViewportSize({ width, height: 1000 });
    await page.goto(base + "/services/software-development");
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForFunction(
      () =>
        [...document.querySelectorAll("main [data-reveal]")].every(
          (element) => getComputedStyle(element).visibility === "visible",
        ),
    );
    await page.waitForTimeout(800);
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.screenshot({
      path: `docs/design/evidence/software-development-${width}.png`,
      fullPage: true,
    });
    checks++;
  }
  await page.goto(base + "/programming-classes");
  const courseCards = page.locator(".courses-grid .service-card");
  assert.equal(await courseCards.count(), courseSlugs.length);
  for (const card of await courseCards.all()) {
    const text = await card.innerText();
    assert.match(text, /Ask us for current fees\./);
    assert.doesNotMatch(text, /KES\s[\d,]+/);
  }
  checks++;
  for (const slug of courseSlugs) {
    await page.goto(`${base}/classes/${slug}`);
    const text = await page.locator("main").innerText();
    assert.match(text, /Ask us for current fees and availability\./);
    assert.doesNotMatch(text, /KES\s[\d,]+/);
    assert.doesNotMatch(text, /Fees provisional/i);
    assert.doesNotMatch(
      await page.locator('meta[name="description"]').getAttribute("content"),
      /KES\s[\d,]+|Fee\sKES/i,
    );
    checks++;
  }
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto(base);
  await page.keyboard.press("Tab");
  assert.equal(await page.evaluate(() => document.activeElement.textContent.trim()), "Skip to content");
  await page.keyboard.press("Enter");
  assert.equal(await page.evaluate(() => document.activeElement.id), "main-content");
  checks++;
  await page.goto(base + "/contact");
  await page.keyboard.press("Tab");
  await page.keyboard.press("Enter");
  assert.equal(await page.evaluate(() => document.activeElement.id), "main-content");
  checks++;
  await page.goto(base);
  const services = page.getByRole("button", { name: "Services", exact: true });
  await services.focus();
  await page.keyboard.press("Enter");
  assert.equal(await services.getAttribute("aria-expanded"), "true");
  await page.keyboard.press("Tab");
  assert.equal(
    await page.evaluate(() => document.activeElement.textContent.trim()),
    "Web Development",
  );
  await page.keyboard.press("Escape");
  assert.equal(await services.getAttribute("aria-expanded"), "false");
  assert.equal(
    await services.evaluate((el) => el === document.activeElement),
    true,
  );
  await services.click();
  await page.locator("h1").click();
  assert.equal(await services.getAttribute("aria-expanded"), "false");
  await services.click();
  await page
    .locator("#service-navigation")
    .getByRole("link", { name: "Mobile Apps" })
    .click();
  await page.waitForURL("**/services/mobile-apps");
  assert.equal(await page.evaluate(() => scrollY), 0);
  checks++;
  await page.setViewportSize({ width: 360, height: 740 });
  await page.goto(base);
  const toggle = page.getByRole("button", { name: "Open navigation" });
  await toggle.click();
  assert.equal(await page.locator("#primary-navigation").isVisible(), true);
  await page.getByRole("button", { name: "Services", exact: true }).click();
  await page.keyboard.press("Escape");
  assert.equal(await page.locator("#service-navigation").count(), 0);
  await page.keyboard.press("Escape");
  assert.equal(
    await toggle.evaluate((el) => el === document.activeElement),
    true,
  );
  await toggle.click();
  await page
    .locator("#primary-navigation")
    .getByRole("link", { name: "Our Process", exact: true })
    .click();
  await page.waitForURL("**/our-process");
  await page.waitForTimeout(450); // App route transition: old menu fades out 250ms
  assert.equal(await page.locator("#primary-navigation").isVisible(), false);
  assert.notEqual(
    await page.evaluate(() => getComputedStyle(document.body).overflow),
    "hidden",
  );
  checks++;
  await page.goto(base);
  await page.getByRole("button", { name: "Open navigation" }).click();
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.setViewportSize({ width: 360, height: 1000 });
  await page.waitForTimeout(150);
  assert.equal(await page.locator("#primary-navigation").isVisible(), false);
  checks++;
  await page.getByRole("link", { name: "Explore our services" }).click();
  await page.waitForURL("**/#services");
  assert.ok((await page.locator("#services").boundingBox()).y >= 70);
  checks++;
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.waitForFunction(
    () => {
      const el = document.querySelector(".service-card");
      return el && getComputedStyle(el).transitionDuration === "0s";
    },
    null,
    { timeout: 3000 },
  );
  const duration = await page
    .locator(".service-card")
    .first()
    .evaluate((el) => getComputedStyle(el).transitionDuration);
  assert.equal(duration, "0s");
  await page.emulateMedia({ reducedMotion: "no-preference" });
  // Theme toggle + contrast audit (bugs/UI-VISIBILITY.png): every pair ≥ 4.5.
  const ratio = async (fgSel, bgSel) =>
    page.evaluate(
      ([fgSel, bgSel]) => {
        const lum = (rgb) => {
          const c = rgb.match(/[\d.]+/g).map(Number).slice(0, 3).map((v) => {
            v /= 255;
            return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
          });
          return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
        };
        const bgOf = (el) => {
          while (el && el !== document.documentElement) {
            const bg = getComputedStyle(el).backgroundColor;
            if (bg && !bg.includes("rgba(0, 0, 0, 0)") && !bg.includes("rgba(0,0,0,0)") && bg !== "transparent") return bg;
            el = el.parentElement;
          }
          return getComputedStyle(document.body).backgroundColor;
        };
        const fg = document.querySelector(fgSel);
        const bgEl = document.querySelector(bgSel);
        const L1 = lum(getComputedStyle(fg).color);
        const L2 = lum(bgOf(bgEl));
        const [hi, lo] = L1 > L2 ? [L1, L2] : [L2, L1];
        return (hi + 0.05) / (lo + 0.05);
      },
      [fgSel, bgSel],
    );
  const pairs = [
    [".hero-copy > p", ".landing-page"],
    [".hero-copy h1", ".landing-page"],
    [".site-header .nav-link", ".site-header"],
    [".hero-actions .action-dark", ".hero-actions .action-dark"],
    [".flow-bottom span", ".flow-bottom"],
    [".footer-grid > div > a:not(.brand)", ".site-footer"],
    [".team-details > span", ".team-section"],
  ];
  await page.setViewportSize({ width: 1440, height: 1000 });
  const themeBtn = (label) => page.getByRole("button", { name: `${label} theme` }).first();
  await themeBtn("Dark").click();
  assert.equal(await page.evaluate(() => document.documentElement.dataset.theme), "dark");
  checks++;
  for (const [fg, bg] of pairs) {
    const r = await ratio(fg, bg);
    assert.ok(r >= 4.5, `dark ${fg} vs ${bg}: ${r.toFixed(2)}`);
  }
  checks++;
  await themeBtn("Light").click();
  assert.equal(await page.evaluate(() => document.documentElement.dataset.theme), "light");
  for (const [fg, bg] of pairs) {
    const r = await ratio(fg, bg);
    assert.ok(r >= 4.5, `light ${fg} vs ${bg}: ${r.toFixed(2)}`);
  }
  checks++;
  await themeBtn("System").click();
  for (const anchor of await page.locator('a[target="_blank"]').all()) {
    assert.ok((await anchor.getAttribute("rel")).includes("noopener"));
  }
  assert.equal(await page.locator('a[href*="your-"]').count(), 0);
  assert.deepEqual(errors, []);
  checks++;
  const result = {
    checkedAt: new Date().toISOString(),
    checks,
    routeViewportChecks: widths.length * routes.length,
    runtimeErrors: errors,
    browser: await browser.version(),
    playwright: require(
      path.join(process.env.PLAYWRIGHT_MODULE || "playwright", "package.json"),
    ).version,
    limitations:
      "Chromium only; no live contact submission, external social validation, or screen-reader audit.",
  };
  fs.writeFileSync(
    "docs/design/evidence/browser-results.json",
    JSON.stringify(result, null, 2) + "\n",
  );
  console.log(JSON.stringify(result, null, 2));
  await browser.close();
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
