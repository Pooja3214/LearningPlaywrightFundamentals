import {test, expect} from '@playwright/test';

test("Dynamic table find country name",async({page})=>{

     await page.goto("https://app.thetestingacademy.com/playwright/tables/webtable");

     let name="Mia Hoffmann";
     let row;

     while(true){
         row= page.locator('#employees-tbody tr td[data-col="name"]').filter({hasText:name});

         if(await row.count()){
            break;
         }

         const next=  page.getByTestId('next-page');

         if(await next.isDisabled()) throw new Error("Row not found");

         await next.click();

     }

     const email= await row.locator('~ td[data-col="email"]').innerText();

     console.log(`${name} has email: ${email}`);
     
});