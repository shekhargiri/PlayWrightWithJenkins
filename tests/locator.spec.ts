import { test, expect, Locator } from "@playwright/test";
test.describe("Smoke Test", () => {
  test("locators practice", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.getByRole("textbox", { name: "Enter Name" }).fill("123");
    await page.getByPlaceholder("Enter EMail").fill("test@email.com");
    await page.locator('.form-control[id="phone"]').fill("1234567890");
  });
});
