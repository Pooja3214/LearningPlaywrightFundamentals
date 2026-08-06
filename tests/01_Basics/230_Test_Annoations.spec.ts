import {test, expect} from '@playwright/test';

test('has title',async ({page})=>{
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
});

//Skipped test
test.skip('skipped test', async ({page})=>{
    //This test is skipped
});

//Only test to run
test.only('focused test', async({page})=>{
    //// Only this test runs
});

//Marking the test to fail
test.fail('expected to fail', async({page})=>{
    //This test is expected to fail
});

//slow test , 3x time
test('slow test', async ({page}) => {
    // Has extended timeout
    test.slow();
    
});

//conditional skip
test('conditional', async({page, browserName})=>{
    test.skip(browserName==='firefox', 'Not supported in firefox browser')
});


