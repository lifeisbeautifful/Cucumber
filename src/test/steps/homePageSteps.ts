import { Given, setDefaultTimeout } from "@cucumber/cucumber"
import { pageFixture } from "../../hooks/pageFixture";
import { HomePage } from "../../pages/homePage";
import Asserts from "../../helper/wrapper/asserts";

setDefaultTimeout(60 * 1000 * 2);
export let homePage: HomePage;
export let asserts: Asserts;

Given('User is navigated to home page', { timeout: 10000},  async function () {
      homePage = new HomePage();
      asserts = new Asserts(pageFixture.page);
      await homePage.navigateToHomePage();
      await asserts.assertUrl("https://allo.ua/");
      pageFixture.logger.info("Navigation to home page");
  });

Given('Cart item is present on home page', async function () {
    await homePage.cardBtnIsVisible();
  });

  Given('Account button is present on home page', async function () {
    await homePage.accountBtnIsVisisble();
  });