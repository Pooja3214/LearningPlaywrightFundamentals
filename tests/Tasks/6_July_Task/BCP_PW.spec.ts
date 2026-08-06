// Browser 
// Context - 1 - https://app.thetestingacademy.com/playwright/ttacart/
//  Context - 2 → https://tta-bank-digital-973242068062.us-west1.run.app/

import {test,expect} from '@playwright/test';

test('Two contexts in browser',async({browser})=>{

    const context1= await browser.newContext();
    const page= await context1.newPage();
    await page.goto('https://app.thetestingacademy.com/playwright/ttacart/');
    console.log("TTA Cart- Login page");
    

    const context2= await browser.newContext();
    let page2=await context2.newPage();
    await page2.goto('https://tta-bank-digital-973242068062.us-west1.run.app/');
    console.log("DASHBOARD Page");
    
    await context1.close();
    await context2.close();
})