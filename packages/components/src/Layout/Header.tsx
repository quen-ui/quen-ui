import React, { PropsWithChildren } from "react";
import { ILayoutHeaderProps } from "./types";
import { HeaderStyled } from "./styles";
import { useLayout } from "./Layout";
import { Flex } from "../Flex";
import { Button } from "../Button";
import IconLines from "../assets/icon-lines.svg";
import IconClose from "../assets/icon-close.svg";
import { Menu } from "../Menu";

const Header = ({
  children,
  className,
  style,
  height,
  menuItems,
  logo,
  classNameMenuItem,
  activeMenuKeys
}: PropsWithChildren<ILayoutHeaderProps>): React.ReactNode => {
  const { mobile, toggleSidebar, sidebarOpen } = useLayout();

  return (
    <HeaderStyled className={className} style={style} height={height}>
      <Flex gap="s" align="center" className="quen-ui__layout-header__logo-wrapper">
        {mobile && (
          <Button onClick={toggleSidebar}>
            {sidebarOpen ? <IconClose /> : <IconLines />}
          </Button>
        )}
        {logo}
      </Flex>
      <Flex
        align="center"
        justify="space-between"
        className="quen-ui__layout-header__content"
        wrap="wrap">
        {menuItems && menuItems.length && (
          <Menu
            className="quen-ui__layout-header__content__menu-items"
            items={menuItems}
            direction="horizontal"
            size="s"
            classNameMenuItem={classNameMenuItem}
            activeKeys={activeMenuKeys}
          />
        )}
        {children}
      </Flex>
    </HeaderStyled>
  );
};

export default Header;
