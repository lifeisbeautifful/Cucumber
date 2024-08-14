import {Page, Locator} from "@playwright/test"
import { pageFixture } from "../../hooks/pageFixture"

export class Catalog{
    readonly page:Page;
    readonly catalog:Locator;

    constructor(){
        this.page = pageFixture.page;
        this.catalog = this.page.locator("#js-menu-wrapper");
    }

    async selectCatalogItem(itemName:string){
        const catalog = await this.page.locator("#js-menu-wrapper");
        await catalog.getByText(itemName).click();
    }

    async selectSubcatalogItem(itemName:string, subItemName:string){
        const catalog = await this.page.locator("#js-menu-wrapper");
        let categoryItem = await catalog.getByText(itemName, {exact:true});
        await categoryItem.hover();
        await catalog.getByRole("link", {name:`${subItemName}`, exact:true}).click();
    }

}