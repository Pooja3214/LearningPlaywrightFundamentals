import { test, expect, Locator } from '@playwright/test';

const URL = 'https://app.thetestingacademy.com/playwright/widgets/shadow-dom'; // replace with target page

test.describe('Shadow handling', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto(URL);
    });

    test('locate Shadow DOM and assert visible', async ({ page }) => {

        //1- tta-input-card

        const card= page.getByTestId("card-account-card");
        await card.locator("input[name='email']").first().fill('student@thetestingacademy.com');
        await card.locator("input[name='password']").first().fill('pw');
        await card.getByTestId("card-account-submit").click();
        expect(card.getByTestId("card-account-status")).toContainText("student@thetestingacademy.com");

        //2- tta-counter
        const cart= page.getByTestId("counter-cart");
        await cart.getByRole('button', {name:'Increment'}).click();
        await cart.getByRole('button', { name: 'Increment' }).click();
        await expect(cart.getByTestId('counter-value')).toHaveText('5');

        //3nested
         page.getByTestId('nested-host');
        await page.getByTestId('card-inside-email').fill('pooja@thetestingacdemy.com');
        await page.getByTestId('card-inside-password').fill('pooja@123');
        await page.getByTestId('card-inside-submit').click();
        


    })

})