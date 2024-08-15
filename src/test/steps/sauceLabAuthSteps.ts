import { Given, setDefaultTimeout } from "@cucumber/cucumber";
import { HomePage } from "../../pages/sauceLabPages/homePage";


setDefaultTimeout(60 * 1000 * 2);

Given('User is logged in', async function () {
    let home = new HomePage();
    await home.page.goto("https://www.saucedemo.com/inventory.html");
  })