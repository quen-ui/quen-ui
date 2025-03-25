import {
  ICheckboxGroupDefaultItem,
  TCheckboxGroupPropGetItemKey,
  TCheckboxGroupPropGetItemLabel,
  TCheckboxGroupPropGetItemDisabled,
  TCheckboxGroupPropGetItemValue,
  ICheckboxGroupProps
} from "./types";

const defaultGetItemKey: TCheckboxGroupPropGetItemKey<
  ICheckboxGroupDefaultItem
> = (item) => item.key;
const defaultGetItemLabel: TCheckboxGroupPropGetItemLabel<
  ICheckboxGroupDefaultItem
> = (item) => item.label;
const defaultGetItemDisabled: TCheckboxGroupPropGetItemDisabled<
  ICheckboxGroupDefaultItem
> = (item) => item.isDisabled;
const defaultGetItemValue: TCheckboxGroupPropGetItemValue<
  ICheckboxGroupDefaultItem
> = (item) => item.value;

export const withDefaultGetters = <TItem,>(props: ICheckboxGroupProps<TItem>) => ({
  ...props,
  getItemKey: props.getItemKey || defaultGetItemKey,
  getItemLabel: props.getItemLabel || defaultGetItemLabel,
  getItemDisabled: props.getItemDisabled || defaultGetItemDisabled,
  getItemValue: props.getItemValue || defaultGetItemValue,
});
