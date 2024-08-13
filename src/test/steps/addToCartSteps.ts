import { When, Given, Then } from "@cucumber/cucumber";
import { Browser, chromium, expect, Page} from "@playwright/test";

let page: Page;
let browser: Browser;

Given('User is navigated to home page', { timeout: 10000},  async function () {
    browser = await chromium.launch({ headless: false });
    page = await browser.newPage();
    await page.goto("https://allo.ua/");
    await expect(page).toHaveURL("https://allo.ua/");
});

When('Items catalog is opened', async function () {
    let catalogBtn = await page.locator("//div[@class='ct-button']");
    await catalogBtn.click();
  });

  When('{string}, {string} are selected', {timeout: 50000}, async function (item, subItem) {
    let catalog = await page.locator("#js-menu-wrapper");
    let categoryItem = await catalog.getByText(item, {exact:true});
    await categoryItem.hover();
    await this.catalog.getByRole("link", {name:`${subItem }`, exact:true}).click();
    await browser.close();
  });

Then('User is navigated to {string}', async function (url) {
    await expect(page).toHaveURL(url);
    await browser.close();
  });
