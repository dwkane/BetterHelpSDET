import { Page, Locator } from '@playwright/test';

export class ContactPage {
  private page: Page;
    
  public locators: {
    cookieAccept: Locator;
  }

  constructor(page: Page) {
    this.page = page;
    this.locators = {
        cookieAccept: this.page.getByTestId('cookie-agree-button'),
        //username: this.page.locator('#username'),
    }
  }

  async goto() {
    await this.page.goto('https://www.betterhelp.com/contact/');
  }

  async acceptCookies() {
    await this.locators.cookieAccept.click();
  }

  async login(username: string, password: string) {
    // await this.usernameInput.fill(username);
    // await this.passwordInput.fill(password);
    // await this.loginButton.click();
  }

  async getErrorMessage() {
    // return this.errorMessage.textContent();
  }
}
