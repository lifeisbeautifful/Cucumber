import { When, Given, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { pageFixture } from "../../hooks/pageFixture";

setDefaultTimeout(60 * 1000 * 2);


Given('User is navigated to home page', { timeout: 10000},  async function () {
    await pageFixture.page.goto(process.env.BASEURL);
    await expect(pageFixture.page).toHaveURL("https://allo.ua/");
    pageFixture.logger.info("Navigation to home page");
});

When('Items catalog is opened', async function () {
    let catalogBtn = await pageFixture.page.locator("//div[@class='ct-button']");
    await catalogBtn.click();
  });

  When('{string}, {string} are selected', {timeout: 50000}, async function (item, subItem) {
    let catalog = await pageFixture.page.locator("#js-menu-wrapper");
    let categoryItem = await catalog.getByText(item, {exact:true});
    await categoryItem.hover();
    pageFixture.logger.info("select " + item + " item");
    await this.catalog.getByRole("link", {name:`${subItem }`, exact:true}).click();
    pageFixture.logger.info("select " + subItem + " subitem");
  });

Then('User is navigated to {string}', async function (url) {
    await expect(pageFixture.page).toHaveURL(url);
  });
