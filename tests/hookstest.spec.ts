import { expect, Locator } from "@playwright/test";
import { test } from "../TestFixture";
// import { Page } from "@playwright/test";
// import { LoginPage } from "../pages/LoginPage";
// import { CartPage } from "../pages/CartPage";
test.beforeAll(async()=>{
    console.log(`Running before all tests`)

});
test.beforeEach(async({page})=>{
    console.log(`Running before each tests`)
    

});

test.afterEach(async()=>{
    console.log(`Running after each tests`)
})
test.afterAll(async()=>{
    console.log(`Running after all tests`)
})
test("sauce demo login test with page object",{tag:['@SmokeTest']}, async ({ page,loginPage }) => {
    console.log(`Test 1 execution started`)
    //const loginPage=new LoginPage(page);
    loginPage.goToUrl();
    loginPage.loginToSauceDemo();
  await expect(page).toHaveTitle("Swag Labs");
  const prodCountLocator: Locator = page.locator(".inventory_item_label");
  const prodCount = await prodCountLocator.count();
  console.log(`Product counts: ${prodCount}`);
});

test("add first product",{tag:['@SmokeTest']}, async ({ page,loginPage,cartPage }) => {
    console.log(`Test 2 execution started`)
    //const loginPage=new LoginPage(page)
    //const cartPage=new CartPage(page)
    loginPage.goToUrl();
    loginPage.loginToSauceDemo()
    cartPage.clickCart()
    cartPage.cartLink.click();
  await expect(page.locator('.title')).toHaveText('Your Cart');

});
