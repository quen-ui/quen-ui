import {
  IRadioGroupDefaultItem,
  TRadioGroupPropGetItemDisabled,
  TRadioGroupPropGetItemLabel,
  TRadioGroupPropGetItemValue,
  TRadioGroupPropGetItemKey,
  IRadioGroupProps
} from "./types";

const defaultGetItemKey: TRadioGroupPropGetItemKey<
  IRadioGroupDefaultItem
> = (item) => item.key;
const defaultGetItemLabel: TRadioGroupPropGetItemLabel<
  IRadioGroupDefaultItem
> = (item) => item.label;
const defaultGetItemDisabled: TRadioGroupPropGetItemDisabled<
  IRadioGroupDefaultItem
> = (item) => item.isDisabled;
const defaultGetItemValue: TRadioGroupPropGetItemValue<
  IRadioGroupDefaultItem
> = (item) => item.value;

export const withDefaultGetters = <TItem,>(props: IRadioGroupProps<TItem>) => ({
  ...props,
  getItemKey: props.getItemKey || defaultGetItemKey,
  getItemLabel: props.getItemLabel || defaultGetItemLabel,
  getItemDisabled: props.getItemDisabled || defaultGetItemDisabled,
  getItemValue: props.getItemValue || defaultGetItemValue,
});
