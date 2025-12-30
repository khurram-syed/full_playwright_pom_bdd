import { IWorldOptions, setWorldConstructor, World } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page, APIRequestContext, firefox, webkit, chromium } from '@playwright/test';
import { PageManager } from '../pages/PageManager';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';

export class CustomWorld extends World{
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;
  request!: APIRequestContext;
  pageManager!: PageManager;
  store = new Map<string,any>();
 
  constructor(options: IWorldOptions){
    super(options);
  }

  get homePage(): HomePage {
    return this.pageManager.getHomePage();
  }

  get loginPage(): LoginPage {
    return this.pageManager.getLoginPage();
  }

  getBrowserType(){
    const browserName = process.env.BROWSER || 'chrome';
    console.log(`========Browser Name: ${browserName}========`);
    switch(browserName.toLocaleLowerCase()){
        case 'firefox':
            return firefox;
        case 'webkit':
        case 'safari':
            return webkit;
        case 'chrome':
        case 'chromium':
        default:
            return chromium;
    }
  }
}

setWorldConstructor(CustomWorld);
