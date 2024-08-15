import { expect, Locator, Page } from "@playwright/test";
import { pageFixture } from "../../hooks/pageFixture";

export class HomePage {
    readonly page:Page;
    private readonly getAccountBtn: Locator;
    private readonly getSignInMenu: Locator;
    private readonly getEmailInputField: Locator;
    private readonly getPasswordField: Locator;
    private readonly getSignInBtn: Locator;
    private readonly getWishListBtn: Locator;
    private readonly getAccountDetailBtn: Locator;

    constructor(){
        this.page = pageFixture.page;
        this.getAccountBtn = this.page.getByRole("button", { name: "Open Menu" });
        this.getSignInMenu = this.page.getByRole("menuitem", {
            name: "Sign In With Email",
          });
        this.getEmailInputField = this.page.locator("section input[name='email']");
        this.getSignInBtn = this.page.getByRole("button", {
            name: "Sign In",
          });
        this.getWishListBtn = this.page.getByTestId("wishlistButton");
        this.getPasswordField = this.page.locator("section input[name='password']");
        this.getAccountDetailBtn = this.page.getByTestId("accountDetailsButton");
    }

    async openAccountDropdownMenu() {
        await this.getAccountBtn.click();
      }

      async openSignInMenu() {
        await this.getSignInMenu.click();
      }

      async typeInEmailField(text: string){
        await this.getEmailInputField.fill(text);
      }

      async typeInPasswordField(text: string){
        await this.getPasswordField.fill(text);
      }

      async submitLogin(){
        await this.getSignInBtn.click();
        await expect(this.getWishListBtn).toBeVisible();
      }

      async openAccountDetails(){
        await this.getAccountDetailBtn.click();
        await this.page.waitForURL("**/account");
      }
}