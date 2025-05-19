import { test, expect } from '@playwright/test';
import { ContactPage } from '../pages/ContactPage';

test.beforeEach(async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc');
});

test.describe('Mark all as completed', () => {
  test('should allow me to mark all items as completed', async ({ page }) => {
    const contactPage = new ContactPage(page)
    
    await contactPage.goto();
    await expect(contactPage.locators.cookieAccept).toBeVisible();
    await contactPage.acceptCookies();
    await expect(contactPage.locators.cookieAccept).not.toBeVisible();
  });
});