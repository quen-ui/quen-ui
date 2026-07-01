import { useState, useRef } from "react";
import { cnMerge } from "@quen-ui/helpers";
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
  className,
  level = 1,
  classNames,
  styles
}: IMenuItemProps<Item>) => {
  const refMenuItem = useRef<HTMLButtonElement>(null);
  const hasChildren = !!item.children?.length;
  const [visible, setVisible] = useState(false);
  const { key: _, ...otherProps } = item;

  const handleMouseEnter = () => {
    setVisible(true);
  };

  const handleMouseLeave = () => {
    setVisible(false);
  };

  return (
    <>
      <MenuItemStyled
        data-semantic="item"
        ref={refMenuItem}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        key={getItemKey(item)}
        hover={
          !getItemDisabled(item) &&
          ((hasChildren && direction === "horizontal") || !hasChildren)
        }
        disabled={getItemDisabled(item)}
        className={cnMerge(getItemClassName(item), className, classNames?.item)}
        style={styles?.item}
        active={activeKeys?.includes(getItemKey(item))}
        onClick={getItemOnClick(item)}
        as={item.as}
        {...otherProps}>
        <span
          data-semantic="itemLeftContent"
          className={classNames?.itemLeftContent}
          style={styles?.itemLeftContent}>
          {getItemLeftContent(item)}
        </span>
        <Text
          data-semantic="itemLabel"
          size={size}
          style={styles?.itemLabel}
          className={cnMerge(
            {
              "quen-ui--menu__item_group":
                hasChildren && direction === "vertical"
            },
            "quen-ui--menu__item_label",
            classNames?.itemLabel
          )}>
          {getItemLabel(item)}
        </Text>
        <span
          data-semantic="itemRightContent"
          className={classNames?.itemRightContent}
          style={styles?.itemRightContent}>
          {getItemRightContent(item)}
        </span>
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
          data-semantic="submenu"
          className="quen-ui--menu__submenu"
          onMouseEnter={() => setVisible(true)}
          onMouseLeave={() => setVisible(false)}>
          {item.children!.map((child) => (
            <MenuItem
              className={className}
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
        <SubMenuVerticalStyled level={level} data-semantic="submenu">
          {item.children!.map((child) => (
            <MenuItem
              className={className}
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
