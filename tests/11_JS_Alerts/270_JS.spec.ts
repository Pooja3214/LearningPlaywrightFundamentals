import { test, expect } from '@playwright/test';

test.describe('JS alerts', ()=>{

    test.beforeEach(async({page})=>{
        await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    })

test('JS alert1', async({page})=>{

    // Register the dialog handler BEFORE triggering the alert

page.once('dialog', async dialog =>{
console.log("Alert type: "+ dialog.type());
console.log("Dialog message: "+ dialog.message());
expect(dialog.message()).toBe("I am a JS Alert");
await dialog.accept();

})

await page.getByRole('button', {name: 'Click for JS Alert'}).click();
        // await page.getByText('Click for JS Alert').click();
        // await page.locator('//button[text()="Click for JS Alert"]').click();
        // await page.locator('button', { hasText: 'Click for JS Alert' }).click();

await expect(page.locator("#result")).toHaveText("You successfully clicked an alert");
});

test('JS alert with confirm', async({page})=>{
//Register every time

page.once('dialog', async dialog =>{
console.log("Alert type: "+ dialog.type());
console.log("Dialog message: "+ dialog.message());
expect(dialog.message()).toBe("I am a JS Confirm");
await dialog.accept();
//await dialog.dismiss();

})

await page.getByRole('button', {name:'Click for JS Confirm'}).click();
await expect(page.locator("#result")).toHaveText("You clicked: Ok");

});

test('JS alert with prompt', async({page})=>{

    const inputText= 'Hello, this is testing of alert with prompt';
    page.once('dialog', async dialog =>{

        console.log("Alert type: "+ dialog.type());
        console.log("Alert message: "+dialog.message());
        expect(dialog.defaultValue()).toBe('');
        await dialog.accept(inputText);
        
        
    })
    await page.locator('button', { hasText: 'Click for JS Prompt' }).click();
        await expect(page.locator('#result')).toHaveText(`You entered: ${inputText}`);
});

});