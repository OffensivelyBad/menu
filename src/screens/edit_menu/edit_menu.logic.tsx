import * as React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { EditMenuProps } from '.';
import { NavigationPropList, NavigationScreens } from '../../models/navigation';
import EditMenuLayout from './edit_menu.layout';
import { MenuItemModel } from '../../models';
import { useMenuItemStore } from '../../models/store';

type EditMenuNavigationProps = StackNavigationProp<NavigationPropList, NavigationScreens.EditMenu>;

interface EditMenuScreenProps {
  route: { params: EditMenuProps };
  navigation: EditMenuNavigationProps;
}

const EditMenu = (props: EditMenuScreenProps) => {
  const { navigation } = props;
  const addItem = useMenuItemStore(state => state.addItem);

  const onSave = (menuItem: MenuItemModel) => {
    addItem(menuItem);
    navigation.pop();
  };

  return <EditMenuLayout onSave={onSave} />;
};

export default EditMenu;
