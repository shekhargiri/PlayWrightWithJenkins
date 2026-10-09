import{test,expect} from '@playwright/test'
test('checkbox and radion button',async({page})=>{
    await page.goto('https://jqueryui.com/checkboxradio/');
    const framelocator= page.frameLocator('.demo-frame');
    await expect(framelocator.getByText('New York')).not.toBeChecked()
    await framelocator.getByText('New York').check();
    await expect(framelocator.getByText('New York')).toBeChecked()


})