import { test, expect } from '@playwright/test';

test('homepage loads and shows wizard', async ({ page }) => {
  await page.goto('http://localhost:5173');
  await expect(page.getByText('Basic Sleeve Pattern')).toBeVisible();
  await expect(page.getByRole('button', { name: /next/i })).toBeVisible();
});

