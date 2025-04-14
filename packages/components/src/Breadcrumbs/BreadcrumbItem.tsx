import React from "react";
import { IBreadcrumbItemProps } from "./types";
import { BreadcrumbItemStyled } from "./styles";
import { Control } from "../typography/Control";
import { Button } from "../Button";

const BreadcrumbItem = <ITEM,>({
  item,
  getItemIcon,
  isOnlyIcon: isOnlyIconProps,
  getItemLabel,
  getItemHref,
  onItemClick,
  size = "m",
  getItemClassName,
  className,
  isLastItem
}: IBreadcrumbItemProps<ITEM>): React.ReactElement => {
  const Icon = item && getItemIcon?.(item);
  const isOnlyIcon = Icon && isOnlyIconProps;
  const label = item && getItemLabel?.(item);
  const href = item && getItemHref?.(item);
  const _className = item && getItemClassName?.(item);

  const handleClick = (e: React.MouseEvent) => {
    onItemClick?.(item, e);
  };

  const linkProps = href ? { as: "a", href } : { as: "span" };

  return (
    <BreadcrumbItemStyled
      className={`${className} ${_className}`}
      isLastItem={isLastItem}
      {...linkProps}
      onClick={handleClick}>
      <Control size={size}>
        {isOnlyIcon ? (
          <Button view="icon" size={size}>
            {Icon}
          </Button>
        ) : (
          <>
            {Icon}
            {label}
          </>
        )}
      </Control>
    </BreadcrumbItemStyled>
  );
};

export default BreadcrumbItem;
