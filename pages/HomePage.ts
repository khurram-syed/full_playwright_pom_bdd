import { Locator, Page, expect} from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly pageHeading: Locator;
    readonly tagList: Locator;
    readonly homeLink : Locator;
    readonly signInLink: Locator;
    readonly articlesDiv: Locator;
    readonly tagLinks: Locator;

    constructor(page: Page) {
        this.page = page;
        this.pageHeading = page.locator('h1');
        this.tagList = page.locator('.sidebar .tag-list');
        this.homeLink = page.locator("a[href='/']").first();
        this.signInLink = page.getByText('a[href="/login"]');
        this.articlesDiv = page.locator('.article-preview');
        this.tagLinks = page.locator('.tag-list a');
    }

    async verifyTagsExist(tags: string) {
        const tagsList = tags.split(",");
        for(let i = 0; i< tagsList.length; i++){
            await expect(this.tagLinks.nth(i),`Error: Tag ${tagsList[i]} is not visible!`).toHaveText(tagsList[i]);
        }
    }


    async navigateToPage(pageName: string){
        await this.page.goto(pageName);
    }

    async clickToHomePage(){
        await this.homeLink.click();
        await expect(this.pageHeading.first()).toHaveText("conduit");
    }
    
    async navigateToLoginPage(){
        await this.signInLink.click();
        await expect(this.page.getByRole('heading',{name:'Sign in'})).toBeVisible();
    }

    async clickByText(locatorText: string){
        await this.page.getByText(locatorText).click();
    }

    async verifyArticleDetails(expctedData: Record<string,string>, actualData: any, articleNo: number){
        //await this.page.pause();
        debugger;
        const firstArticleTitle = await this.articlesDiv.locator('a.preview-link h1').nth(articleNo-1);
        
        console.log(`Title : ${expctedData.title}`);
        console.log(`Description : ${expctedData.description}`);
        console.log(`Description : ${actualData.articles[0].title}`);
        
        await expect(firstArticleTitle).toHaveText(actualData.articles[articleNo-1].title);
        await expect(this.page.locator('.article-preview .pull-xs-right').first()).toContainText('888');
    }




}