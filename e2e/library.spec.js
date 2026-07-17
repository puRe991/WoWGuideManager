import { test, expect } from '@playwright/test';
import { confirmExpansion } from './helpers.js';

test('library lists both free and premium guides by default', async ({ page }) => {
  await page.goto('/#guides');
  await confirmExpansion(page);
  await expect(page.locator('.tile').first()).toBeVisible();
  await expect(page.locator('.tile-badge.premium').first()).toBeVisible();
  await expect(page.locator('.tile-badge.free').first()).toBeVisible();
});

test('the premium toggle narrows the library to premium guides only', async ({ page }) => {
  await page.goto('/#guides');
  await confirmExpansion(page);
  const totalCount = await page.locator('.tile').count();

  await page.locator('#premium-toggle').click();
  await expect(page.locator('#premium-toggle')).toHaveClass(/active/);

  const premiumCount = await page.locator('.tile').count();
  expect(premiumCount).toBeGreaterThan(0);
  expect(premiumCount).toBeLessThan(totalCount);
  expect(await page.locator('.tile-badge.free').count()).toEqual(0);
});

test('the category filter narrows results to one category', async ({ page }) => {
  await page.goto('/#guides');
  await confirmExpansion(page);
  await page.locator('#category-select').selectOption('Gold');
  const tiles = page.locator('.tile');
  await expect(tiles.first()).toBeVisible();
  for (const subtitle of await tiles.locator('.tile-subtitle').allTextContents()) {
    expect(subtitle).toEqual('Gold');
  }
});

test('clearing the filter bar returns to the start page', async ({ page }) => {
  await page.goto('/#class-guides');
  await confirmExpansion(page);
  await page.locator('[data-clear-filter]').click();
  await expect(page).toHaveURL(/#start$/);
});
