import { BeforeAll, AfterAll, Before, After, Status } from "@cucumber/cucumber";
import { Browser, BrowserContext } from "@playwright/test";
import { pageFixture } from "./pageFixture";
import { invokeBrowser } from "../helper/browsers/browserManager";
import { getEnv } from "../helper/env/env";
import { createLogger } from "winston";
import { options } from "../helper/util/logger";
const fs = require("fs-extra");


let browser: Browser;
let context: BrowserContext;

BeforeAll(async function() {
    getEnv();
    browser = await invokeBrowser();
});

Before(async function({ pickle }) {
    const scenarioName = pickle.name + pickle.id;
    context = await browser.newContext({
        recordVideo: {
            dir: "test-results/videos/",
        },
    });
    const page = await browser.newPage();
    pageFixture.page = page;
    pageFixture.logger = createLogger(options(scenarioName));
});

After(async function({ pickle, result }) {
    console.log(result?.status);
    let videoPath: string;
    let img: Buffer;

    if(result?.status == Status.FAILED){
        //screenshot
    const img = await pageFixture.page.screenshot({ path: `./test-results/reports/screenshots/${ pickle.name }.png`, type: "png" });
    await this.attach(img, "image/png");
    //videoPath = await pageFixture.page.video().path();
    }
    
    await pageFixture.page.close();
    await context.close();

    // if(result?.status == Status.FAILED){
    //     await this.attach(img, "image/png");
    //     //is not working, probably playwright bug
    //     //await this.attach(fs.readFileSync(videoPath));
    // }
});

AfterAll(async function() {
    await browser.close();
});
