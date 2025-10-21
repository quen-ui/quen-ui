import {
  IAccordionProps,
  IAccordionDefaultItem,
  TAccordionGetItemDisabled,
  TAccordionGetItemChildren,
  TAccordionGetItemKey,
  TAccordionGetItemLabel,
  TAccordionGetItemLeftContent,
  TAccordionGetItemRightContent,
  TAccordionGetItemClassName,
  TAccordionGetItemShowArrow,
  TAccordionGetItemStyle
} from "./types";

const defaultGetItemKey: TAccordionGetItemKey<IAccordionDefaultItem> = (item) =>
  item.key;

const defaultGetItemDisabled: TAccordionGetItemDisabled<
  IAccordionDefaultItem
> = (item) => item.disabled;

const defaultGetItemChildren: TAccordionGetItemChildren<
  IAccordionDefaultItem
> = (item) => item.children;

const defaultGetItemLabel: TAccordionGetItemLabel<IAccordionDefaultItem> = (
  item
) => item.label;

const defaultGetItemLeftContent: TAccordionGetItemLeftContent<
  IAccordionDefaultItem
> = (item) => item.leftContent;

const defaultGetItemRightContent: TAccordionGetItemRightContent<
  IAccordionDefaultItem
> = (item) => item.rightContent;

const defaultGetItemClassName: TAccordionGetItemClassName<
  IAccordionDefaultItem
> = (item) => item.className;

const defaultGetItemShowArrow: TAccordionGetItemShowArrow<
  IAccordionDefaultItem
> = (item) => item.showArrow;

const defaultGetItemStyle: TAccordionGetItemStyle<
  IAccordionDefaultItem
> = (item) => item.style;

export const withDefaultGetters = <Item>(props: IAccordionProps<Item>) => ({
  ...props,
  getItemKey: props.getItemKey || defaultGetItemKey,
  getItemDisabled: props.getItemDisabled || defaultGetItemDisabled,
  getItemChildren: props.getItemChildren || defaultGetItemChildren,
  getItemLabel: props.getItemLabel || defaultGetItemLabel,
  getItemLeftContent: props.getItemLeftContent || defaultGetItemLeftContent,
  getItemRightContent: props.getItemRightContent || defaultGetItemRightContent,
  getItemClassName: props.getItemClassName || defaultGetItemClassName,
  getItemShowArrow: props.getItemShowArrow || defaultGetItemShowArrow,
  getItemStyle: props.getItemStyle || defaultGetItemStyle,
});
