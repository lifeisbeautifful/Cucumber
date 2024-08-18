import { When, Then, DataTable, setDefaultTimeout } from "@cucumber/cucumber";
import { pageFixture } from "../../hooks/pageFixture";
import { homePage, asserts } from "./homePageSteps";

setDefaultTimeout(60 * 1000 * 2);

When('User navigates to specified link', async function (dataTable: DataTable) {

    //Hashes option
    //console.log(dataTable.hashes());
    const itemsNames = dataTable.hashes();
    await homePage.catalog.selectSubcatalogItem(itemsNames[0]["MenuItem"], itemsNames[0]["SubMenuItem"]);
    pageFixture.logger.info("select " + itemsNames[0]["SubMenuItem"] + " subitem");
    await asserts.assertUrlContains(itemsNames[0]["Url"]);

    //Raw option
    // console.log(dataTable.raw());
    // const itemsNames = dataTable.raw();
    // await homePage.catalog.selectSubcatalogItem(itemsNames[1][0], itemsNames[1][1]);
    // await asserts.assertUrlContains(itemsNames[1][2]);

    //Rows option
    //The same as raw but without table names
    // console.log(dataTable.rows());
    // const itemsNames = dataTable.rows();
    // await homePage.catalog.selectSubcatalogItem(itemsNames[0][0], itemsNames[0][1]);
    // await asserts.assertUrlContains(itemsNames[0][2]);

    //RowHash options could be called if table have only 2 columns
    //console.log(dataTable.rowsHash());

    //Transpose
    //console.log(dataTable.transpose());
    
  });
