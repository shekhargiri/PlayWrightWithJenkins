import{test,expect} from '@playwright/test'

test.describe('SmokeTesting',()=>{

test('read env file',async({page})=>{
    await page.goto(`${process.env.Automation_Practice_Url}`);
    await page.on('dialog',dialog=>{
        console.log(dialog.message())
        dialog.accept();
    })
    await page.getByText('Simple Alert',{exact:true}).click();

})

test('Confirmation alert',async({page})=>{
 await page.goto(`${process.env.Automation_Practice_Url}`);
 await page.on('dialog',dialog=>{
    console.log(dialog.message())
    dialog.accept();
 })

 await page.getByText('Confirmation Alert',{exact:true}).click();

})
    
})

test.describe('Regression Test',()=>{

test('Prompt alert',async({page})=>{
 await page.goto(`${process.env.Automation_Practice_Url}`);
 
await page.on('dialog',async(dialog)=>{
    console.log(dialog.message())
    await dialog.accept('Shekhar')
    
    
})
 await page.getByText('Prompt Alert',{exact:true}).click();
 console.log(await page.locator('#demo').innerText())
})
})