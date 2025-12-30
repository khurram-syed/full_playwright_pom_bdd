import {When, Then, DataTable, setDefaultTimeout} from '@cucumber/cucumber';
import { CustomWorld } from '../../../support/CustomWorld';
import articleData from '../../../test-data/articles.json';
import jsonTags from '../../../test-data/tags.json';


When('user stubs the {string}', async function(this: CustomWorld, stubName: string){
    const stubJson = stubName.toLowerCase()==="articles"? articleData : jsonTags;
   
    await this.page.route(`**/api/${stubName}*`, async route => {
        route.fulfill({body: JSON.stringify(stubJson)});
    });
});

Then('user should see the following {string} article details on the page',{timeout: 30000}, async function (this: CustomWorld,recordNo: string, dataTable: DataTable) {
     recordNo = recordNo.replace(/[a-z]/g,'');
     console.log(`Record No : ${recordNo}`);
    const [data] = dataTable.hashes();
    await this.homePage.verifyArticleDetails(data,articleData,parseInt(recordNo));
});
