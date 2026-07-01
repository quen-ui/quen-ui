import React, { PropsWithChildren } from "react";
import { SidebarStyled, SidebarMenuStyled } from "./styles";
import { ILayoutSidebarProps } from "./types";
import { useLayout } from "./Layout";
import { Drawer } from "../Drawer";

const Sidebar = ({
  children,
  collapsed,
  menuItems,
  collapsible,
  collapsedWidth,
  className,
  titleDrawer,
  classNameMenuItem,
  activeMenuKeys,
  style
}: PropsWithChildren<ILayoutSidebarProps>): React.ReactElement => {
  const { mobile, toggleSidebar, sidebarOpen, isFooter } = useLayout();
  if (mobile) {
    return (
      <Drawer
        open={sidebarOpen}
        onClose={toggleSidebar}
        title={titleDrawer}
        classNames={{ root: className }}
        styles={{ root: style }}>
        {children}
        {menuItems && menuItems.length && (
          <SidebarMenuStyled
            direction="vertical"
            items={menuItems}
            size="s"
            classNameMenuItem={classNameMenuItem}
            activeKeys={activeMenuKeys}
          />
        )}
      </Drawer>
    );
  }

  return (
    <SidebarStyled
      style={style}
      isFooter={isFooter}
      collapsed={collapsed}
      collapsible={collapsible}
      className={className}
      collapsedWidth={collapsedWidth}>
      {children}
      {menuItems && menuItems.length && (
        <SidebarMenuStyled
          direction="vertical"
          items={menuItems}
          size="s"
          classNameMenuItem={classNameMenuItem}
          activeKeys={activeMenuKeys}
        />
      )}
    </SidebarStyled>
  );
};

export default Sidebar;
