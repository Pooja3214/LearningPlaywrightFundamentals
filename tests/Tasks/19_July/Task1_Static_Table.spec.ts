import {test, expect} from '@playwright/test';

test("Static table find country name",async({page})=>{

    await page.goto("https://app.thetestingacademy.com/playwright/tables/webtable");

    let name:string = "Yoshi Tannamuri";
    const row=  page.locator('#companies-table tr td[data-col="contact"]').filter({hasText:name});

    const country=  await row.locator('~td[data-col="country"]').innerText();

    console.log(`${name} is in ${country}`);

    await page.waitForTimeout(5000);
    
});