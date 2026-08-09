import {test,expect} from '@playwright/test';

test('Web Table find terminated element', async({page})=>{

    await page.goto("https://awesomeqa.com/hr/web/index.php/auth/login");

    await page.getByRole('textbox', {name:'username'}).fill("admin");
    await page.getByRole('textbox', {name:'password'}).fill("Awesomeqa@4321");

    await page.locator("button[type='submit']").click();

    ////div[@class='oxd-table-card'][//div[@role='row']][25]//div[@role='cell'][6]

    // 25-i
    // //div[@role='cell'][
    // 6-j
    //]

    let firstPart="//div[@class='oxd-table-card'][//div[@role='row']][";
    let secondPart="]//div[@role='cell'][";
    let thirdPart="]";

    const rows= await page.locator("//div[@class='oxd-table-card'][//div[@role='row']]").count();
    console.log(rows);
    
    // const cols=await page.locator("//div[@class='oxd-table-card'][//div[@role='row']][25]//div[@role='cell']").count();

    // for (let i = 1; i <= rows; i++) {
    //     for (let j = 1; j <= cols; j++) {
    //         const dynamicPath = `${firstPart}${i}${secondPart}${j}${thirdPart}`;
    //         console.log(dynamicPath);

    //         const data = await page.locator(dynamicPath).innerText();
    //         console.log(data);

    //         if (data.includes('Terminated')) {
    //             const deleteS = `${dynamicPath}/following-sibling::div[3]/div/button[1]`;
    //             //await page.waitForTimeout(30000);
    //             const deleteButton = await page.locator(deleteS).click();
    //             await page.waitForTimeout(30000);

         
    //         }
    //     }

    // }
});

