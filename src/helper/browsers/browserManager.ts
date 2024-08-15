import { chromium, firefox, LaunchOptions, webkit } from "@playwright/test";
import { error } from "console";

const options: LaunchOptions = {
    headless: false
}

export const invokeBrowser = () => {
    const browserType = process.env.npm_config_BROWSER || "chrome";

    switch(browserType){
        case "chrome":
            return chromium.launch(options);
        case "firefox":
            return firefox.launch(options);
        case "webkit":
            return webkit.launch(options);
        default:
            throw new error("Browser is not set");
    }
}