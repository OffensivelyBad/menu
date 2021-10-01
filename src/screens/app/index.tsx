import * as React from 'react';
import { View, Text } from 'react-native';
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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu</Text>
      <View style={styles.content}>
        {menuItems.map(item => (
          <MenuItem
            key={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
            price={item.price}
          />
        ))}
      </View>
    </View>
  );
};

export default App;
