import { test, expect, FrameLocator, Locator } from '@playwright/test';

test('Drag and Drop', async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/widgets/dnd');

    //await page.getByTestId("card-write-spec").dragTo(page.getByTestId("col-in-progress"));
    

    await page.getByTestId("card-review-pr-21").dragTo(page.getByTestId("col-in-progress"));
    await page.getByTestId("card-review-pr-21").dragTo(page.getByTestId("col-review"));
   


    // Manual mouse path — for finicky DnD libraries
    // let source:Locator= page.getByTestId('card-write-spec');
    // const sBox= (await source.boundingBox())!;

    // let target:Locator= page.getByTestId('card-write-spec');
    // const tBox= (await target.boundingBox())!;

    // await page.mouse.move(sBox.x + sBox.width/2, sBox.y + sBox.height/2);
    // await page.mouse.down();
    // await page.mouse.move(tBox.x + tBox.width/2, tBox.y + tBox.height/2, {steps:10});
    // await page.mouse.up();

    await page.pause();

});
