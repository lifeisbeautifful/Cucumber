import {Locator, Page} from "@playwright/test"
import { pageFixture } from "../../hooks/pageFixture"

export class Navigation{
    readonly page:Page;
    private readonly navigationFilter:Locator;
    
    constructor(){
        this.page = pageFixture.page;
        this.navigationFilter = this.page.locator(".v-catalog__navigation");
    }

    async filterItemBy(filter:string){
        const navigationFilter = await this.page.locator(".v-catalog__navigation");
        await navigationFilter.locator(`[data-id=${filter}]`).click();
    }

    async enterMinPrice(price:string){
        await this.page.locator("//form[@class='f-range__form']/input[1]").fill(price);
    }

    async enterMaxPrice(price:string){
        await this.page.locator("//form[@class='f-range__form']/input[2]").fill(price);
    }

}