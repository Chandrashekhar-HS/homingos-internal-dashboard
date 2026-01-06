import { expect, test, Page } from '@playwright/test';
import { Severity } from 'allure-js-commons';
import { allure } from 'allure-playwright';
import { HomePage } from '../pages/home-page';
import { LoginPage } from '../pages/login-page';
import { ConfigUtils } from '../test-utils/config-utils';
import { only } from 'node:test';

test.describe(
  'Home page tests', () => {
    let homePage: HomePage;
    let loginPage: LoginPage;

    test.beforeEach(async ({ page }: { page: Page }) => {
      homePage = new HomePage(page);
      loginPage = new LoginPage(page);
    });
    // ...add your tests here...
  });

