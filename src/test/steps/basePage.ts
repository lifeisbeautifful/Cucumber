const { Locator, Page } = require("@playwright/test");

export class BasePage{
  public readonly page
  private readonly getMainPageButton
  private readonly getCatalogNavigation
  private readonly getSalesNavigation
  private readonly getInventoryProductsNavigation
  private readonly getParentProductsNavigation
  private readonly getAllBookingsNavigation
  private readonly getFinancialReportNavigation
  private readonly getTopRightNotification
  private readonly getConfirmLowerButton
  private readonly getConfirmButton
  private readonly getRemoveItemButton
  private readonly getClearFiltersButton
  private readonly getApplyFiltersButton
  private readonly getCancelButtonOnModal

  constructor(page) {
    this.page = Page;
    this.getMainPageButton = page.locator("div.logo-dark");
    this.getCatalogNavigation = page.locator("a[class='dropdown-toggle']", {
      hasText: "Catalog",
    });
    this.getSalesNavigation = page.locator("a[class='dropdown-toggle']", {
      hasText: "Sales",
    });
    this.getInventoryProductsNavigation = page.locator("a[routerlink='/inventory-products']");
    this.getParentProductsNavigation = page.locator("a[routerlink='/products']");
    this.getAllBookingsNavigation = page.locator("a[routerlink='/orders']");
    this.getFinancialReportNavigation = page.locator("a[routerlink='/reporting/financial-report']");
    this.getTopRightNotification = page.locator("#noty_layout__topRight > div");
    this.getConfirmLowerButton = page.locator("//button[normalize-space()='Ok']");
    this.getConfirmButton = page.locator("//button[normalize-space()='OK']");
    this.getRemoveItemButton = page.locator("a").filter({ hasText: "delete" });
    this.getClearFiltersButton = page.getByRole("button", {
      name: "Clear Filters",
    });
    this.getApplyFiltersButton = page.getByText("Apply Filters");
    this.getCancelButtonOnModal = page.locator("button").getByText("Cancel");
  }

//   get cancelButtonOnModal(): Locator {
//     return this.getCancelButtonOnModal;
//   }

//   get applyFiltersButton(): Locator {
//     return this.getApplyFiltersButton;
//   }

//   get clearFiltersButton(): Locator {
//     return this.getClearFiltersButton;
//   }

//   get removeItemButton(): Locator {
//     return this.getRemoveItemButton;
//   }

//   get confirmLowerButton(): Locator {
//     return this.getConfirmLowerButton;
//   }

//   get confirmButton(): Locator {
//     return this.getConfirmButton;
//   }

//   get salesNavigation(): Locator {
//     return this.getSalesNavigation;
//   }

//   get parentProductsNavigation(): Locator {
//     return this.getParentProductsNavigation;
//   }

//   get allBookingsNavigation(): Locator {
//     return this.getAllBookingsNavigation;
//   }

//   get financialReportNavigation(): Locator {
//     return this.getFinancialReportNavigation;
//   }

//   async goToMainPage(): Promise<void> {
//     await Promise.all([this.page.goto(`${process.env.BASE_URL}`), this.page.waitForURL(`${process.env.BASE_URL}`)]);
//   }

//   async typeInIframeInputFieldConditionally(locator: Locator, text: string): Promise<void> {
//     const fieldValue = await locator.textContent();
//     if (fieldValue === "") {
//       await locator.type(text);
//     }
//   }

//   async uploadImageConditionally(actualImage: Locator, fileInput: Locator, path: string): Promise<void> {
//     const isImagePresent = await actualImage.isVisible();
//     if (isImagePresent === false) {
//       await fileInput.setInputFiles(path);
//     }
//   }

//   async typeInBlankField(locator: Locator, text: string): Promise<void> {
//     const fieldValue = await locator.inputValue();
//     if (fieldValue === "") {
//       await locator.fill(text);
//     } else {
//       await locator.fill("");
//       await locator.fill(text);
//     }
//   }

//   async typeInBlankIframeField(locator: Locator, text: string): Promise<void> {
//     const fieldValue = await locator.textContent();
//     if (fieldValue === "") {
//       await locator.fill(text);
//     } else {
//       await locator.fill("");
//       await locator.fill(text);
//     }
//   }

//   async typeInBlankIframeSlower(locator: Locator, text: string): Promise<void> {
//     const fieldValue = await locator.textContent();
//     if (fieldValue === "") {
//       await locator.type(text);
//     } else {
//       await locator.fill("");
//       await locator.type(text);
//     }
//   }

//   async typeInFieldSlower(locator: Locator, text: string): Promise<void> {
//     const fieldValue = await locator.inputValue();
//     if (fieldValue === "") {
//       await locator.type(text, { delay: 100 });
//     } else {
//       await locator.fill("");
//       await locator.type(text, { delay: 100 });
//     }
//   }

//   async unheckCheckboxIfChecked(locator: Locator): Promise<void> {
//     if ((await locator.isChecked()) === true) {
//       await locator.uncheck({ force: true });
//     }
//   }

//   async checkCheckboxIfNotChecked(locator: Locator): Promise<void> {
//     if ((await locator.isChecked()) === false) {
//       await locator.check({ force: true });
//     }
//   }

//   async triggerCheckForCheckboxIfNotChecked(locator: Locator): Promise<void> {
//     if ((await locator.isChecked()) === false) {
//       await locator.dispatchEvent("click");
//     }
//   }

//   async selectOptionValue(label: string | RegExp): Promise<void> {
//     await this.page.getByRole("option", { name: label, exact: true }).first().click({ timeout: 40000 });
//   }

//   async clickOnButtonAndWaitForResponse(locator: Locator, endpoint: string): Promise<void> {
//     await Promise.all([locator.click(), this.page.waitForResponse((response) => response.url().includes(endpoint))]);
//   }

//   async clickOnButtonAndWaitForReload(locator: Locator): Promise<void> {
//     await Promise.all([this.page.waitForEvent("load", { timeout: 40000 }), locator.click()]);
//   }

//   async clickOnButtonWithoutWait(locator: Locator): Promise<void> {
//     await locator.click();
//   }

//   async openCatalog(): Promise<void> {
//     await this.getCatalogNavigation.click();
//   }

//   async closeTopRightNotificationByIndex(order: number): Promise<void> {
//     await this.getTopRightNotification.nth(order).click();
//   }

//   async getTopRightNotificationTextByIndex(order: number): Promise<string | null> {
//     return this.getTopRightNotification.nth(order).textContent();
//   }

//   async isMainPageButtonVisible(): Promise<boolean> {
//     return this.getMainPageButton.isVisible();
//   }

//   async openInventoryProductsTab(): Promise<void> {
//     await Promise.all([
//       this.page.waitForResponse((response) => response.url().includes("/productInventories/lite")),
//       this.getInventoryProductsNavigation.click(),
//     ]);
//   }

//   async openParentProductsTab(): Promise<void> {
//     await Promise.all([
//       this.page.waitForResponse((response) => response.url().includes("/original/")),
//       this.getParentProductsNavigation.click(),
//     ]);
//   }

//   async confirmAction(endpoint: string): Promise<void> {
//     await Promise.all([
//       this.page.waitForResponse((response) => response.url().includes(endpoint)),
//       this.getConfirmButton.click(),
//     ]);
//   }

//   async getSelectedOptionText(locator: string, maxRetries = 5, interval = 200): Promise<string | Error> {
//     let retries = 0;
//     while (retries < maxRetries) {
//       try {
//         const selectedOption = await this.page.evaluate((locator) => {
//           const selectElement = document.querySelector<HTMLSelectElement>(locator);
//           if (selectElement !== null && selectElement.selectedIndex !== -1) {
//             return selectElement.options[selectElement.selectedIndex].text;
//           } else {
//             throw new Error("Option not selected");
//           }
//         }, locator);
//         return selectedOption;
//       } catch (error) {
//         retries++;
//         if (retries < maxRetries) {
//           await new Promise((resolve) => setTimeout(resolve, interval));
//         } else {
//           return error;
//         }
//       }
//     }
//     return new Error("Max retries reached");
//   }
 }
