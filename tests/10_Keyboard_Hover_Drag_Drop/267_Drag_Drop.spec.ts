import { test, expect, FrameLocator, Locator } from '@playwright/test';

test('Drag and Drop', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/drag_and_drop');
    let colA=  page.locator("#column-a");
    let colB=  page.locator("#column-b");

    colA.dragTo(colB);

});