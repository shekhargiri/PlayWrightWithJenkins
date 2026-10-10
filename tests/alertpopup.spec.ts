import{test,expect} from '@playwright/test'

test.describe('SmokeTesting',()=>{

test('Popup and alert validaiton',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.on('dialog',dialog=>{
        console.log(dialog.message())
        dialog.accept();
    })
    await page.getByText('Simple Alert',{exact:true}).click();

})

test('Confirmation alert',async({page})=>{
 await page.goto('https://testautomationpractice.blogspot.com/');
 await page.on('dialog',dialog=>{
    console.log(dialog.message())
    dialog.accept();
 })

 await page.getByText('Confirmation Alert',{exact:true}).click();

})
    
})

test.describe('Regression Test',()=>{

test('Prompt alert',async({page})=>{
 await page.goto('https://testautomationpractice.blogspot.com/');
 
await page.on('dialog',async(dialog)=>{
    console.log(dialog.message())
    await dialog.accept('Shekhar')
    
    
})
 await page.getByText('Prompt Alert',{exact:true}).click();
 console.log(await page.locator('#demo').innerText())
})
})