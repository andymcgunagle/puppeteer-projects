import { promises as fs } from "fs";

import puppeteer from 'puppeteer';

import { scapeLinksFromInfiniteScrollPage } from './functions/scapeLinksFromInfiniteScrollPage';

async function scrapeReddit(url: string, limit: number, outputFileName?: string) {
  const browser = await puppeteer.launch({
    // defaultViewport: null,
    // headless: false,
  });

  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle2' });
  // await page.screenshot({ path: 'example.png' });

  await fs.writeFile(
    (`../../${outputFileName || new Date().toISOString()}.js`),
    JSON.stringify(await scapeLinksFromInfiniteScrollPage(page, limit), null, 2),
    'utf8'
  );

  await browser.close();
};

scrapeReddit('https://www.reddit.com/r/showerthoughts/top/?t=all', 100, 'top-100-showerthoughts');