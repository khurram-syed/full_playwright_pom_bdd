import { When, Then, DataTable } from "@cucumber/cucumber";
import { CustomWorld } from "../../../support/CustomWorld";
import {expect} from '@playwright/test';
import articleJson from '../../../test-data/articles.json'

let jsonData: any;

When('user send the GET request to endpoint {string}', async function(this: CustomWorld, endpoint: string){
    const response = await this.request.get(endpoint);
    jsonData = await response.json();
    console.log(`Respone Status: ${response.status()}`);
    console.log(`Response.json : ${jsonData}`);
    expect(response.status()).toBe(200);
});

Then('user should see the following values on {string} record', async function(this: CustomWorld, recordNo: string, dataTable : DataTable){
    recordNo = recordNo.replace('/[a-z]/g','');
    const [table] = dataTable.hashes();
    console.log(`ArticleCount : ${table.ArticlesCount}`);
    console.log(`Api Articlecount : ${jsonData.articlesCount}`);
    expect(jsonData.articles[parseInt(recordNo)-1].title).toContain(table.Title);
    expect(jsonData.articles[parseInt(recordNo)-1].body).toContain(table.Body);
    expect(jsonData.articlesCount).toBe(10);
});


Then('schema should have following fields in articles', async function(this: CustomWorld, dataTable : DataTable){
    const tableRows = dataTable.hashes();
    const firstArticle =  jsonData.articles[0];
    console.log(`Slug : ${tableRows[0].FieldName}`);
    console.log(`Api Articlecount : ${jsonData.articlesCount}`);
    
    for(let row of tableRows){
        const fieldName = row.FieldName;
        const fieldType = row.FieldType;
        console.log(`FieldName : ${fieldName}`);
       
        expect(firstArticle).toHaveProperty(fieldName);
        switch(fieldType){
            case 'string':
                  expect(firstArticle[fieldName]).toEqual(expect.any(String));
                  break;
            case 'number':
                  expect(firstArticle[fieldName]).toEqual(expect.any(Number));
                  break;
            default:
                throw new Error(`Field : ${fieldName} doesn't have type : ${fieldType}`);
        }
    }

});

Then('schema should match {string} data file', async function(this: CustomWorld, dataFile: string){
    const schemaArticle = articleJson.articles[0] as Record<string, unknown>;
    const apiArticle = jsonData.articles[0];
    for(const field of Object.keys(schemaArticle)){
        expect(apiArticle).toHaveProperty(field);
        expect(typeof apiArticle[field]).toBe(typeof schemaArticle[field]);
    }
});

