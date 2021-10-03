import { MenuItemModel } from '../models';
import { useMenuItemStore } from '../models/store';

export const useItems = (): MenuItemModel[] => {
  const items = useMenuItemStore(state => state.items);
  return items;
};

export const useAddItem = (): (item: MenuItemModel) => void => {
  const addItem = useMenuItemStore(state => state.addItem);
  return addItem;
};

export const useAddItems = (): (items: MenuItemModel[]) => void => {
  const addItems = useMenuItemStore(state => state.addItems);
  return addItems;
};

export const useRemoveItem = (): (item: MenuItemModel) => void => {
  const removeItem = useMenuItemStore(state => state.removeItem);
  return removeItem;
};

export const useRemoveAllItems = (): () => void => {
  const removeAllItems = useMenuItemStore(state => state.removeAllItems);
  return removeAllItems;
};

export const useReplaceItem = (): (oldItem: MenuItemModel, newItem: MenuItemModel) => void => {
  const replaceItem = useMenuItemStore(state => state.replaceItem);
  return replaceItem;
};
