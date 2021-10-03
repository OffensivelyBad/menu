import * as React from 'react';
import { View, FlatList, ListRenderItem, ActivityIndicator, Text } from 'react-native';
import MenuItem from '../../components/menu_item';
import { MenuItemModel } from '../../models';
import styles from './styles';

type Props = {
  menuItems: MenuItemModel[];
  loadingMessage?: string;
}

const MenuLayout = (props: Props) => {
  const { menuItems, loadingMessage } = props;

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
      {loadingMessage ? (
        <>
          <Text style={styles.loadingMessage}>{loadingMessage}</Text>
          <ActivityIndicator />
        </>
      ) : (
        <FlatList
          data={menuItems}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listContainer}
        />
      )}
    </View>
  );
};

export default MenuLayout;
