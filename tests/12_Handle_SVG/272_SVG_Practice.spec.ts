import { test, expect, Locator } from '@playwright/test';

const URL = 'https://app.thetestingacademy.com/playwright/widgets/svg'; // replace with target page

test.describe('SVG handling', () => {

    test.beforeEach(async({page})=>{
        await page.goto(URL);
    })

 test('locate SVG root and assert visible', async ({ page }) => {

    const circleShape: Locator= page.locator("#circle-blue");
    await circleShape.click();

    const output= await page.locator("#shapes-output").innerText();
    expect(output).toContain('Blue circle');

    const bar = await page.getByRole('button',{name: /Q4 bar/}).click();
    const radio= await page.getByRole('radio', {name:'5 stars'}).click();

    let allBars= await page.locator('.bar').all();
    for(const bar of allBars){
        // logic which is the hegiht, low ......click on that.

        const q= await bar.getAttribute("data-quarter");
        const v= await bar.getAttribute("data-value");

        console.log(q);
        console.log(v);
    }

    await page.pause();
 })

})