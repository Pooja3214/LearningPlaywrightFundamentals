import {chromium} from "playwright";

async function multiTabTest(){

    let browser = await chromium.launch();
    let context = await browser.newContext();

    //Tab1
    let page1= await context.newPage();
    await page1.goto("https://www.vwo.com/#login");
    console.log("Tab1: Dashboard");
    

    //Tab2
    let page2= await context.newPage();
    await page2.goto("https://www.vwo.com/#dashboard");
    console.log("Tab2: Setting");
    

    //Cleanup
    await context.close();
    await browser.close();
}

multiTabTest();