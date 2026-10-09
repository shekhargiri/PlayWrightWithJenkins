import { test, expect } from "@playwright/test";
test.describe("Regresssion Testing", () => {
  test("mouse actions", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.getByText("Point Me").hover();
    await page.getByRole("button", { name: "Copy Text" }).dblclick();
  });
});
