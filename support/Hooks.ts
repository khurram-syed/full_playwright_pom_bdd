import { Before, After, Status} from '@cucumber/cucumber';
import { request as playwrightRequest} from '@playwright/test';
import { CustomWorld } from './CustomWorld';
import { PageManager } from '../pages/PageManager';

// ------------ UI ---------
Before({tags: "@ui"},async function(this: CustomWorld){
    const browserType = this.getBrowserType();
    const isHeaded = process.env.HEADLESS === 'false';
    this.browser = await browserType.launch({
        headless: !isHeaded,
        slowMo: isHeaded? 100 : 0
    })
    const context = await this.browser.newContext();
    this.page = await context.newPage();
    this.pageManager = new PageManager(this.page);
    console.log('Before -> Setting up the browser.!');
});

// ------------ API ---------
Before({tags: "@api"},async function(this: CustomWorld){
    
    this.request = await playwrightRequest.newContext({
        baseURL: "https://conduit-api.bondaracademy.com/api/"
    });
    console.log('Before -> Setting up the Request.!');
});


After({tags: "@ui"}, async function (this: CustomWorld, scenario) {
   
   if (scenario.result?.status === Status.FAILED && this.page) {
     const screenshot = await this.page.screenshot({path: `test-results/screenshots/${scenario.pickle.name.replace(/[^a-z0-9]/gi, '_')}.png`,
                        fullPage:true});
     await this.attach(screenshot, 'image/png');
  }
    await this.page?.close();
    await this.browser?.close();
    await this.request?.dispose();
});

