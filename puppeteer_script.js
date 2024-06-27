const puppeteer = require('puppeteer');

async function runPuppeteer() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  try {
    await page.goto('https://aakalaw.github.io', { timeout: 60000 });
    // Add further actions after successful navigation
  } catch (error) {
    console.error('Navigation failed:', error);
    // Handle the error (e.g., retry, log, etc.)
  } finally {
    await browser.close();
  }
}

runPuppeteer();
