import React, { PropsWithChildren } from "react";
import { SliderStyled, SidebarMenuItem } from "./styles";
import { ILayoutMenuItem, ILayoutSidebarProps } from "./types";
import { Flex } from "../Flex";
import { Text } from "../typography/Text";

const Sidebar = ({
  children,
  collapsed,
  menuItems,
  renderMenuItem,
  collapsible,
  collapsedWidth,
  className
}: PropsWithChildren<ILayoutSidebarProps>): React.ReactElement => {
  const defaultRenderMenuItem = (item: ILayoutMenuItem): React.ReactNode => (
    <SidebarMenuItem
      key={item.key}
      onClick={item.onClick}
      active={item.active}
      collapsed={collapsed}
      disabled={item.disabled}>
      {item.icon}
      {!collapsed && <Text size="xs" className="menu-label">{item.label}</Text>}
    </SidebarMenuItem>
  );

  return (
    <SliderStyled
      collapsed={collapsed}
      collapsible={collapsible}
      className={className}
      collapsedWidth={collapsedWidth}>
      {children}
      {menuItems && (
        <Flex direction="column">
          {menuItems.map((item) =>
            renderMenuItem ? renderMenuItem(item) : defaultRenderMenuItem(item)
          )}
        </Flex>
      )}
    </SliderStyled>
  );
};

export default Sidebar;
