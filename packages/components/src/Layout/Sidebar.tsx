import React, { PropsWithChildren } from "react";
import { SliderStyled, SidebarMenuItem } from "./styles";
import { ILayoutMenuItem, ILayoutSidebarProps } from "./types";
import { Flex } from "../Flex";
import { Text } from "../typography/Text";

const Sidebar = ({
  children,
  isCollapsed,
  menuItems,
  renderMenuItem,
  isCollapsible,
  collapsedWidth,
  className
}: PropsWithChildren<ILayoutSidebarProps>): React.ReactElement => {
  const defaultRenderMenuItem = (item: ILayoutMenuItem): React.ReactNode => (
    <SidebarMenuItem
      key={item.key}
      onClick={item.onClick}
      isActive={item.isActive}
      isCollapsed={isCollapsed}
      isDisabled={item.isDisabled}>
      {item.icon}
      {!isCollapsed && <Text size="xs" className="menu-label">{item.label}</Text>}
    </SidebarMenuItem>
  );

  return (
    <SliderStyled
      isCollapsed={isCollapsed}
      isCollapsible={isCollapsible}
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
