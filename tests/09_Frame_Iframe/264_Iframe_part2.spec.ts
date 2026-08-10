import { test, expect, FrameLocator, Locator, Frame } from '@playwright/test';

test('Verify nested frames', async ({ page }) => {

    await page.goto("https://selectorshub.com/iframe-scenario/");
    
    let frame1: FrameLocator = page.frameLocator('#pact1').first();
    let frame2: FrameLocator = frame1.frameLocator('#pact2');
    let frame3: FrameLocator = frame2.frameLocator('#pact3');

    await frame1.locator('#inp_val').fill('Aishwarya Rai');
    await frame2.locator('#jex').fill('ALia');
    await frame3.locator('#glaf').fill('Playwright');

    let headerText= await page.locator('h3').innerText();
    console.log(headerText);
    await page.pause();
    
});