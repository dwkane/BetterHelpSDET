import { test, expect } from '@playwright/test';
import { ContactPage } from '../pages/ContactPage';

test.beforeEach(async ({ page }) => {
    const contactPage = new ContactPage(page)
    await contactPage.gotoContactPage();
    await contactPage.acceptCookies();
});

test.describe('Displayed Elements', () => {
    test('should display all Contact Type options', async ({ page }) => {
        const contactPage = new ContactPage(page);
        expect(contactPage.locators.contactForm.radioButtons.registeredClient).toBeVisible;
        expect(contactPage.locators.contactForm.radioButtons.currentTherapist).toBeVisible;
        expect(contactPage.locators.contactForm.radioButtons.newTherapist).toBeVisible;
        expect(contactPage.locators.contactForm.radioButtons.service).toBeVisible;
        expect(contactPage.locators.contactForm.radioButtons.billing).toBeVisible;
        expect(contactPage.locators.contactForm.radioButtons.press).toBeVisible;
        expect(contactPage.locators.contactForm.radioButtons.business).toBeVisible;
        expect(contactPage.locators.contactForm.radioButtons.organization).toBeVisible;
    });

    test('should display all Contact Form elements', async ({ page }) => {
        const contactPage = new ContactPage(page);
        expect(contactPage.locators.contactForm.firstName).toBeEnabled;
        expect(contactPage.locators.contactForm.lastName).toBeEnabled;
        expect(contactPage.locators.contactForm.emailAddress).toBeEnabled;
        expect(contactPage.locators.contactForm.message).toBeEnabled;
        expect(contactPage.locators.contactForm.agreeCheck).toBeEnabled;
        expect(contactPage.locators.contactForm.agreeCheck).not.toBeChecked;
        expect(contactPage.locators.contactForm.submit).not.toBeEnabled;
    });
});

test.describe('Populate and Submit Contact Form', () => {
    test('should populate values', async ({ page }) => {
        const contactPage = new ContactPage(page);
        await contactPage.locators.contactForm.radioButtons.registeredClient.click();
        await contactPage.enterValues(
            '~FirstName',
            'lastName',
            'emailAddress@email.com',
            'This is a message',
            true,
        );
        await contactPage.locators.contactForm.submit.click();
    });
});



// Additional tests:

/*
Populating wth valid values
Populating all required fields
Submission is successful
Populating with invalid data and checking for errors (for each field)
Checking each required field (i.e. not populating a required field and checking for errors)
Checking max character limit of each field
Checking insecure input such as executing SQL command in the text field
*/

