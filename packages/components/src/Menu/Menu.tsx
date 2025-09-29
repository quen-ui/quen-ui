import { useMemo } from "react";
import { Flex } from "../Flex";
import type { IMenuProps, IMenuDefaultItem } from "./types";
import { MenuItemStyled } from "./styles";
import { withDefaultGetters } from "./helpers";
import { Text } from "../typography/Text";

const Menu = <Item = IMenuDefaultItem,>(props: IMenuProps<Item>) => {
  const direction = useMemo(() => {
    return props.direction === "vertical" ? "column" : "row";
  }, [props.direction]);

  const {
    items,
    getItemActive,
    getItemRightContent,
    getItemDisabled,
    getItemLeftContent,
    getItemKey,
    getItemLabel,
    getItemClassName,
    className,
    getItemOnClick,
    style
  } = withDefaultGetters(props);

  return (
    <Flex gap="xs" direction={direction} className={className} style={style}>
      {items.map((item) => (
        <MenuItemStyled
          key={getItemKey(item as Item & IMenuDefaultItem)}
          disabled={getItemDisabled(item as Item & IMenuDefaultItem)}
          className={getItemClassName(item as Item & IMenuDefaultItem)}
          active={getItemActive(item as Item & IMenuDefaultItem)}
          onClick={getItemOnClick(item as Item & IMenuDefaultItem)}>
          {getItemLeftContent(item as Item & IMenuDefaultItem)}
          <Text>{getItemLabel(item as Item & IMenuDefaultItem)}</Text>
          {getItemRightContent(item as Item & IMenuDefaultItem)}
        </MenuItemStyled>
      ))}
    </Flex>
  );
};

export default Menu;
