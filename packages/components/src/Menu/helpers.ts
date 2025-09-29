import {
  IMenuDefaultItem,
  IMenuProps,
  TMenuPropGetItemIcon,
  TMenuPropGetItemClassName,
  TMenuPropGetItemLabel,
  TMenuPropGetItemKey,
  TMenuPropGetItemDisabled,
  TMenuPropGetItemActive,
  TMenuPropGetItemOnClick
} from "./types";

const defaultGetItemKey: TMenuPropGetItemKey<IMenuDefaultItem> = (item) =>
  item.key;
const defaultGetItemLabel: TMenuPropGetItemLabel<IMenuDefaultItem> = (item) =>
  item.label;
const defaultGetItemDisabled: TMenuPropGetItemDisabled<IMenuDefaultItem> = (
  item
) => item.disabled;
const defaultGetItemLeftContent: TMenuPropGetItemIcon<IMenuDefaultItem> = (
  item
) => item.leftContent;
const defaultGetItemRightContent: TMenuPropGetItemIcon<IMenuDefaultItem> = (
  item
) => item.rightContent;
const defaultGetItemOnClick: TMenuPropGetItemOnClick<IMenuDefaultItem> = (
  item
) => item.onClick;
const defaultGetItemActive: TMenuPropGetItemActive<IMenuDefaultItem> = (item) =>
  item.active;
const defaultGetItemClassName: TMenuPropGetItemClassName<IMenuDefaultItem> = (
  item
) => item.className;

export const withDefaultGetters = <Item>(props: IMenuProps<Item>) => ({
  ...props,
  getItemKey: props.getItemKey || defaultGetItemKey,
  getItemLabel: props.getItemLabel || defaultGetItemLabel,
  getItemDisabled: props.getItemDisabled || defaultGetItemDisabled,
  getItemLeftContent: props.getItemLeftContent || defaultGetItemLeftContent,
  getItemRightContent: props.getItemRightContent || defaultGetItemRightContent,
  getItemOnClick: props.getItemOnClick || defaultGetItemOnClick,
  getItemActive: props.getItemActive || defaultGetItemActive,
  getItemClassName: props.getItemClassName || defaultGetItemClassName
});
