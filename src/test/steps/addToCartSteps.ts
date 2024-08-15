import { When, Given, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { pageFixture } from "../../hooks/pageFixture";
import { homePage, asserts } from "./homePageSteps";

setDefaultTimeout(60 * 1000 * 2);


When('Items catalog is opened', async function () {
    await homePage.clickCatalogBtn();
  });

  When('{string}, {string} are selected', {timeout: 50000}, async function (item, subItem) {
    await homePage.catalog.selectSubcatalogItem(item, subItem);
    pageFixture.logger.info("select " + subItem + " subitem");
  });

Then('User is navigated to {string}', async function (url) {
    await asserts.assertUrlContains(url);
  });