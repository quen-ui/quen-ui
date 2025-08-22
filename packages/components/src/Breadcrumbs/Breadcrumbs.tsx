import React from "react";
import { IBreadcrumbsProps, TBreadcrumbsPropOnItemClick, IBreadcrumbItemDefault } from "./types";
import { widthDefaultGetters } from "./helpers";
import BreadcrumbItem from "./BreadcrumbItem";
import { BreadcrumbsStyled } from "./styles";

const Breadcrumbs = <Item = IBreadcrumbItemDefault>(props: IBreadcrumbsProps<Item>): React.ReactElement => {
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
    isOnlyIconRoot
  } = widthDefaultGetters<Item>(props);
  const handleClick: TBreadcrumbsPropOnItemClick<Item> = (item, e) => {
    getItemOnClick(item as any)?.(e);
    onItemClick?.(item, e);
  };
  return (
    <BreadcrumbsStyled className={className}>
      {items.map((item, index) => (
        <React.Fragment key={getItemLabel(item as any)}>
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
            isOnlyIcon={isOnlyIconRoot && index === 0}
            isLastItem={index === items.length - 1}
          />
          {index + 1 < items.length && separator}
        </React.Fragment>
      ))}
    </BreadcrumbsStyled>
  );
};

export default Breadcrumbs;
