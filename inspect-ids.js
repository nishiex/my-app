const puppeteer = require('puppeteer-core');
(async ()=>{
  const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
  const browser = await puppeteer.launch({ executablePath: chromePath, headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });
  const ids = await page.evaluate(()=> Array.from(document.querySelectorAll('[id]')).map(e=>e.id));
  console.log(JSON.stringify(ids,null,2));
  await browser.close();
})();
