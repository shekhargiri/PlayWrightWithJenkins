import{test,expect} from '@playwright/test'

test('validate date picker',{tag:['@smoketest']},async({page, browser})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
    //await page.locator('#datepicker').fill('11/20/1986')

    //dynamic date
    await page.locator('#datepicker').click();
    await page.locator('.ui-datepicker-today').click();


   const context2=await browser.newContext();
   const page2=await context2.newPage();
   await page2.goto('https://testautomationpractice.blogspot.com/')
    //dynamic date
    await page2.locator('#datepicker').click();
    await page2.locator('.ui-datepicker-today').click();

    const newtab = await context2.newPage()
    await newtab.goto('https://testautomationpractice.blogspot.com/');
    //await page.locator('#datepicker').fill('11/20/1986')

    //dynamic date
    await newtab.locator('#datepicker').click();
    await newtab.locator('.ui-datepicker-today').click();

})