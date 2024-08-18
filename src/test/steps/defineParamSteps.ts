import { Then } from "@cucumber/cucumber";
import { asserts } from "./homePageSteps";


Then('page url is {string}', async function (url) {
    await asserts.assertUrlContains(url);
  });