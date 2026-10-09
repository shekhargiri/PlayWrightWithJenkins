import{test,expect} from '@playwright/test'

const usernames=["standard_user","visual_user"]

for(const username of usernames){
test(`Login test with username ${username}`, async({page})=>{
    await page.goto('https://www.saucedemo.com/')
    await page.getByLabel('Username').fill(username);
    await page.locator('#password').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await expect(page.locator('.app_logo')).toHaveText('Swag Labs')
})
}