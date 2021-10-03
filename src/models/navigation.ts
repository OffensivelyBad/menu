import { MenuProps } from '../screens/menu';
import { EditMenuProps } from '../screens/edit_menu';

export enum NavigationScreens {
  Menu = 'Menu',
  EditMenu = 'EditMenu'
}

export type NavigationPropList = {
  Menu: MenuProps;
  EditMenu: EditMenuProps;
};
