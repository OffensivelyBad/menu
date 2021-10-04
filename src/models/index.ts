export type MenuItemModel = {
  id: string;
  image: string;
  title: string;
  price: string;
  description: string; // TODO: make this currency
}

export const MenuItem_Test: MenuItemModel[] = Array.from({ length: 20 }, (x, i) => {
  const newItem = {
    id: `${i}`,
    image: 'https://spoonacular.com/cdn/ingredients_100x100/apple.jpg',
    title: 'Pie',
    description: 'mm mmm that is a tasty apple pie. It’s made with real apples. Apples for crust, apples all the way down',
    price: `$${12.34 + i}`,
  };
  return newItem;
});

