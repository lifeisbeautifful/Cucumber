import { BasePage } from "./basePage";
import { expect } from "@playwright/test";

export class HomePage extends BasePage{
    
    async navigateToHomePage(){
        await this.page.goto(process.env.BASEURL);
    }

    async cardBtnIsVisible(){
        await expect(this.cardBtn).toBeVisible();
    }

    async accountBtnIsVisisble(){
        await expect(this.accountBtn).toBeVisible();
    }
}