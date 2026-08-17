import { test, expect } from '@playwright/test';

test('Visible · enabled · disabled · checked', async ({ page }) => {

await page.goto("https://app.thetestingacademy.com/playwright/tables/practice#page");
const automationCheckbox=page.getByRole('checkbox', {name: /UFT/});
await automationCheckbox.check();
await expect(automationCheckbox).not.toBeChecked();

const submitBtn= page.getByTestId('profile-submit');
await expect(submitBtn).toBeVisible();
await expect(submitBtn).toBeEnabled();

await expect(page).toHaveTitle(/QA Profile/);

const appUrl= page.url();
expect(appUrl).toContain('thetestingacademy');

await page.pause();

});