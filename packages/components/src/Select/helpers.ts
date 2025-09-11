import {
  TSelectProps,
  TSelectGetItemLabel,
  ISelectDefaultItem,
  TSelectGetItemValue,
  TSelectGetItemDisabled,
  TSelectGetItemIcon
} from "./types";

const defaultGetItemLabel: TSelectGetItemLabel<ISelectDefaultItem> = (item) =>
  item.label;
const defaultGetItemValue: TSelectGetItemValue<ISelectDefaultItem> = (item) =>
  item?.value || null;
const defaultGetItemDisabled: TSelectGetItemDisabled<ISelectDefaultItem> = (
  item
) => item.disabled;

const defaultGetItemIcon: TSelectGetItemIcon<ISelectDefaultItem> = (
  item
) => item.icon;


export function withDefaultGetters<ITEM>(props: TSelectProps<ITEM>) {
  return {
    ...props,
    getItemLabel: props.getItemLabel || defaultGetItemLabel,
    getItemValue: props.getItemValue || defaultGetItemValue,
    getItemDisabled: props.getItemDisabled || defaultGetItemDisabled,
    getItemIcon: props.getItemIcon || defaultGetItemIcon
  };
}
