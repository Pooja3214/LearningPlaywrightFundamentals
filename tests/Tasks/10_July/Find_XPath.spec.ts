import {test,expect} from '@playwright/test';

test('Find Xpath of herokuapp pages', async({page})=>{

    await page.goto("https://katalon-demo-cura.herokuapp.com/");

    let make_appointment= page.locator("#btn-make-appointment");
    await make_appointment.click();

    let userName= page.locator("#txt-username");
    await userName.fill("John Doe");

    let password=page.locator("#txt-password");
    await password.fill("ThisIsNotAPassword");

    let loginButton= page.locator("#btn-login");
    await loginButton.click();

    let facility_dropdown= page.locator("#combo_facility");
    facility_dropdown.selectOption("Hongkong CURA Healthcare Center");
   
    let hospital_readmissionCheckbox=page.locator("#chk_hospotal_readmission");
    await hospital_readmissionCheckbox.isChecked();

    let radioButton= page.locator("#radio_program_medicare");
    await radioButton.isVisible();

    let calendar= page.locator(".glyphicon glyphicon-calendar");
    await calendar.isVisible();

    let commentArea= page.locator("#txt_comment");
    await commentArea.fill("This is for pratice.");

    let bookButton= page.locator("#btn-book-appointment");
    await bookButton.click();

});