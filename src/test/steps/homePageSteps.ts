import { Given, setDefaultTimeout } from "@cucumber/cucumber"
import { pageFixture } from "../../hooks/pageFixture";
import { HomePage } from "../../pages/homePage";
import { expect } from "@playwright/test";

setDefaultTimeout(60 * 1000 * 2);

Given('Cart item is present on home page', async function () {
    let cart = pageFixture.page.locator("//div[@class='mh-cart']/button");
    await expect(cart).toBeVisible();
  });

  Given('Account button is present on home page', async function () {
    let accountBtn = await pageFixture.page.locator("//div[@class='mh-profile']//button");
    await expect(accountBtn).toBeVisible();
  });