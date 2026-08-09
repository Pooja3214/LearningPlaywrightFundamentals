import { test, expect } from '@playwright/test';

test('Verify Element in webtable in 3 page by pagination', async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/tables/webtable");

     //  Finding one person's email and country

     let name: string = "Valentina Cruz";
     let row;

     while(true){
        row= page.locator("#employees-tbody tr").filter({hasText:name});

        if(await row.count()){
            break;
        }

        const next= page.getByTestId('next-page');
        if(await next.isDisabled()) throw new Error("Row not found");
        
        await next.click();
     }

      const email = await row.locator('td[data-col="email"]').innerText();
    const country = await row.locator('td[data-col="country"]').innerText();


    console.log(email, country);
    await page.waitForTimeout(5000);
     
});
