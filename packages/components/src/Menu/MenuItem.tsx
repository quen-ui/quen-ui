import { useState, useRef } from "react";
import { Text } from "../typography/Text";
import {
  MenuItemStyled,
  SubMenuHorizontalStyled,
  SubMenuVerticalStyled
} from "./styles";
import ArrowBottomIcon from "../assets/icon-arrow-bottom.svg";
import { IMenuItemProps } from "./types";

const MenuItem = <Item extends Record<string, any>>({
  item,
  getItemLabel,
  getItemClassName,
  getItemDisabled,
  getItemLeftContent,
  getItemKey,
  getItemOnClick,
  getItemRightContent,
  size,
  direction,
  activeKeys,
  arrowIcon,
  level = 1
}: IMenuItemProps<Item>) => {
  const refMenuItem = useRef<HTMLButtonElement>(null);
  const hasChildren = !!item.children?.length;
  const [visible, setVisible] = useState(false);

  const handleMouseEnter = () => {
    setVisible(true);
  };

  const handleMouseLeave = () => {
    setVisible(false);
  };

  console.log(
    item,
    refMenuItem.current?.getBoundingClientRect(),
    refMenuItem.current?.parentElement?.getBoundingClientRect().y
  );

  return (
    <>
      <MenuItemStyled
        ref={refMenuItem}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        key={getItemKey(item)}
        hover={
          !getItemDisabled(item) &&
          ((hasChildren && direction === "horizontal") || !hasChildren)
        }
        disabled={getItemDisabled(item)}
        className={getItemClassName(item)}
        active={activeKeys?.includes(getItemKey(item))}
        onClick={getItemOnClick(item)}>
        {getItemLeftContent(item)}
        <Text
          size={size}
          className={
            hasChildren && direction === "vertical"
              ? "quen-ui--menu__item_group"
              : undefined
          }>
          {getItemLabel(item)}
        </Text>
        {getItemRightContent(item)}
        {arrowIcon && (
          <ArrowBottomIcon className="quen-ui--menu__item_icon-arrow" />
        )}
      </MenuItemStyled>
      {hasChildren && direction === "horizontal" && (
        <SubMenuHorizontalStyled
          visible={visible}
          left={
            level === 1
              ? (refMenuItem.current?.getBoundingClientRect().x ?? 0) -
                (refMenuItem.current?.parentElement?.getBoundingClientRect()
                  .x ?? 0)
              : (refMenuItem.current?.getBoundingClientRect().width ?? 0)
          }
          top={
            level === 1
              ? (refMenuItem.current?.getBoundingClientRect().height ?? 0)
              : (refMenuItem.current?.offsetTop ?? 0)
          }
          className="quen-ui--menu__submenu"
          onMouseEnter={() => setVisible(true)}
          onMouseLeave={() => setVisible(false)}>
          {item.children!.map((child) => (
            <MenuItem
              key={getItemKey(child)}
              item={child}
              size={size}
              getItemKey={getItemKey}
              getItemLabel={getItemLabel}
              getItemLeftContent={getItemLeftContent}
              getItemRightContent={getItemRightContent}
              getItemDisabled={getItemDisabled}
              activeKeys={activeKeys}
              getItemClassName={getItemClassName}
              getItemOnClick={getItemOnClick}
              direction={direction}
              arrowIcon={!!child.children}
              level={level + 1}
            />
          ))}
        </SubMenuHorizontalStyled>
      )}
      {hasChildren && direction === "vertical" && (
        <SubMenuVerticalStyled level={level}>
          {item.children!.map((child) => (
            <MenuItem
              key={getItemKey(child)}
              item={child}
              size={size}
              getItemKey={getItemKey}
              getItemLabel={getItemLabel}
              getItemLeftContent={getItemLeftContent}
              getItemRightContent={getItemRightContent}
              getItemDisabled={getItemDisabled}
              activeKeys={activeKeys}
              getItemClassName={getItemClassName}
              getItemOnClick={getItemOnClick}
              direction={direction}
            />
          ))}
        </SubMenuVerticalStyled>
      )}
    </>
  );
};

export default MenuItem;
