import{test,expect} from '@playwright/test'
import testData from '../test-data/qa/tesdata.json';
type TestData={
    TestDataSet1:{ 
    Username1:string,
    Username2:string

}
}

const typedTestData=testData as TestData;
for(const data in typedTestData){
    const username=typedTestData[data as keyof TestData]
    

test(`Data driven testing using json: ${username.Username1} `,async({page})=>{
    await page.goto('https://www.saucedemo.com/');
    await page.getByLabel('Username').fill(username.Username1)
    await page.getByRole('textbox',{name:'password'}).fill("secret_sauce");
    await page.locator('#login-button').click()

})
}