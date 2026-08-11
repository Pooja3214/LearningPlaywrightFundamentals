// Print the titles of all the results.
// Find the cheapest price mac mini and print it. (on first page)

import { test, expect, Locator } from '@playwright/test';

const URL = 'https://www.flipkart.com/search';

test.describe('Find cheapest price macmini in flipkart', ()=>{

    test.beforeEach(async({page})=>{
        await page.goto(URL);
    })

    test('Find price and titles of all',async({page})=>{
       
        //Search macmini 
        await page.locator('input[name="q"]').fill("macmini");
       
        //click on search svg element
        const svgElements: Locator = page.locator('svg');
        await svgElements.first().click();

        //wait for page to load
        await page.waitForTimeout(5000);

        // get all the product titles
        const allTitles= await page.locator
        ("//div[contains(@data-tkid,'CPU') or contains(@data-tkid,'ACC') or contains(@data-tkid,'COM') or contains(@data-id,'MP')]//a[@title]"

        ).all();


        // Print all product titles
        for(let product of allTitles){
            const productTitles= await product.getAttribute("title");
            console.log(productTitles);
            
        }

        //Get all product price
        const allPrice= await page.locator(
            "//div[contains(@data-id,'CPU') or contains(@data-id,'ACC') or contains(@data-id,'COM') or contains(@data-id,'MP')]/div/a[3]"
        ).allTextContents();
    
       let minPrice= Infinity;


       //Print min price
       for(let i=0;i<allPrice.length;i++){
        const currentPrice= Number(allPrice[i].replace(/[₹,]/g,""));

        if(currentPrice<minPrice){
            minPrice= currentPrice;
        }


       }

         console.log("Minimum Price:" + minPrice);
         
    
    })

});