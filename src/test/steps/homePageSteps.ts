import { Given } from "@cucumber/cucumber"
import { HomePage } from "../../pages/homePage";
import { Browser, chromium, expect, Page} from "@playwright/test";

let browser: Browser;
let page: Page;

// Given('User is navigated to home page', { timeout: 10000},  async function () {
//     browser = await chromium.launch({ headless: false });
//     page = await browser.newPage();
//     await page.goto("https://allo.ua/");
//     await expect(page).toHaveURL("https://allo.ua/");
// });

Given('Cart item is present on home page', async function () {
    let cart = page.locator("//div[@class='mh-cart']/button");
    await expect(cart).toBeVisible();
    await browser.close();
  });

  Given('Account button is present on home page', async function () {
    let accountBtn = await page.locator("//div[@class='mh-profile']//button");
    await expect(accountBtn).toBeVisible();
    await browser.close();
  });