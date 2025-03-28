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
}: TDropdownItemProps<ITEM>): React.ReactElement => (
  <DropdownItemStyled
    size={size}
    isDisabled={getItemDisabled?.(item)}
    onClick={(event) => {
      event.preventDefault();
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      getItemOnClick?.(item)
        ? getItemOnClick?.(item)?.(item, event)
        : onItemClick?.(item, event);
    }}>
    {getItemLeftContent?.(item)}
    {getItemLabel(item)}
  </DropdownItemStyled>
);

export default DropdownItem;
