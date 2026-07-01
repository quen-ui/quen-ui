import React from "react";
import { DropdownItemStyled } from "./styles";
import { TDropdownItemProps } from "./types";

const DropdownItem = <ITEM,>({
  getItemDisabled,
  getItemOnClick,
  getItemLabel,
  onItemClick,
  item,
  getItemLeftContent,
  size,
  classNames,
  styles
}: TDropdownItemProps<ITEM>): React.ReactElement => {
  const isDisabled = getItemDisabled?.(item);

  const handleClick = (event: React.MouseEvent): void => {
    if (isDisabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    getItemOnClick?.(item)?.(item, event);
    onItemClick?.(item, event);
  };

  return (
    <DropdownItemStyled
      size={size}
      disabled={isDisabled}
      onClick={handleClick}
      data-semantic="item"
      className={classNames?.item}
      style={styles?.item}>
      <span
        data-semantic="itemLeftContent"
        className={classNames?.itemLeftContent}
        style={styles?.itemLeftContent}>
        {getItemLeftContent?.(item)}
      </span>
      <span
        data-semantic="itemLabel"
        className={classNames?.itemLabel}
        style={styles?.itemLabel}>
        {getItemLabel(item)}
      </span>
    </DropdownItemStyled>
  );
};

export default DropdownItem;
