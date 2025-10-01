import {
  IMenuDefaultItem,
  IMenuProps,
  TMenuPropGetItemIcon,
  TMenuPropGetItemClassName,
  TMenuPropGetItemLabel,
  TMenuPropGetItemKey,
  TMenuPropGetItemDisabled,
  TMenuPropGetItemOnClick,
  TMenuRecursiveItem
} from "./types";

const defaultGetItemKey: TMenuPropGetItemKey<
  TMenuRecursiveItem<IMenuDefaultItem>
> = (item) => item.key;
const defaultGetItemLabel: TMenuPropGetItemLabel<
  TMenuRecursiveItem<IMenuDefaultItem>
> = (item) => item.label;
const defaultGetItemDisabled: TMenuPropGetItemDisabled<
  TMenuRecursiveItem<IMenuDefaultItem>
> = (item) => item.disabled;
const defaultGetItemLeftContent: TMenuPropGetItemIcon<
  TMenuRecursiveItem<IMenuDefaultItem>
> = (item) => item.leftContent;
const defaultGetItemRightContent: TMenuPropGetItemIcon<
  TMenuRecursiveItem<IMenuDefaultItem>
> = (item) => item.rightContent;
const defaultGetItemOnClick: TMenuPropGetItemOnClick<
  TMenuRecursiveItem<IMenuDefaultItem>
> = (item) => item.onClick;
const defaultGetItemClassName: TMenuPropGetItemClassName<
  TMenuRecursiveItem<IMenuDefaultItem>
> = (item) => item.className;

export const withDefaultGetters = <Item extends Record<string, any>>(
  props: IMenuProps<Item>
) => ({
  ...props,
  getItemKey: props.getItemKey || defaultGetItemKey,
  getItemLabel: props.getItemLabel || defaultGetItemLabel,
  getItemDisabled: props.getItemDisabled || defaultGetItemDisabled,
  getItemLeftContent: props.getItemLeftContent || defaultGetItemLeftContent,
  getItemRightContent: props.getItemRightContent || defaultGetItemRightContent,
  getItemOnClick: props.getItemOnClick || defaultGetItemOnClick,
  getItemClassName: props.getItemClassName || defaultGetItemClassName
});
