import React from "react";
import { IBreadcrumbItemProps } from "./types";
import { BreadcrumbItemStyled } from "./styles";
import { Text } from "../typography/Text";
import { Button } from "../Button";
import { Flex } from "../Flex";

const BreadcrumbItem = <ITEM,>({
  item,
  getItemIcon,
  onlyIcon: onlyIconProps,
  getItemLabel,
  getItemHref,
  onItemClick,
  size = "m",
  getItemClassName,
  className,
  lastItem
}: IBreadcrumbItemProps<ITEM>): React.ReactElement => {
  const Icon = item && getItemIcon?.(item);
  const onlyIcon = Icon && onlyIconProps;
  const label = item && getItemLabel?.(item);
  const href = item && getItemHref?.(item);
  const _className = item && getItemClassName?.(item);

  const handleClick = (e: React.MouseEvent) => {
    onItemClick?.(item, e);
  };

  const linkProps = href ? { as: "a", href } : { as: "span" };

  return (
    <BreadcrumbItemStyled
      className={`${className} ${_className ?? ""}`.trim()}
      lastItem={lastItem}
      {...linkProps}
      onClick={handleClick}>
      <Text size={size}>
        {onlyIcon ? (
          <Button view="icon" size={size} className="quen-ui__breadcrumb--icon">
            {Icon}
          </Button>
        ) : (
          <Flex align="center" gap={4}>
            {Icon}
            {label}
          </Flex>
        )}
      </Text>
    </BreadcrumbItemStyled>
  );
};

export default BreadcrumbItem;
