import * as React from 'react';
import { View, FlatList } from 'react-native';
import MenuItem from '../../components/menu_item';
import { MenuItemModel } from '../../models';
import styles from './styles';

type Props = {
  menuItems: MenuItemModel[];
  refreshing: boolean;
  onDeleteItem: (item: MenuItemModel) => void;
  onUpdateItem: (currentItem: MenuItemModel, newItem: MenuItemModel) => void;
  onRefresh: () => void;
}

const MenuLayout = (props: Props) => {
  const { menuItems, refreshing, onDeleteItem, onUpdateItem, onRefresh } = props;

  const renderItem = (item: MenuItemModel) => {
    const { id } = item;
    return (
      <MenuItem
        key={id}
        item={item}
        onDelete={onDeleteItem}
        updateItem={onUpdateItem}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={menuItems}
        renderItem={({ item }) => renderItem(item)}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
    </View>
  );
};

export default MenuLayout;
