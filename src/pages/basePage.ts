import {Locator, Page, expect } from "@playwright/test"
import { pageFixture } from "../hooks/pageFixture"
import { Catalog } from "./components/catalog";
import {Navigation} from "./components/navigation";
import{Card} from "./components/card";
import{Login} from "./components/login";

export class BasePage{
    private readonly catalogBtn:Locator;
    protected readonly cardBtn:Locator;
    private readonly searchField:Locator;
    private readonly searchBtn:Locator;
    protected readonly accountBtn:Locator;
    readonly page:Page;
    readonly catalog:Catalog;
    readonly navigation:Navigation;
    readonly card:Card;
    readonly login:Login;
    
    constructor(){
        this.page = pageFixture.page;
        this.catalog = new Catalog();
        this.navigation = new Navigation();
        this.card = new Card();
        this.login = new Login();
        this.catalogBtn = this.page.locator("//div[@class='ct-button']");
        this.cardBtn = this.page.locator("//div[@class='mh-cart']/button");
        this.searchField = this.page.locator("[for='search-form__input']");
        this.searchBtn = this.page.locator("//button[@class='search-form__submit-button']");
        this.accountBtn = this.page.locator("//div[@class='mh-profile']//button");
    }

    async clickCatalogBtn(){
        await this.catalogBtn.click();
    }

    async clickCardBth(){
        await this.cardBtn.click();
        await expect(this.card.cardContainer).toBeVisible();
    }

    async performSearch(searchData:string){
        await this.searchField.fill(searchData);
        await this.searchBtn.click();
        await this.page.waitForLoadState();
    }

    async clickAccountBtn(){
        await this.accountBtn.click();
    }
}