import { CustomWorld } from "../../../support/CustomWorld";
import {Given, When, Then} from '@cucumber/cucumber'
import {expect} from '@playwright/test'


Given('user navigates to the {string} Page', async function(this:CustomWorld, pageName: string){
    console.log(`user navigates to the ${pageName} Page`);
     debugger;
    if(pageName.includes('login')){
        await this.homePage.navigateToPage('https://conduit.bondaracademy.com/login');
     }else{
        await this.homePage.navigateToPage('https://conduit.bondaracademy.com/');
     }
});

When('user clicks on {string}', async function(this: CustomWorld,locatorText: string){
    console.log(`user clicks on Your Feed`);
     await this.homePage.clickByText(locatorText);
});

Then('user should be on the log-in page', async function(this: CustomWorld){
     console.log(`user should be on the log-in page`);
     await this.loginPage.verifyUserOnLoginInPage();
});

Then('user should see the log1 in page', async function(this: CustomWorld){
     console.log(`user should see the log1 in page - Erroring it out Intentionally`);
     expect(false).toBeTruthy();
});
