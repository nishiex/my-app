const puppeteer = require('puppeteer-core');
const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
(async () => {
  const browser = await puppeteer.launch({ executablePath: chromePath, headless: true, args:['--no-sandbox','--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  const result = { desktopVisible: null, mobileVisible: null };

  // Desktop
  await page.setViewport({ width: 1280, height: 800 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });
  await page.waitForSelector('button[data-gallery-filter]', { timeout: 3000 });
  result.desktopVisible = await page.evaluate(() => {
    const btns = Array.from(document.querySelectorAll('button[data-gallery-filter]'));
    if (!btns.length) return null;
    // check if any button is visible (offsetParent !== null)
    return btns.some(b => b.offsetParent !== null);
  });

  // Mobile
  await page.setViewport({ width: 360, height: 800 });
  await page.reload({ waitUntil: 'networkidle2' });
  await page.waitForSelector('button[data-gallery-filter]', { timeout: 3000 });
  result.mobileVisible = await page.evaluate(() => {
    const btns = Array.from(document.querySelectorAll('button[data-gallery-filter]'));
    if (!btns.length) return null;
    return btns.some(b => b.offsetParent !== null);
  });

  console.log(JSON.stringify(result, null, 2));
  await browser.close();
})();
