import {test,expect} from '@playwright/test'
test('handing iframes',async({page})=>{
    await page.goto('https://jqueryui.com/droppable/');
    const iframe=page.frameLocator('.demo-frame');
    const dragElement=iframe.locator('[id="draggable"]');
    const dropElement=iframe.locator('[id="droppable"]')

    await dragElement.dragTo(dropElement);
})