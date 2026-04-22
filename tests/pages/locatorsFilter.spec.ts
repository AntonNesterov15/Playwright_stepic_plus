import {test, expect} from '@playwright/test';

test('filter', async({page}) => {
    await page.goto('https://osstep.github.io/locators/locator_filter');
    const list = page.getByRole('list', {name: 'Fruits list'});
    const items = list.getByRole('listitem');
    const bananaItem = items.filter({hasText: /^Banana$/});
    await bananaItem.click();
})