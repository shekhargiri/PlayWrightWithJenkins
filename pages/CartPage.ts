import { Locator, Page } from 'playwright'

export class CartPage{
    readonly page:Page
    readonly cart:Locator
    readonly cartLink:Locator

    constructor(page:Page){
        this.page=page
       this.cart=  page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]');
      this.cartLink= page.locator('.shopping_cart_link');

    }

    async clickCart(){
        this.cart.click();
    }
} 