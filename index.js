const puppeteer = require('puppeteer');

const sleep = x => new Promise(r => setTimeout(r, x));

(async () => {
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();
  await page.goto('http://www.httrack.com/page/2/');

  await page._client.send('Page.setDownloadBehavior', {
    behavior: 'allow',
    downloadPath: './downloads'
  });

  await page.click('a[title="download (main site)"]');
  await sleep(200000)

  await browser.close();
})();
