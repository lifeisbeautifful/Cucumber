import { expect, Page } from "@playwright/test";

export default class Asserts {

    constructor(private page: Page){
        this.page = page;
    };

    async assertUrl(url: string){
        await expect(await this.page).toHaveURL(url);
    }

    async assertUrlContains(text: string){
        const pageUrl = await this.page.url();
        await expect(pageUrl).toContain(text);
    }

    async assertTitle(title:string){
        await expect(await this.page).toHaveTitle(title);
    }

    async assertTitleContains(text: string){
        const pageTitle = await this.page.title();
        expect(pageTitle).toContain(text);
    }
}