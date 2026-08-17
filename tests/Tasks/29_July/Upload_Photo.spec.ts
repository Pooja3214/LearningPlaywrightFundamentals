import {test,expect} from '@playwright/test';
import path from 'path';

test.describe('File upload', ()=>{

    test.beforeEach(async ({page})=>{

        await page.goto("https://app.thetestingacademy.com/student/settings");
        await page.waitForTimeout(5000);
    })

    test('Upload photo image in profile', async({page})=>{
      
        await page.locator("//input[@placeholder='Enter your email address']").fill('')
        const filepath= path.resolve("tests/Tasks/29_July/Upload_Photo.spec.ts");
        await page.setInputFiles("#avatar-upload", filepath);
        await page.click("//label/span");
    })
})