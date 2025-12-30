import {Locator, Page, expect } from '@playwright/test'

export class LoginPage{

    readonly page: Page;
    readonly userInput: Locator;
    readonly passwordInput: Locator;
    readonly signInButton: Locator;
    readonly signInHeading: Locator;
    readonly userNameLink : Locator;
    readonly errorMessage : Locator;
    readonly needAnAccountLink: Locator;

    constructor(page: Page){
        this.page = page;
        this.userInput = page.locator("input[placeholder='Email']");
        this.passwordInput = page.locator("input[placeholder='Password']");
        this.signInButton = page.locator('button', {hasText : 'Sign in'});
        this.signInHeading = page.getByRole('heading', {name : 'Sign in'});
        this.userNameLink = page.locator("a[href='/profile/kasyed']");
        this.errorMessage = page.locator("ul.error-messages li");
        this.needAnAccountLink = page.getByText("Need an account?");
    }

    async fillInSignDetails(userName: string, password: string){
      await this.signInHeading.waitFor({state : 'visible'});
      await this.userInput.fill(userName);
      await this.passwordInput.fill(password);
      await this.signInButton.click();
    }

    async verifySuccessfulLogin(userName: string ){
        await expect(this.userNameLink).toHaveText(userName);
    }

    async verifyInvalidLogin(errorMessage: string ){
        await expect(this.errorMessage).toHaveText(errorMessage);
    }

    async verifyUserOnLoginInPage(){
        await expect(this.needAnAccountLink).toBeVisible();
    }
}
