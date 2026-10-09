import{test as base} from '@playwright/test'
import { LoginPage } from './pages/LoginPage'
import { CartPage } from './pages/CartPage'

export const test=base.extend<{
    
    loginPage:LoginPage;
    cartPage:CartPage;
}>({
   loginPage:async({page},use)=>{
    const loginPage=new LoginPage(page);
    await use(loginPage)
   },
   cartPage:async({page},use)=>{
    const cartPage=new CartPage(page);
    await use(cartPage);
   }



});