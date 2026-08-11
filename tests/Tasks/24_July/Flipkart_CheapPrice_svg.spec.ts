// Print the titles of all the results.
// Find the cheapest price mac mini and print it. (on first page)

import { test, expect, Locator } from '@playwright/test';

const URL = 'https://www.flipkart.com/search';

test.describe('Find cheapest price macmini in flipkart', ()=>{

    test.beforeEach(async({page})=>{
        await page.goto(URL);
    })

    test('Find price and titles of all',async({page})=>{
       
        await page.locator('input[name="q"]').fill("macmini");
       
        const svgElements: Locator = page.locator('svg');
        await svgElements.first().click();

        const allTitles:Locator= page.locator("//div[contains(@data-id,'CPU') or contains(@data-id,'ACC') or contains(@data-id,'COM') or contains(@data-id,'MP')]/div/a[2][contains(@href,'/p/') and @title]");
        const allPrice:Locator= page.locator("//div[contains(@data-id,'CPU') or contains(@data-id,'ACC') or contains(@data-id,'COM') or contains(@data-id,'MP')]/div/a[3]");
    
        //print all product titles
        // const productTitles:string[] = await allTitles.allTextContents();
        // console.log(productTitles);

         const counts = await allTitles.count();

        // for (let i = 0; i < productTitles.length; i++) {
        //     console.log(productTitles[i]);
        // }
        console.log("Count:", await allTitles.count());

// console.log("Total products:", count);

for (let i = 0; i < counts; i++) {
    const title = await allTitles.nth(i).tex;
    console.log(title);
}  
    
    })

});