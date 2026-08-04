import { test, expect } from '@playwright/test';

test.describe('Noir Studio Haute Couture E2E Automation Suite', () => {
  test('should load haute couture landing page', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('text=NOIR STUDIO')).toBeVisible();
  });

  test('should navigate to garment catalog', async ({ page }) => {
    await page.goto('/shop');
    await expect(page.locator('text=Autumn / Winter Collection')).toBeVisible();
  });

  test('should inspect single garment detail', async ({ page }) => {
    await page.goto('/shop/1');
    await expect(page.locator('text=NOIR STUDIO')).toBeVisible();
  });
});
