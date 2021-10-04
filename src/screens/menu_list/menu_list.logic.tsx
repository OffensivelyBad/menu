import { StackNavigationProp } from '@react-navigation/stack';
import * as React from 'react';
import { NavigationPropList, NavigationScreens } from '../../models/navigation';
import MenuListLayout from './menu_list.layout';
import { MenuListProps } from './models';

type MenuListNavigationProps = StackNavigationProp<NavigationPropList, NavigationScreens.MenuList>;
interface MenuListScreenProps {
  route: { params: MenuListProps };
  navigation: MenuListNavigationProps;
}

const MenuList = (props: MenuListScreenProps) => {

  return (
    <MenuListLayout />
  );
};

export default MenuList;
