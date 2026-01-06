import { type Page, expect } from '@playwright/test'

const logger = require('../test-utils/logger')('home_page')

export class HomePage {
    private page: Page
    private readonly loginButton: ReturnType<Page['locator']>

    constructor(page: Page) {
        this.page = page
        this.loginButton = this.page.locator('text=Login to your account')
    }

    async navigateToHomePage(url: string) {
        await this.page.goto(url)
        await this.page.waitForLoadState('networkidle')
        logger.info('Navigated to home page')
    }

    async clickOnLoginButton() {
        await expect(this.loginButton).toBeVisible()
        logger.info('Login to your account text is visible')
        await this.loginButton.click()
    }

//     export class CampaignPage {
//   constructor(private page) {}

  async clickOnCampaignButton() {
    await this.page.click('text=Campaign');
  }

  async clickOnUniversalCampaignButton() {
    await this.page.click('text=Universal Campaign');
  }

  async clickOnSettingsButton() {
    await this.page.click('text=Settings');
  }

  async clickOnAdminButton() {
    await this.page.click('text=Admin');
  }

  async clickOnCreateButton() {
    await this.page.click('text=Create');
  }

  async searchCampaignWithName(name: string) {
    await this.page.fill('button[id=\'radix-:r14:\']', name);
  }

  async clickOnShowMoreButton() {
    await this.page.click('.container.relative.mx-auto.flex.min-h-screen.w-full.flex-col.items-center.justify-center.gap-6.p-4');
  }
}


