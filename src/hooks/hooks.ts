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

Before({ tags: "not @auth"}, async function({ pickle }) {
    const scenarioName = pickle.name + pickle.id;
    context = await browser.newContext({
        recordVideo: {
            dir: "test-results/videos/",
        },
    });

    await context.tracing.start({
        name: scenarioName,
        title: pickle.name,
        sources: true,
        screenshots: true, snapshots: true
    });
    const page = await browser.newPage();
    pageFixture.page = page;
    pageFixture.logger = createLogger(options(scenarioName));
});

Before({ tags: "@auth" }, async function({ pickle }) {
    const scenarioName = pickle.name + pickle.id;
    context = await browser.newContext({
        storageState: getStorageSession(pickle.name),
        recordVideo: {
            dir: "test-results/videos/",
        },
    });

    await context.tracing.start({
        name: scenarioName,
        title: pickle.name,
        sources: true,
        screenshots: true, snapshots: true
    });
    const page = await browser.newPage();
    pageFixture.page = page;
    pageFixture.logger = createLogger(options(scenarioName));
});

After(async function({ pickle, result }) {
    console.log(result?.status);
    let videoPath: string;
    //let img: Buffer;
    const path = `./test-results/reports/trace/${pickle.id}.zip`;

    //if(result?.status == Status.FAILED){
        //screenshot
    const img = await pageFixture.page.screenshot({ path: `./test-results/reports/screenshots/${ pickle.name }.png`, type: "png" });
    await this.attach(img, "image/png");

    //videoPath = await pageFixture.page.video().path();
    //}

    await context.tracing.stop({ path: path });

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

function getStorageSession(user: string): string | { cookies: Array<{ name: string; value: string; domain: string; path: string; expires: number; httpOnly: boolean; secure: boolean; sameSite: "Strict" | "Lax" | "None"; }>; origins: Array<{ origin: string; localStorage: Array<{ name: string; value: string; }>; }>; } {
    if(user.endsWith("admin"))
        return "src/helper/auth/admin.json";
      else return "src/helper/auth/otherUser.json";
}


