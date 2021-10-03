/**
 * @format
 */

import 'react-native';
import { getMenuItemFromInput, removeMenuItem } from '../src/utils';
import { MenuItem_Test } from '../src/models';

describe('utils', () => {
  test('getMenuItemFromInput gets a new item', () => {
    const title = 'a new item';
    const description = 'a new description';
    const price = '$12.34';
    const image = 'an image';

    const newItem = getMenuItemFromInput(title, description, price, image);
    expect(newItem.id).toBeTruthy();
    expect(newItem.title).toEqual(title);
    expect(newItem.description).toEqual(description);
    expect(newItem.price).toEqual(price);
    expect(newItem.image).toEqual(image);
  });

  test('removeMenuItem removes the item', () => {
    const randomItem = MenuItem_Test[Math.floor(Math.random() * MenuItem_Test.length)];
    const newItems = removeMenuItem(randomItem, MenuItem_Test);

    expect(newItems.length).toBe(MenuItem_Test.length - 1);
    expect(newItems).not.toContain(randomItem);
  });
});
