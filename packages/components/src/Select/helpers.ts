import {
  TSelectProps,
  TSelectGetItemLabel,
  ISelectDefaultItem,
  TSelectGetItemValue,
  TSelectGetItemDisabled
} from "./types";

const defaultGetItemLabel: TSelectGetItemLabel<ISelectDefaultItem> = (item) =>
  item.label;
const defaultGetItemValue: TSelectGetItemValue<ISelectDefaultItem> = (item) =>
  item.value;
const defaultGetItemDisabled: TSelectGetItemDisabled<ISelectDefaultItem> = (
  item
) => item.isDisabled;

export function withDefaultGetters<ITEM>(props: TSelectProps<ITEM>) {
  return {
    ...props,
    getItemLabel: props.getItemLabel || defaultGetItemLabel,
    getItemValue: props.getItemValue || defaultGetItemValue,
    getItemDisabled: props.getItemDisabled || defaultGetItemDisabled
  };
}
