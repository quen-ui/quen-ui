import type { ReactElement, MouseEvent } from "react";
import { cnMerge } from "@quen-ui/helpers";
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
  lastItem,
  styles,
  classNames
}: IBreadcrumbItemProps<ITEM>): ReactElement => {
  const Icon = item && getItemIcon?.(item);
  const onlyIcon = Icon && onlyIconProps;
  const label = item && getItemLabel?.(item);
  const href = item && getItemHref?.(item);
  const _className = item && getItemClassName?.(item);

  const handleClick = (e: MouseEvent) => {
    onItemClick?.(item, e);
  };

  const linkProps = href ? { as: "a", href } : { as: "span" };

  return (
    <BreadcrumbItemStyled
      data-semantic="item"
      className={cnMerge(className, _className, classNames?.item)}
      style={styles?.item}
      lastItem={lastItem}
      {...linkProps}
      onClick={handleClick}>
      <Text
        size={size}
        data-semantic="text"
        className={classNames?.text}
        style={styles?.text}>
        {onlyIcon ? (
          <Button
            data-semantic="icon"
            view="icon"
            size={size}
            className={cnMerge("quen-ui__breadcrumb--icon", classNames?.icon)}
            style={styles?.icon}
            aria-label={label}>
            {Icon}
          </Button>
        ) : (
          <Flex align="center" gap={4}>
            <span
              data-semantic="icon"
              className={classNames?.icon}
              style={styles?.icon}>
              {Icon}
            </span>
            <span
              data-semantic="label"
              className={classNames?.label}
              style={styles?.label}>
              {label}
            </span>
          </Flex>
        )}
      </Text>
    </BreadcrumbItemStyled>
  );
};

export default BreadcrumbItem;
