import{test,expect} from '@playwright/test'

test('Capture screenshot',async({page})=>{
  await page.goto('https://playwright.dev/');

  //Element screenshot
//   await page.locator('.getStarted_Sjon').screenshot({path:'./screenshots/Elementscreenshot.jpg'});

//   //page screenshot
//   await page.screenshot({path:'./screenshots/PageScreenshot.jpg'})

//   //Full page screenshot
//   await page.screenshot({path:'./screenshots/FullPageShot.jpg',fullPage:true})
  
  await expect(page).toHaveTitle('Fast and reliable end-to-end testing for modern web apps | Playwrigh')

})