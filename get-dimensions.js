const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({devtools: true});
  const page = await browser.newPage();
  await page.goto('https://example.com');

  // Get the "viewport" of the page, as reported by the page.
  const dimensions = await page.evaluate(() => {
    return {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
      deviceScaleFactor: window.devicePixelRatio
    };
  });

    page.on('console', msg => console.log('PAGE LOG:', msg.text()));
    await page.evaluate(() => console.log(`url is ${location.href}`));
    console.log('Dimensions:', dimensions);

  await browser.close();
})();