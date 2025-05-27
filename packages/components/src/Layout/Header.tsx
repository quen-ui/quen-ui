import React, { PropsWithChildren } from "react";
import { ILayoutHeaderProps, ILayoutMenuItem } from "./types";
import { HeaderStyled, HeaderMenuItem } from "./styles";
import { useLayout } from "./Layout";
import { Flex } from "../Flex";
import { Button } from "../Button";
import IconLines from "../assets/icon-lines.svg?react";
import IconClose from "../assets/icon-close.svg?react";

const Header = ({
  children,
  className,
  style,
  height,
  menuItems,
  renderMenuItem,
  logo
}: PropsWithChildren<ILayoutHeaderProps>): React.ReactNode => {
  const { isMobile, toggleSidebar, sidebarOpen } = useLayout();

  const defaultRenderMenuItem = (item: ILayoutMenuItem): React.ReactNode => (
    <HeaderMenuItem
      key={item.key}
      onClick={item.onClick}
      isActive={item.isActive}
      isDisabled={item.isDisabled}>
      {item.icon}
      {item.label}
    </HeaderMenuItem>
  );

  return (
    <HeaderStyled className={className} style={style} height={height}>
      <Flex gap="s" align="center">
        {isMobile && (
          <Button onClick={toggleSidebar}>
            {sidebarOpen ? <IconClose /> : <IconLines />}
          </Button>
        )}
        {logo}
      </Flex>
      <Flex align="center" justify="space-between">
        {children}
        {menuItems && (
          <Flex gap="xs">
            {menuItems.map((item) =>
              renderMenuItem ? (
                <HeaderMenuItem key={item.key}>{renderMenuItem(item)}</HeaderMenuItem>
              ) : (
                defaultRenderMenuItem(item)
              )
            )}
          </Flex>
        )}
      </Flex>
    </HeaderStyled>
  );
};

export default Header;
