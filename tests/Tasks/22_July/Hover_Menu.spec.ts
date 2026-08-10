import { test, expect, FrameLocator, Locator } from '@playwright/test';

test('Hover on add on menus, print all options and click on wifi', async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/widgets/hover-menu");

    await page.getByTestId("nav-add-ons").first().hover();
    
    const addALlOptions:string[]= await page.locator("div[aria-label='Add-ons submenu'] a").allInnerTexts();
    console.log("All Add on options: " +addALlOptions);

    await page.getByTestId('test-id-Wifi').click();
    


});