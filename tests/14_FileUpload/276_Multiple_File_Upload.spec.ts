import { test, expect, Locator } from '@playwright/test';
import path from 'path';
import { text } from 'stream/consumers';

const URL = 'https://www.patternfly.org/components/file-upload/multiple-file-upload/'; // replace with target page

test.describe('FileUpload handling', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto(URL);
    });

    test('locate FileUpload and upload', async ({ page }) => {

         await page.locator("div.pf-v6-c-multiple-file-upload input").setInputFiles(
            [{
                name: 'file2.jpg',
                mimeType: 'image/jpeg',
                buffer: Buffer.from('image from thetestingacademy code')
            },
            {
                name: 'file3.png',
                mimeType: 'image/png',
                buffer: Buffer.from('this is test')
            }]);
 await page.waitForTimeout(15000);

  await page.click(".pf-v6-c-button pf-m-secondary");



        await page.waitForTimeout(2000
            
        );

    })

    });