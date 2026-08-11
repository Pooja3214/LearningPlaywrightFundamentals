import { test, expect } from "@playwright/test";

const SimpleMaps = "https://simplemaps.com/svg/country/in";

test.describe("Map Selection", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(SimpleMaps);
    });

    test("Generate the list of all states", async ({ page }) => {

        const states = await page
            .locator(
                "//div[@id='admin1_map_inner']//*[name()='svg']//*[name()='path' and contains(@class,'sm_state')]",
            )
            .all();

        for(const state of states){
            const classState= await state.getAttribute("class");

            console.log(classState);
            if(classState?.includes("INRJ")){

                await state.click();
                
            }
        }
    })


})