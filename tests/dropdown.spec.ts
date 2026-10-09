import{test,expect,Locator} from '@playwright/test'

test('dropdown test',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator('#country').selectOption('canada')
        await page.locator('#country').selectOption('United Kingdom')
        const availableCountry:string[]= await page.locator('#country option').allInnerTexts();
        const countrywithoutspace=availableCountry.map(text=>text.trim())
        console.log(countrywithoutspace);
        for(let i=0;i<countrywithoutspace.length;i++){
            console.log(countrywithoutspace[i])
        }

       

  
})