import { test, expect } from "@playwright/test";
import loginData from "./test-data/login.json";

test.describe('Login-data driven', ()=>{

    test.beforeEach(async({page})=>{

         await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
    });

    test('Login with valid credentials', async({page})=>{
        await page.locator("#email").fill(loginData.validUser.email);
        await page.locator("#password").fill(loginData.validUser.password);
        await page.getByTestId("login-button").click();

    });

    test('Login with invalid Credential', async({page})=>{
    await page.locator("#email").fill(loginData.invalidUser.email);
    await page.locator("#password").fill(loginData.invalidUser.password);
    await page.getByTestId("login-button").click();


    });
});