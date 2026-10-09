import { Locator, Page } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly username: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.username = page.getByLabel("Username");
    this.password = page.getByPlaceholder("Password");
    this.loginButton = page.locator("#login-button");
  }

  async goToUrl(){
    await this.page.goto(`${process.env.Automation_Practice_Url}`);
  }

  async loginToSauceDemo(){
    await this.username.fill('standard_user');
    await this.password.fill('secret_sauce');
    await this.loginButton.click();
  }
}
