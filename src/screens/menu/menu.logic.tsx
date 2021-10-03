import * as React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { MenuProps } from '.';
import { MenuItemModel, MenuItem_Test } from '../../models';
import { NavigationPropList, NavigationScreens } from '../../models/navigation';
import MenuLayout from './menu.layout';
import { useItems, useAddItems, useRemoveAllItems, useRemoveItem } from '../../hooks';

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

  const onDeleteItem = (item: MenuItemModel) => {
    removeItem(item);
  };

  return <MenuLayout
    menuItems={menuItems}
    loadingMessage={loadingMessage}
    onDeleteItem={onDeleteItem}
  />;
};

export default Menu;
