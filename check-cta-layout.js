const puppeteer = require('puppeteer-core');
const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
(async () => {
  const browser = await puppeteer.launch({ executablePath: chromePath, headless: true, args:['--no-sandbox','--disable-setuid-sandbox'] });
  const page = await browser.newPage();

  const results = {};

  // Desktop
  await page.setViewport({ width: 1280, height: 800 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });
  await page.waitForSelector('.arcade-actions', { timeout: 3000 });
  results.desktop = await page.evaluate(() => {
    const el = document.querySelector('.arcade-actions');
    if (!el) return null;
    const style = getComputedStyle(el);
    const children = Array.from(el.querySelectorAll('button')).map(b => ({text: b.innerText.trim(), rect: b.getBoundingClientRect()}));
    return { flexDirection: style.flexDirection, children };
  });

  // Mobile narrow
  await page.setViewport({ width: 360, height: 800 });
  await page.reload({ waitUntil: 'networkidle2' });
  await page.waitForSelector('.arcade-actions', { timeout: 3000 });
  results.mobile = await page.evaluate(() => {
    const el = document.querySelector('.arcade-actions');
    if (!el) return null;
    const style = getComputedStyle(el);
    const children = Array.from(el.querySelectorAll('button')).map(b => ({text: b.innerText.trim(), rect: b.getBoundingClientRect()}));
    return { flexDirection: style.flexDirection, children };
  });

  console.log(JSON.stringify(results, null, 2));

  await browser.close();
})();
