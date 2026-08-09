import { test, expect } from '@playwright/test';


test('Verify Element by Filter', async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
    const forgottenPasswordLink = await page.locator("a.list-group-item").filter({hasText:'Forgotten Password'});

    // hasText='/^Forgotten/'

    await forgottenPasswordLink.click();


    // Order" vs "Order History
    //  /^Order/

    const accountLinks = await page.locator("a.list-group-item");
    await expect(accountLinks).toHaveCount(13);

    const privacyLink = await page.locator('footer a').filter({hasText:"Privacy Policy"});
    await expect(privacyLink).toHaveAttribute('href','#privacy-policy');





});