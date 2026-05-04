import { expect, test } from "@playwright/test";

test.describe("homepage visual regression", () => {
  test("de homepage", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveScreenshot("home-de.png", {
      fullPage: true,
    });
  });

  test("en homepage", async ({ page }) => {
    await page.goto("/en/");
    await expect(page).toHaveScreenshot("home-en.png", {
      fullPage: true,
    });
  });
});
