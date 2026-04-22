import {test, expect} from '@playwright/test';

test('Click submit button', async({page}) => {
    await page.goto('https://osstep.github.io/locators/locators');
    const button = page.locator('button#submit');
    await button.click();
})

test('Click submit button by getByRole', async({page}) => {
    await page.goto('https://osstep.github.io/locators/locators');
    const button = page.getByRole('button', {name: 'Submit'});
    await button.click();
})

test('Activate checkbox by getByRole', async({page}) => {
    await page.goto('https://osstep.github.io/locators/locators');
    const button = page.getByRole('checkbox', {name: 'terms'});
    await button.check();
})

test('Check usrname visability', async({page}) => {
    await page.goto('https://osstep.github.io/locators/locators');
    const username = page.getByText('Welcome, User!');
    await expect(username).toBeVisible();
    await expect(page.getByText('Welcome, User!')).toBeVisible();
    await expect(page.getByText(/Welcome, [A-Za-z]+!/)).toBeVisible();
})

test('Fill email value', async({page}) => {
    await page.goto('https://osstep.github.io/locators/locators');
    await page.getByLabel('Email').fill('test@mail.ru');
})

test('Fill search value', async({page}) => {
    await page.goto('https://osstep.github.io/locators/locators');
    await page.getByPlaceholder('Search...').fill('test@mail.ru');
})

test('Check logo image visability', async({page}) => {
    await page.goto('https://osstep.github.io/locators/locators');
    await expect (page.getByAltText('Company Logo')).toBeVisible();
})

test('Check close button visability', async({page}) => {
    await page.goto('https://osstep.github.io/locators/locators');
    await expect (page.getByTitle('Close').first()).toBeVisible();
})

test('Click cancek button by getByTestId', async({page}) => {
    await page.goto('https://osstep.github.io/locators/locators');
    const button = page.getByTestId('cancel-button');
    await button.click();
})

test('Use list item', async({page}) => {
    await page.goto('https://osstep.github.io/locators/locators');
    await page.getByRole('listitem').first().click();
    await page.getByRole('listitem').last().click();
    await page.getByRole('listitem').nth(1).click();
})

test('Click dialog area', async({page}) => {
    await page.goto('https://osstep.github.io/locators/locators');
    await page.getByTestId('open-dialog').click();
    await page.getByTestId('modal').waitFor({state: 'visible'});
})