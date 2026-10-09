import{test,expect} from '@playwright/test'

test('validate date picker',{tag:['@smoketest']},async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    //await page.locator('#datepicker').fill('11/20/1986')

    //dynamic date
    await page.locator('#datepicker').click();
    await page.locator('.ui-datepicker-today').click();


    //select past date


})