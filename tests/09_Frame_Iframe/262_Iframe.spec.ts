import {test, expect, FrameLocator} from '@playwright/test';

test("Verify elements in iframe",async({page})=>{

    await page.goto("https://app.thetestingacademy.com/playwright/frames/");
    
    let vehicleFrame:FrameLocator= page.frameLocator('#frame-one');
    await vehicleFrame.locator("#RESULT_TextField-1").fill("Hyundai i10");
    await vehicleFrame.locator("#RESULT_TextField-2").fill("Pooja Sharma");
    await vehicleFrame.locator("#RESULT_TextField-3").fill("MH-12-AB-1234");

    await vehicleFrame.locator("#RESULT_RadioButton-1").selectOption('Hatchback');
    await vehicleFrame.locator("#RESULT_TextField-4").fill("2026");
    await vehicleFrame.locator("#RESULT_TextArea-1").fill("This if for testing iframe in playwright");
    await vehicleFrame.getByTestId("vehicle-submit").first().click();
    // await vechileFrame.getByText('Submit registration', { exact: true }).click();


    let output= await vehicleFrame.locator("#vehicle-output").innerText();
    console.log(output);

    await page.pause();
    

});