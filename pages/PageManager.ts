import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";
import { Page } from "@playwright/test";

export class PageManager {
    private homePage?: HomePage;
    private loginPage?: LoginPage;
    private page : Page;

    constructor(page: Page){
        this.page = page;
    }

    getHomePage(): HomePage {
      if(!this.homePage){
        return this.homePage = new HomePage(this.page);
      }
      return this.homePage;
    }

    getLoginPage(): LoginPage {
       if(!this.loginPage){
          return this.loginPage = new LoginPage(this.page);
       }
       return this.loginPage;
    }

}