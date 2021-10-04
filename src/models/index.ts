export type MenuItemModel = {
  id: string;
  image: string;
  title: string;
  price: string;
  description: string; // TODO: make this currency
}

const IMAGES = ['https://spoonacular.com/cdn/ingredients_100x100/apple.jpg', 'https://spoonacular.com/cdn/ingredients_100x100/orange.jpg', 'https://spoonacular.com/cdn/ingredients_100x100/peaches.jpg', 'https://spoonacular.com/cdn/ingredients_100x100/mango.jpg', 'https://spoonacular.com/cdn/ingredients_100x100/starfruit.jpg', 'https://spoonacular.com/cdn/ingredients_100x100/blueberries.jpg'];

export const MenuItem_Test: MenuItemModel[] = Array.from({ length: 20 }, (x, i) => {
  const randomImage = IMAGES[Math.floor(Math.random() * IMAGES.length)];
  const newItem = {
    id: `${i}`,
    image: randomImage,
    title: 'Pie',
    description: 'mm mmm that is a tasty apple pie. It’s made with real apples. Apples for crust, apples all the way down',
    price: `$${12.34 + i}`,
  };
  return newItem;
});

