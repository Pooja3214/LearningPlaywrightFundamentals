import {test,expect} from '@playwright/test';

test('Verify the signup page has an error with the incorrect email ID.', async({page})=>{
await page.goto("https://vwo.com/free-trial/");

let email= page.locator("#page-v1-step1-email");
await email.fill("abcd");

await page.locator("#page-free-trial-step1-cu-gdpr-consent-checkbox").click();
await page.locator("//button[@data-qa='page-su-submit']").first().click();

let error_message= await page.locator("//div[contains(@class,'invalid-reason')]").first().textContent();
expect(error_message).toContain("The email address you entered is incorrect.");


});