import {test, expect} from '@playwright/test';

test("SSelect option from dynamic dropdown",async({page})=>{

await page.goto("https://www.spicejet.com/");
await page.getByTestId('to-testID-origin').click();
await page.getByRole('textbox').first().fill('de');
await page.getByText("Delhi").first().click();

await page.getByTestId('to-testID-destination').getByRole('textbox').
first().fill('ban');
await page.getByText("Bengaluru").first().click();

await page.pause();
});