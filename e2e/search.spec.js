import { test, expect } from '@playwright/test';

test('searching narrows the raid listing to matching tiles', async ({ page }) => {
  await page.goto('/#raid-guides');
  const totalCount = await page.locator('.tile').count();

  await page.locator('#search').fill('onyxias hort');
  await expect(page.locator('.tile')).toHaveCount(1);
  await expect(page.locator('.tile h3')).toHaveText('Onyxias Hort');
  expect(await page.locator('.tile').count()).toBeLessThan(totalCount);
});

test('a search term with no matches shows the empty state', async ({ page }) => {
  await page.goto('/');
  await page.locator('#search').fill('zzzzzzz-no-such-guide-zzzzzzz');
  await expect(page.locator('.empty-state')).toBeVisible();
  await expect(page.locator('.tile')).toHaveCount(0);
});

test('the logo link clears an active search', async ({ page }) => {
  await page.goto('/#raid-guides');
  await page.locator('#search').fill('onyxias hort');
  await expect(page.locator('.tile')).toHaveCount(1);

  await page.locator('#logo-link').click();
  await expect(page.locator('#search')).toHaveValue('');
});
