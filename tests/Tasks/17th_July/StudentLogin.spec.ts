import {test,expect} from '@playwright/test';

test("AUtomate student login and verify the URL change", async({page})=>{

await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
await page.getByRole('textbox',{name:'email'}).fill("Abc@avbn.com");
await page.getByRole('textbox',{name: 'password'}).fill("hghhjh");
await page.getByRole('checkbox').click();
await page.getByTestId('login-button').click();

await expect(page).toHaveURL(/email=Abc%40avbn.com&password=hghhjh&remember=yes#login-success/);


});