import{test,expect} from '@playwright/test'

test('Matching element in playwright',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    const tableheaders=await page.locator('[name="BookTable"] tbody tr td').allTextContents();
    console.log(tableheaders);
    for(const tableheader of tableheaders){
        console.log(tableheader)
    }
    
    for(let i=0;i<tableheaders.length;i++){
        console.log("table headers are: ",tableheaders[i]);
    }

})