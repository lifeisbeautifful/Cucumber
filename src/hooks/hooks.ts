import { BeforeAll, AfterAll, Before, After, Status } from "@cucumber/cucumber";
import { Browser, BrowserContext } from "@playwright/test";
import { pageFixture } from "./pageFixture";
import { invokeBrowser } from "../helper/browsers/browserManager";
import { getEnv } from "../helper/env/env";
import { createLogger } from "winston";
import { options } from "../helper/util/logger";

let browser: Browser;
let context: BrowserContext;

BeforeAll(async function() {
    getEnv();
    browser = await invokeBrowser();
})

Before(async function({ pickle }) {
    const scenarioName = pickle.name + pickle.id;
    context = await browser.newContext();
    const page = await browser.newPage();
    pageFixture.page = page;
    pageFixture.logger = createLogger(options(scenarioName));
})

After(async function({ pickle, result }) {
    console.log(result?.status);
    
    if(result?.status == Status.FAILED){
        //screenshot
    const img = await pageFixture.page.screenshot({ path: `./test-results/screenshots/${ pickle.name }.png`, type: "png" });
    await this.attach(img, "image/png");
    }
    
    await pageFixture.page.close();
    await context.close();
})

AfterAll(async function() {
    await browser.close();
    await pageFixture.logger.close();
})