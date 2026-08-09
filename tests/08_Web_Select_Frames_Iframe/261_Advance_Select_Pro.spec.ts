import { test, expect } from '@playwright/test';

test('Basic Web Test - Verify Page Title', async ({ page }) => {

    //single-searchable
    await page.goto("https://app.thetestingacademy.com/playwright/tables/select-boxes");
    await page.getByTestId('rs-single').click();
    await page.getByText('Cypress').click();
    // await page.pause();

    //② Multi — chips with remove
    await page.locator('#rs-multi').click();
    await page.getByText('Pytest', {exact:true}).click();
    await page.getByText('JUnit', {exact:true}).click();
    await page.keyboard.press('Escape');
    // await page.pause();

    //③ Creatable multi — type and Enter
    await page.locator('#rs-creatable').click();
    await page.getByText('api-testing',{exact:true}).click();
    await page.getByText('security',{exact:true}).click();
    await page.keyboard.press('Escape');
    // await page.pause();

    //④ Grouped — categorised options
    await page.locator("#rs-grouped").click();
    await page.getByText('Cloudflare Workers').click();
    // await page.pause();

    //⑤ Async — fetched on type
    await page.locator("#rs-async").click();
    await page.getByTestId('rs-async-input').fill('del');
    await expect(page.getByTestId('rs-async-menu')).toContainText('Delhi');
    await page.getByRole('option', {name:'Delhi'}).click();
    await page.pause();

});