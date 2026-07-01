import { useMemo } from "react";
import type {
  IMenuProps,
  IMenuDefaultItem,
  TMenuPropGetItemKey,
  TMenuPropGetItemLabel,
  TMenuPropGetItemOnClick,
  TMenuPropGetItemDisabled,
  TMenuPropGetItemClassName,
  TMenuPropGetItemIcon
} from "./types";
import { withDefaultGetters } from "./helpers";
import MenuItem from "./MenuItem";
import { MenuStyled } from "./styles";
import { cnMerge, deepMerge } from "@quen-ui/helpers";

const Menu = <Item extends Record<string, any> = IMenuDefaultItem>(
  props: IMenuProps<Item>
) => {
  const direction = useMemo(() => {
    return props.direction === "vertical" ? "column" : "row";
  }, [props.direction]);

  const {
    items,
    getItemRightContent,
    getItemDisabled,
    getItemLeftContent,
    getItemKey,
    getItemLabel,
    getItemClassName,
    className,
    getItemOnClick,
    style,
    classNames,
    styles
  } = withDefaultGetters(props);

  return (
    <MenuStyled
      gap="xs"
      direction={direction}
      className={cnMerge(className, classNames?.root)}
      style={deepMerge(style ?? {}, styles?.root ?? {})}
      data-semantic="root">
      {(items ?? []).map((item) => (
        <MenuItem
          className={cnMerge(props.classNameMenuItem, classNames?.item)}
          item={item}
          styles={styles}
          classNames={classNames}
          key={getItemKey(item as Item & IMenuDefaultItem)}
          getItemKey={getItemKey as TMenuPropGetItemKey<Item>}
          getItemLabel={getItemLabel as TMenuPropGetItemLabel<Item>}
          getItemOnClick={getItemOnClick as TMenuPropGetItemOnClick<Item>}
          getItemDisabled={getItemDisabled as TMenuPropGetItemDisabled<Item>}
          getItemClassName={getItemClassName as TMenuPropGetItemClassName<Item>}
          getItemLeftContent={getItemLeftContent as TMenuPropGetItemIcon<Item>}
          getItemRightContent={
            getItemRightContent as TMenuPropGetItemIcon<Item>
          }
          size={props.size}
          activeKeys={props.activeKeys}
          direction={props.direction || "horizontal"}
        />
      ))}
    </MenuStyled>
  );
};

export default Menu;
