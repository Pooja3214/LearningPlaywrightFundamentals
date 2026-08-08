import { chromium } from "playwright";

async function saveAdminSession() {



}

async function saveSession() {
    let browser = await chromium.launch({ headless: false });
    let context = await browser.newContext();
    let page = await context.newPage();

    await page.goto("https://katalon-demo-cura.herokuapp.com/profile.php#login");
    await page.waitForTimeout(2000);

    await page.fill("#txt-username", "pooja.silco@gmail.com");
    await page.fill("#txt-password", "simple@4321");
    await page.waitForTimeout(1500);

    await page.click("#btn-login");

    await page.waitForURL("https://katalon-demo-cura.herokuapp.com/#appointment", { timeout: 15000 });
    await page.waitForTimeout(3000);

    await context.storageState({ path: "./user-session.json" });
    console.log("Session saved to user-session.json ✅");

    await page.waitForTimeout(2000);
    await browser.close();

}

saveSession();
saveAdminSession();