const puppeteer = require('puppeteer-core');
const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
(async () => {
  const result = { desktop: {}, mobile: {}, console: [] };
  const browser = await puppeteer.launch({ executablePath: chromePath, headless: true, args: ['--no-sandbox','--disable-setuid-sandbox'] });
  const page = await browser.newPage();

  page.on('console', msg => {
    result.console.push({ type: msg.type(), text: msg.text() });
  });
  page.on('pageerror', err => result.console.push({ type: 'pageerror', text: err.message }));

  // Desktop check
  await page.setViewport({ width: 1280, height: 900 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });
  await await new Promise(res => setTimeout(res, 300)); // let client hydrate

  result.desktop.heroExists = await page.evaluate(() => !!document.getElementById('home'));
  result.desktop.heroVisible = await page.evaluate(() => {
    const el = document.getElementById('home');
    if (!el) return false;
    return el.offsetParent !== null && el.getBoundingClientRect().height > 10;
  });

  result.desktop.kioskExists = await page.evaluate(() => !!document.querySelector('.hero-kiosk'));
  result.desktop.kioskVisible = await page.evaluate(() => {
    const el = document.querySelector('.hero-kiosk');
    if (!el) return false;
    return el.offsetParent !== null && el.getBoundingClientRect().height > 10;
  });

  result.desktop.kioskRect = await page.evaluate(() => {
    const el = document.querySelector('.hero-kiosk');
    if (!el) return null;
    const r = el.getBoundingClientRect();
    return { top: Math.round(r.top), left: Math.round(r.left), width: Math.round(r.width), height: Math.round(r.height) };
  });

  result.desktop.screenImages = await page.evaluate(() => {
    const nodes = Array.from(document.querySelectorAll('.gsap-kiosk-img img'));
    return nodes.map((img) => ({ src: img.getAttribute('src') || img.src, alt: img.getAttribute('alt') || null, naturalWidth: img.naturalWidth || null, naturalHeight: img.naturalHeight || null }));
  });

  result.desktop.shellImage = await page.evaluate(() => {
    // kiosk shell is the image with alt 'ArcadeLX Gaming Kiosk'
    const img = Array.from(document.querySelectorAll('.hero-kiosk img')).find(i => (i.getAttribute('alt')||'').toLowerCase().includes('kiosk'));
    if (!img) return null;
    return { src: img.getAttribute('src')||img.src, alt: img.getAttribute('alt')||null, naturalWidth: img.naturalWidth||null, naturalHeight: img.naturalHeight||null };
  });

  // Mobile check
  await page.setViewport({ width: 375, height: 800 });
  await page.reload({ waitUntil: 'networkidle2' });
  await await new Promise(res => setTimeout(res, 300));

  result.mobile.heroExists = await page.evaluate(() => !!document.getElementById('home'));
  result.mobile.heroVisible = await page.evaluate(() => {
    const el = document.getElementById('home');
    if (!el) return false;
    return el.offsetParent !== null && el.getBoundingClientRect().height > 10;
  });

  result.mobile.kioskExists = await page.evaluate(() => !!document.querySelector('.hero-kiosk'));
  result.mobile.kioskVisible = await page.evaluate(() => {
    const el = document.querySelector('.hero-kiosk');
    if (!el) return false;
    return el.offsetParent !== null && el.getBoundingClientRect().height > 10;
  });

  result.mobile.kioskRect = await page.evaluate(() => {
    const el = document.querySelector('.hero-kiosk');
    if (!el) return null;
    const r = el.getBoundingClientRect();
    return { top: Math.round(r.top), left: Math.round(r.left), width: Math.round(r.width), height: Math.round(r.height) };
  });

  result.mobile.screenImages = await page.evaluate(() => {
    const nodes = Array.from(document.querySelectorAll('.gsap-kiosk-img img'));
    return nodes.map((img) => ({ src: img.getAttribute('src') || img.src, alt: img.getAttribute('alt') || null, naturalWidth: img.naturalWidth || null, naturalHeight: img.naturalHeight || null }));
  });

  result.mobile.shellImage = await page.evaluate(() => {
    const img = Array.from(document.querySelectorAll('.hero-kiosk img')).find(i => (i.getAttribute('alt')||'').toLowerCase().includes('kiosk'));
    if (!img) return null;
    return { src: img.getAttribute('src')||img.src, alt: img.getAttribute('alt')||null, naturalWidth: img.naturalWidth||null, naturalHeight: img.naturalHeight||null };
  });

  console.log(JSON.stringify(result, null, 2));
  await browser.close();
})();

