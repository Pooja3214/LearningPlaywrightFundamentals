import {test,expect} from '@playwright/test';

test('Custom dropdown select option',async({page})=>{

    await page.goto("https://app.thetestingacademy.com/playwright/tables/dropdowns");

    //select option from language dropdown
    await page.locator("#lang-shell").click();
    await page.getByRole('option', {name:'TypeScript'}).click();

    //selection option from experience dropdown
    await page.getByTestId('dropdown-experience').click();
    await page.getByText('Mid-level (4-6 years)', {exact:true}).click();

// await page.pause();

});