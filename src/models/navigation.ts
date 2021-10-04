import { MenuProps } from '../screens/menu';
import { EditMenuProps } from '../screens/edit_menu';
import { MenuListProps } from '../screens/menu_list/models';

export enum NavigationScreens {
  MenuList = 'MenuList',
  Menu = 'Menu',
  EditMenu = 'EditMenu',
}

export type NavigationPropList = {
  MenuList: MenuListProps;
  Menu: MenuProps;
  EditMenu: EditMenuProps;
};
