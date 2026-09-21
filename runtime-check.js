const puppeteer = require('puppeteer-core');
const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

(async () => {
  const result = {
    lenisPresent: false,
    scrollTriggerPresent: false,
    hasGamesLink: false,
    gamesRectTop: null,
    consoleErrors: [],
    consoleAll: [],
  };

  const browser = await puppeteer.launch({ executablePath: chromePath, headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();

  page.on('console', (msg) => {
    const entry = { type: msg.type(), text: msg.text() };
    result.consoleAll.push(entry);
    if (msg.type() === 'error' || msg.type() === 'warning') {
      result.consoleErrors.push(entry);
    }
  });

  page.on('pageerror', (err) => {
    const entry = { type: 'pageerror', text: err.message };
    result.consoleAll.push(entry);
    result.consoleErrors.push(entry);
  });

  try {
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle2', timeout: 10000 });

    // Wait a short time for client hydration and Lenis init
    try {
      await page.waitForFunction(() => (window).__LENIS !== undefined, { timeout: 4000 });
      result.lenisPresent = true;
    } catch (e) {
      result.lenisPresent = false;
    }

    // Check for ScrollTrigger availability (best-effort)
    result.scrollTriggerPresent = await page.evaluate(() => {
      try {
        // Check common globals
        // ScrollTrigger may not be global; check window.gsap.plugins.ScrollTrigger
        // or window.ScrollTrigger
        // eslint-disable-next-line no-undef
        return (typeof (window).ScrollTrigger !== 'undefined') || (!!(window).gsap && !!(window).gsap.plugins && !!(window).gsap.plugins.ScrollTrigger);
      } catch (e) {
        return false;
      }
    });

    // Click the header "Games" link (href="#games") if present
    const linkHandle = await page.$('a[href="#games"]');
    result.hasGamesLink = !!linkHandle;
    if (linkHandle) {
      await linkHandle.click();
      // Wait a bit for smooth scroll to animate
      await new Promise(res => setTimeout(res, 900));

      result.gamesRectTop = await page.evaluate(() => {
        const el = document.getElementById('games');
        if (!el) return null;
        const r = el.getBoundingClientRect();
        return Math.round(r.top);
      });
    }

    // Navigate to another route and back to ensure no errors (best-effort)
    await page.goto('http://localhost:3000/privacy-policy', { waitUntil: 'networkidle2', timeout: 10000 });
    await new Promise(res => setTimeout(res, 300));
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle2', timeout: 10000 });
    await new Promise(res => setTimeout(res, 300));

  } catch (err) {
    result.consoleErrors.push({ type: 'run', text: String(err) });
  }

  console.log(JSON.stringify(result, null, 2));

  await browser.close();
  process.exit(0);
})();


