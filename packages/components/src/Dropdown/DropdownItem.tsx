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
  const handleClick = (event: React.MouseEvent): void => {
    event.preventDefault();
    getItemOnClick?.(item)?.(item, event);
    onItemClick?.(item, event)
  }

  return (
    <DropdownItemStyled
      size={size}
      isDisabled={getItemDisabled?.(item)}
      onClick={handleClick}>
      {getItemLeftContent?.(item)}
      {getItemLabel(item)}
    </DropdownItemStyled>
  );
}

export default DropdownItem;
