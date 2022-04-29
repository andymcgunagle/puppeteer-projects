import { Page } from 'puppeteer';

import { filterDuplicateObjects } from './filterDuplicateObjects';
import { getCommentLinks } from "./getCommentLinks";
import { scrollPage } from "./scrollPage";

export async function scapeLinksFromInfiniteScrollPage(page: Page, limit: number) {
  let links: (LinkObject | undefined)[] = [];

  while (links.length < limit) {
    links = filterDuplicateObjects([...links, ...await page.evaluate(getCommentLinks)], 'href');
    await scrollPage(page);
  };

  return links;
};