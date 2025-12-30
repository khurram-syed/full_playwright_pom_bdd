//import 'dotenv/config';
import {When, Then} from '@cucumber/cucumber';
import {userData} from '../../../support/user';
import { CustomWorld } from '../../../support/CustomWorld';
import {expect} from '@playwright/test';


    When('user send the POST request {string} with username and password', async function (this: CustomWorld, endpoint: string) {
        // Write code here that turns the phrase above into concrete actions
        console.log(`user data :`, userData);
       const responsePost = await this.request.post(endpoint,{
            headers: { 
                'Content-type': 'application/json',
                //'Accept': 'application/json'
            },
            data: userData
        });
        this.store.set("responsePost",responsePost);
    });

    Then('user should see {string} status', function (this: CustomWorld, status: string) {
        // Verifying status
        const responsePost = this.store.get("responsePost");
        console.log(`Status : ${responsePost.status()}`);
        expect(responsePost.status()).toBe(parseInt(status));
    });

    Then('user should see {string} exists', async function (this: CustomWorld, field: string) {
        // Verifying the Token
        const responseJsonData = await this.store.get("responsePost").json();
        console.log(responseJsonData);
        expect(responseJsonData.user).toHaveProperty(field);
        this.store.set("token",responseJsonData.user.token)

    });

    When('user sends the GET request {string} with token', async function (this: CustomWorld, endpoint: string) {
        // Sending the GET Request
       const resposneGet = await this.request.get(endpoint,{
            headers: { 
                'Content-type': 'application/json',
                'Authorization': 'Bearer '+this.store.get("token")
            }
        });
        this.store.set("resposneGet",resposneGet);
    });

    Then('user should see first article with title {string}', async function (this: CustomWorld, titleName: string) {
        // Verifying the Logged in first Article
        console.log(`Get Status : ${this.store.get("resposneGet").status()}`);
        expect(this.store.get("resposneGet").status()).toBe(200);
        const responseJsonData = await this.store.get("resposneGet").json();
        expect(responseJsonData.articles[0].title).toBe(titleName);
    });