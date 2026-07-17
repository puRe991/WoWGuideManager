export async function confirmExpansion(page, expansionKey = 'classic') {
  await page.locator(`#expansion-hero-grid [data-expansion="${expansionKey}"]`).click();
}
