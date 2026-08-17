import {test,expect} from '@playwright/test';
import path from 'path';

test.describe('File Download', ()=>{

    test.beforeEach(async ({page})=>{

        await page.goto("https://qajobfit.com/dashboard?tab=builder");
        await page.waitForTimeout(5000);
    })

    test('Upload photo image in profile', async({page})=>{
      
        const filepath= path.resolve("tests/Tasks/29_July/Upload_Photo.spec.ts");
        await page.setInputFiles("#avatar-upload", filepath);
        await page.click("//label/span");
    })
})