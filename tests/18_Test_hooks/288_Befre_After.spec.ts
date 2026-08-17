import { test, expect } from '@playwright/test';

test.beforeEach(async()=>{
    // run once per worker — e.g. seed test data, spin a docker container
    console.log('beforeAll — server is up');
})

test('practice index has 25 cards', async ({ page }) => {
    await expect(page.locator('.index-card')).toHaveCount(29);
});

test('sidebar collapse button works', async ({ page }) => {
    await page.getByLabel('Toggle sidebar').first().click();
    await expect(page.locator('.tta-shell')).toHaveAttribute('data-sidebar-collapsed', 'true');
});

test.afterEach(async({page}, testinfo)=>{
    if(testinfo.status !== testinfo.expectedStatus){
       await page.screenshot({path: `out/fail-${testinfo.title}.png`, fullPage:true});
    }

});

test.afterAll(async()=>{
     console.log('afterAll — tear down');
});