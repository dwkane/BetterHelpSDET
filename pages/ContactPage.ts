import { Page, Locator } from '@playwright/test';

export class ContactPage {
  private page: Page;
    
  private contactType = {
    REGISTERED_CLIENT: 'register-client-question',
    CURRENT_THERAPIST: 'current-therapist-question',
    NEW_THERAPIST: 'new-therapist-question',
    SERVICE: 'service-question',
    BILLING: 'billing-question',
    PRESS: 'press-question',
    BUSINESS: 'press-question',
    ORGANIZATION: 'organization-question-text',
  };

  public locators: {
    cookies: {
        acceptButton: Locator,
    },
    contactForm: {
        radioButtons: {
            registeredClient: Locator,
            currentTherapist: Locator,
            newTherapist: Locator,
            service: Locator,
            billing: Locator,
            press: Locator,
            business: Locator,
            organization: Locator,
        },
        firstName: Locator,
        lastName: Locator,
        emailAddress: Locator,
        message: Locator,
        agreeCheck: Locator,
        submit: Locator,
    },
    
  }

  constructor(page: Page) {
    this.page = page;
    this.locators = {
        cookies: {
            acceptButton: this.page.getByTestId('cookie-agree-button'),
        },
        contactForm: {
            radioButtons: {
                registeredClient: this.page.getByTestId(this.contactType.REGISTERED_CLIENT),
                currentTherapist: this.page.getByTestId(this.contactType.CURRENT_THERAPIST), 
                newTherapist: this.page.getByTestId(this.contactType.NEW_THERAPIST),
                service: this.page.getByTestId(this.contactType.SERVICE),
                billing: this.page.getByTestId(this.contactType.BILLING),
                press: this.page.getByTestId(this.contactType.PRESS),
                business: this.page.getByTestId(this.contactType.BUSINESS),
                organization: this.page.getByTestId(this.contactType.ORGANIZATION),
            },
            firstName: this.page.getByTestId('first-name-field'),
            lastName: this.page.getByTestId('last-name-field'),
            emailAddress: this.page.getByTestId('email-field'),
            message: this.page.getByTestId('message-textarea'),
            agreeCheck: this.page.getByTestId('contact-us-terms-checkbox'),
            submit: this.page.getByTestId('btn-primary-submit'),
        }
    }
  }

  async gotoContactPage() {
    await this.page.goto('https://www.betterhelp.com/contact/');
  }

  async acceptCookies() {
    await this.locators.cookies.acceptButton.click();
  }

  async enterValues(
    firstName: string,
    lastName: string,
    email: string,
    message: string,
    agree: boolean,
  ) {
    if (firstName) {
        await this.locators.contactForm.firstName.fill(firstName);
    }
    if (lastName) {
        await this.locators.contactForm.lastName.fill(lastName);
    }
    if (email) {
        await this.locators.contactForm.emailAddress.fill(email);
    }
    if (message) {
        await this.locators.contactForm.message.fill(message);
    }
    if (agree) {
        this.locators.contactForm.agreeCheck.check;
    } else {
        this.locators.contactForm.agreeCheck.uncheck;
    }
  }

  async submitForm() {
    await this.locators.contactForm.submit.click();
  }

  async getErrorMessage() {
    // return this.errorMessage.textContent();
  }
}
