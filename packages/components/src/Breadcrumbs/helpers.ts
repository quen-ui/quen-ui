import {
  IBreadcrumbsProps,
  IBreadcrumbItemDefault,
  TBreadcrumbPropGetItemIcon,
  TBreadcrumbPropGetItemHref,
  TBreadcrumbPropGetItemLabel,
  TBreadcrumbPropGetItemOnClick,
  TBreadcrumbsPropGetItemClassname
} from "./types";

const defaultGetItemLabel: TBreadcrumbPropGetItemLabel<
  IBreadcrumbItemDefault
> = (item) => item.label;
const defaultGetItemIcon: TBreadcrumbPropGetItemIcon<IBreadcrumbItemDefault> = (
  item
) => item.icon;
const defaultGetItemHref: TBreadcrumbPropGetItemHref<IBreadcrumbItemDefault> = (
  item
) => item.href;
const defaultGetItemClassname: TBreadcrumbsPropGetItemClassname<
  IBreadcrumbItemDefault
> = (item) => item.className;
const defaultGetItemOnClick: TBreadcrumbPropGetItemOnClick<
  IBreadcrumbItemDefault
> = (item) => item.onClick;

export function widthDefaultGetters<ITEM>(props: IBreadcrumbsProps<ITEM>) {
  return {
    ...props,
    getItemLabel: props.getItemLabel || defaultGetItemLabel,
    getItemHref: props.getItemHref || defaultGetItemHref,
    getItemIcon: props.getItemIcon || defaultGetItemIcon,
    getItemClassName: props.getItemClassName || defaultGetItemClassname,
    getItemOnClick: props.getItemOnClick || defaultGetItemOnClick
  };
}
