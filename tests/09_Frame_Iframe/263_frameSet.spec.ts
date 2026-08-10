import { test, expect, FrameLocator, Locator } from '@playwright/test';

test('Verify multiple frames', async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/frames/multi-frames");

    let mainFrame:FrameLocator= page.frameLocator("[name='main']");
    const headerText=await mainFrame.locator('h2').innerText();
    console.log(headerText);

    //get all frames
    const allFrames: Locator[] = await page.locator('//frame').all();
    console.log("Total number of frames: "+allFrames.length);

    //print all attributes of frames

    for(const frame of allFrames){
        console.log(await frame.getAttribute('name'), ':', await frame.getAttribute('src'));
        
    }

    //side frame
    let sideFrame:FrameLocator= page.frameLocator("[name='side']");
    await sideFrame.getByTestId('side-link-registration').click();
    await page.pause();

    //footer frame

    let footerFrame:FrameLocator= page.frameLocator("[name='footer']");
    let text= await footerFrame.locator('strong').innerText();

    console.log("Footer text: "+text);
    

    
});