import { Fragment, type ReactElement } from "react";
import {
  IBreadcrumbsProps,
  TBreadcrumbsPropOnItemClick,
  IBreadcrumbItemDefault
} from "./types";
import { widthDefaultGetters } from "./helpers";
import BreadcrumbItem from "./BreadcrumbItem";
import { BreadcrumbsStyled } from "./styles";

const Breadcrumbs = <Item = IBreadcrumbItemDefault,>(
  props: IBreadcrumbsProps<Item>
): ReactElement => {
  const {
    items = [],
    onItemClick,
    getItemHref,
    getItemOnClick,
    className,
    getItemClassName,
    classNameItem,
    getItemIcon,
    getItemLabel,
    size,
    separator = "/",
    onlyIconRoot,
    ...otherProps
  } = widthDefaultGetters<Item>(props);
  const handleClick: TBreadcrumbsPropOnItemClick<Item> = (item, e) => {
    getItemOnClick(item as any)?.(e);
    onItemClick?.(item, e);
  };
  return (
    <BreadcrumbsStyled className={className} {...otherProps}>
      {items.map((item, index) => (
        <Fragment key={getItemLabel(item as any)}>
          <BreadcrumbItem<Item>
            className={classNameItem}
            size={size}
            item={item}
            key={getItemLabel(item as any)}
            getItemHref={getItemHref as any}
            getItemLabel={getItemLabel as any}
            getItemClassName={getItemClassName as any}
            getItemIcon={getItemIcon as any}
            onItemClick={handleClick}
            onlyIcon={onlyIconRoot && index === 0}
            lastItem={index === items.length - 1}
          />
          {index + 1 < items.length && separator}
        </Fragment>
      ))}
    </BreadcrumbsStyled>
  );
};

export default Breadcrumbs;
