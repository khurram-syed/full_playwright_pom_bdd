import {When, Then, DataTable} from '@cucumber/cucumber';
import { CustomWorld } from '../../../support/CustomWorld';
import {expect} from '@playwright/test';

When('user enters the following login details', async function (this: CustomWorld, dataTable: DataTable) {
    const [data] = dataTable.hashes();
    console.log(` Username : ${data.Username}`);
    console.log(` Password : ${data.Password}`);
    await this.page.locator("input[placeholder='Email']").fill(data.Username);
    await this.page.locator("input[placeholder='Password']").fill(data.Password);
    await this.page.locator('button', {hasText : 'Sign in'}).click();
});

Then('user should be logged in successfully with user {string}', async function (this: CustomWorld, userName: string) {
    console.log(`user should be logged in successfully`);
    await expect(this.page.locator("a[href='/profile/kasyed']")).toHaveText(userName)
});

Then('user should see message {string}', async function (this: CustomWorld, errorMessage: string) {
    console.log(`user should see message: ${errorMessage}`);
    await expect(this.page.locator('ul.error-messages li')).toHaveText(errorMessage);

});