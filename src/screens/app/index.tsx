import * as React from 'react';
import { View, Text, FlatList, ListRenderItem } from 'react-native';
import MenuItem from '../../components/menu_item';
import { MenuItemModel, MenuItem_Test } from '../../models';
import styles from './styles';

const UI_TESTING = true;

const App = () => {
  const [menuItems, setMenuItems] = React.useState<MenuItemModel[]>([]);

  React.useEffect(() => {
    if (UI_TESTING) {
      setMenuItems(MenuItem_Test);
    } else {
      // TODO: fetch data
    }
  }, []);

  const renderItem: ListRenderItem<MenuItemModel> = ({ item }) => {
    const { id, image, title, description, price } = item;
    return (
      <MenuItem
        key={id}
        image={image}
        title={title}
        description={description}
        price={price}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu</Text>
      <FlatList
        data={menuItems}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default App;
