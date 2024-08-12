const {Given} = require("@cucumber/cucumber");
const {chromium, Page, Browser} = require("@playwright/test");



Given('User is navigated to home page', async function () {
  let browser = await chromium.launch({headless: true});
  
  let page = await browser.newPage();
  await page.goto("https://allo.ua/");
  
});