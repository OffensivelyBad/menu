import * as React from 'react';
import { View, FlatList, ActivityIndicator, Text } from 'react-native';
import MenuItem from '../../components/menu_item';
import { MenuItemModel } from '../../models';
import styles from './styles';

type Props = {
  menuItems: MenuItemModel[];
  loadingMessage?: string;
  onDeleteItem: (item: MenuItemModel) => void;
}

const MenuLayout = (props: Props) => {
  const { menuItems, loadingMessage, onDeleteItem } = props;

  const renderItem = (item: MenuItemModel) => {
    const { id } = item;
    return (
      <MenuItem
        key={id}
        item={item}
        onDelete={onDeleteItem}
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
          renderItem={({ item }) => renderItem(item)}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listContainer}
        />
      )}
    </View>
  );
};

export default MenuLayout;
