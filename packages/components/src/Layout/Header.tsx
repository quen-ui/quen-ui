import React, { PropsWithChildren } from "react";
import { ILayoutHeaderProps, ILayoutMenuItem } from "./types";
import { HeaderStyled, LayoutMenuItem } from "./styles";
import { useLayout } from "./Layout";
import { Flex } from "../Flex";
import { Button } from "../Button";
import IconLines from "../assets/icon-lines.svg";
import IconClose from "../assets/icon-close.svg";

const Header = ({
  children,
  className,
  style,
  height,
  menuItems,
  renderMenuItem,
  logo,
  classNameMenuItem
}: PropsWithChildren<ILayoutHeaderProps>): React.ReactNode => {
  const { mobile, toggleSidebar, sidebarOpen } = useLayout();

  const defaultRenderMenuItem = (item: ILayoutMenuItem): React.ReactNode => (
    <LayoutMenuItem
      key={item.key}
      className={classNameMenuItem}
      onClick={item.onClick}
      active={item.active}
      disabled={item.disabled}>
      {item.icon}
      {item.label}
    </LayoutMenuItem>
  );

  return (
    <HeaderStyled className={className} style={style} height={height}>
      <Flex gap="s" align="center">
        {mobile && (
          <Button onClick={toggleSidebar}>
            {sidebarOpen ? <IconClose /> : <IconLines />}
          </Button>
        )}
        {logo}
      </Flex>
      <Flex align="center" justify="space-between" className="quen-ui__layout-header__content" wrap="wrap">
        {menuItems && (
          <Flex gap="xs">
            {menuItems.map((item) =>
              renderMenuItem ? (
                <LayoutMenuItem className={classNameMenuItem} key={item.key}>
                  {renderMenuItem(item)}
                </LayoutMenuItem>
              ) : (
                defaultRenderMenuItem(item)
              )
            )}
          </Flex>
        )}
        {children}
      </Flex>
    </HeaderStyled>
  );
};

export default Header;
