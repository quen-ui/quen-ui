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
  size
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
    <DropdownItemStyled size={size} disabled={isDisabled} onClick={handleClick}>
      {getItemLeftContent?.(item)}
      {getItemLabel(item)}
    </DropdownItemStyled>
  );
};

export default DropdownItem;
