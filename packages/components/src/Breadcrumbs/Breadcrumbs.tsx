import React from "react";
import { IBreadcrumbsProps, TBreadcrumbsPropOnItemClick } from "./types";
import { widthDefaultGetters } from "./helpers";
import BreadcrumbItem from "./BreadcrumbItem";
import { BreadcrumbsStyled } from "./styles";

const Breadcrumbs = (props: IBreadcrumbsProps): React.ReactElement => {
  const {
    items,
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
  } = widthDefaultGetters(props);
  const handleClick: TBreadcrumbsPropOnItemClick = (item, e) => {
    getItemOnClick(item)?.(e);
    onItemClick?.(item, e);
  };
  return (
    <BreadcrumbsStyled className={className}>
      {items.map((item, index) => (
        <React.Fragment key={getItemLabel(item)}>
          <BreadcrumbItem
            className={classNameItem}
            size={size}
            item={item}
            key={getItemLabel(item)}
            getItemHref={getItemHref}
            getItemLabel={getItemLabel}
            getItemClassName={getItemClassName}
            getItemIcon={getItemIcon}
            onItemClick={handleClick}
            isOnlyIcon={isOnlyIconRoot && index === 0}
            isLastItem={index === items.length - 1}
          />
          {separator}
        </React.Fragment>
      ))}
    </BreadcrumbsStyled>
  );
};

export default Breadcrumbs;
