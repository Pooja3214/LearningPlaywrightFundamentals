import {test,expect} from '@playwright/test';

test("Basic verify how to handle multiple elements", async({page})=>{
await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");



   // Navigate to the page.
    // Find the locator which gives all the elements and text
    // loop through it and find the one which we want to click

    
const rightPanelLinkTexts:string[]= await page.locator("a.list-group-item").allInnerTexts();

console.log(rightPanelLinkTexts.length);

for(const link of rightPanelLinkTexts){
    console.log(link);
    
}

for(let i=0;i<rightPanelLinkTexts.length;i++){
    console.log(rightPanelLinkTexts[i]);
    
}
 
for(const linkText of rightPanelLinkTexts ){
    if(linkText==="Address Book"){
        console.log(await page.getByText(linkText).first().click());
        
    }
}

 const rightPanelLinks = await page.locator('a.list-group-item').all();
 for(const link of rightPanelLinks){
    console.log(await link.getAttribute("href"));
    
 }



});