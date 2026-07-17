import { test, expect } from '@playwright/test';
import { confirmExpansion } from './helpers.js';

test('startup shows only the expansion picker until one is chosen', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('#expansion-picker')).toBeVisible();
  await expect(page.locator('#sidebar')).toBeHidden();
  await expect(page.locator('.tile')).toHaveCount(0);

  await confirmExpansion(page);
  await expect(page.locator('#sidebar')).toBeVisible();
  await expect(page.locator('.tile').first()).toBeVisible();
});

test('start page renders the guide catalog', async ({ page }) => {
  await page.goto('/');
  await confirmExpansion(page);
  await expect(page.locator('.tile').first()).toBeVisible();
  await expect(page.locator('.tile')).toHaveCount(await page.locator('.tile').count());
  expect(await page.locator('.tile').count()).toBeGreaterThan(0);
});

test('opening a class guide tile shows its detail page', async ({ page }) => {
  await page.goto('/#class-guides');
  await confirmExpansion(page);
  const firstTile = page.locator('.tile').first();
  const title = await firstTile.locator('h3').textContent();
  await firstTile.click();

  await expect(page.locator('.class-copy h3')).toContainText(title.trim());
  await expect(page.locator('.back-link')).toBeVisible();
});

test('back link returns from a class detail page to the listing', async ({ page }) => {
  await page.goto('/#class-guides');
  await confirmExpansion(page);
  await page.locator('.tile').first().click();
  await page.locator('.back-link').click();
  await expect(page).toHaveURL(/#class-guides$/);
});

test('dungeon detail page renders route, loot and boss sections', async ({ page }) => {
  await page.goto('/#dungeon-guides');
  await confirmExpansion(page);
  await page.locator('.tile').first().click();
  await expect(page.locator('.dungeon-main h3')).toBeVisible();
  await expect(page.locator('.dungeon-guide-grid')).toBeVisible();
});

test('raid detail page renders a boss-by-boss breakdown', async ({ page }) => {
  await page.goto('/#raid-guides');
  await confirmExpansion(page);
  await page.locator('.tile').first().click();
  await expect(page.locator('.raid-hero h3')).toBeVisible();
  await expect(page.locator('.boss-card').first()).toBeVisible();
});

test('reputation detail page renders standing rewards', async ({ page }) => {
  await page.goto('/#reputation-guides');
  await confirmExpansion(page);
  await page.locator('.tile').first().click();
  await expect(page.locator('.profession-hero h3')).toBeVisible();
  await expect(page.locator('#reputation-standings')).toBeVisible();
});

test('switching expansions updates the active expansion and dungeon count', async ({ page }) => {
  await page.goto('/#dungeon-guides');
  await confirmExpansion(page);
  const classicCount = await page.locator('.tile').count();

  await page.locator('.expansion-pill[data-expansion="the-burning-crusade"]').click();
  await expect(page.locator('html')).toHaveAttribute('data-active-expansion', 'the-burning-crusade');

  const tbcCount = await page.locator('.tile').count();
  expect(tbcCount).toBeGreaterThan(0);
  expect(tbcCount).not.toEqual(classicCount);
});

test('an unknown dungeon id redirects back to the dungeon listing', async ({ page }) => {
  await page.goto('/#dungeon-guides/does-not-exist');
  await confirmExpansion(page);
  await expect(page).toHaveURL(/#dungeon-guides$/);
  await expect(page.locator('.tile').first()).toBeVisible();
});
