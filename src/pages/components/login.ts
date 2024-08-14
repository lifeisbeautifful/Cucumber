import {Locator, Page, expect} from "@playwright/test"
import { pageFixture } from "../../hooks/pageFixture"

export class Login{
    page:Page;
    phoneField:Locator;
    enterBtn:Locator;
    loginPopup:Locator;

    constructor(){
        this.page = pageFixture.page;
        this.phoneField = this.page.locator("//input[@name='telephone']");
        this.enterBtn = this.page.locator("//button[@type='submit' and @class='a-button a-button--block a-button--lg a-button--primary']");
        this.loginPopup = this.page.locator("#customer-popup-menu");
    }

    async loginViaPhoneNumber(phoneNumber:string){
        await this.phoneField.fill(phoneNumber);
        await this.enterBtn.click();
        await expect(this.loginPopup).not.toBeVisible();
    }
}