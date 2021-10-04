import create from 'zustand';
import { MenuItemModel } from '.';
import { removeMenuItem, replaceMenuItem } from '../utils';

type MenuItemStore = {
  items: MenuItemModel[];
  addItem: (item: MenuItemModel) => void;
  addItems: (items: MenuItemModel[]) => void;
  removeItem: (item: MenuItemModel) => void;
  removeAllItems: () => void;
  replaceItem: (oldItem: MenuItemModel, newItem: MenuItemModel) => void;
};

export const useMenuItemStore = create<MenuItemStore>(set => ({
  items: [],
  addItem: (item: MenuItemModel) => set(state => ({ items: [item, ...state.items] })),
  addItems: (items: MenuItemModel[]) => set(state => ({ items: [...items, ...state.items] })),
  removeItem: (item: MenuItemModel) => set(state => ({ items: removeMenuItem(item, state.items) })),
  removeAllItems: () => set(() => ({ items: [] })),
  replaceItem: (oldItem: MenuItemModel, newItem: MenuItemModel) => set(state => ({ items: replaceMenuItem(oldItem, newItem, state.items) })),
}));
