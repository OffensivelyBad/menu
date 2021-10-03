import * as React from 'react';
import { Alert, AlertButton } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MenuProps } from '.';
import { MenuItemModel, MenuItem_Test } from '../../models';
import { NavigationPropList, NavigationScreens } from '../../models/navigation';
import MenuLayout from './menu.layout';
import { useItems, useAddItems, useRemoveAllItems, useRemoveItem, useReplaceItem } from '../../hooks';

const UI_TESTING = true;

type MenuNavigationProps = StackNavigationProp<NavigationPropList, NavigationScreens.Menu>;
interface MenuScreenProps {
  route: { params: MenuProps };
  navigation: MenuNavigationProps;
}

const Menu = (_props: MenuScreenProps) => {
  const [loadingMessage, setLoadingMessage] = React.useState<string | undefined>();
  const menuItems = useItems();
  const addItems = useAddItems();
  const removeItem = useRemoveItem();
  const removeAllItems = useRemoveAllItems();
  const replaceItem = useReplaceItem();

  const fetchMenuItemData = React.useCallback(() => {
    setLoadingMessage('Getting menu...');
    removeAllItems();

    if (UI_TESTING) {
      setTimeout(() => {
        setLoadingMessage(undefined);
        addItems(MenuItem_Test);
      }, 1000);
    } else {
      // TODO: fetch data
    }
  }, [addItems, removeAllItems]);

  React.useEffect(() => {
    fetchMenuItemData();
  }, [fetchMenuItemData]);

  const onDeleteItem = (item: MenuItemModel, callback?: (shouldDelete: boolean) => void) => {
    const onDelete = () => {
      if (callback) {
        callback(true);
      }
      removeItem(item);
    };

    const onCancel = () => {
      if (callback) {
        callback(false);
      }
    };

    const deleteButton: AlertButton = { text: 'Delete', onPress: onDelete, style: 'destructive' };
    const cancelButton: AlertButton = { text: 'Cancel', onPress: onCancel, style: 'cancel' };
    Alert.alert('Are you sure?', `Delete ${item.title} from the menu?`, [deleteButton, cancelButton]);
  };

  const onUpdateItem = React.useCallback((currentItem: MenuItemModel, newItem: MenuItemModel) => {
    console.log('updating..');
    replaceItem(currentItem, newItem);
  }, [replaceItem]);

  return <MenuLayout
    menuItems={menuItems}
    loadingMessage={loadingMessage}
    onDeleteItem={onDeleteItem}
    onUpdateItem={onUpdateItem}
  />;
};

export default Menu;
