export type MenuItemModel = {
  id: string;
  image: string;
  title: string;
  price: string;
  description: string; // TODO: make this currency
}

const menuItem1: MenuItemModel = {
  id: '1',
  image: 'https://spoonacular.com/cdn/ingredients_100x100/apple.jpg',
  title: 'Apple Pie',
  description: 'mm mmm that is a tasty apple pie. It’s made with real apples. Apples for crust, apples all the way down',
  price: '$12.34',
};

const menuItem2: MenuItemModel = {
  id: '2',
  image: 'https://spoonacular.com/cdn/ingredients_100x100/apple.jpg',
  title: 'Pie',
  description: 'mm mmm that is a tasty apple pie. It’s made with real apples. Apples for crust, apples all the way down',
  price: '$12.34',
};

export const MenuItem_Test = [menuItem1, menuItem2];
