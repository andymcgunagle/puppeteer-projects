import { Page } from 'puppeteer';

export async function scrollPage(page: Page) {
  const previousHeight = await page.evaluate('document.body.scrollHeight');

  await page.evaluate('window.scrollTo(0, document.body.scrollHeight)');

  await page.waitForFunction(`document.body.scrollHeight > ${previousHeight}`);

  await new Promise(resolve => setTimeout(resolve, 1000));
};