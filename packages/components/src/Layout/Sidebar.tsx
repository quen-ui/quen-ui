import React, { PropsWithChildren } from "react";
import { SliderStyled, SidebarMenuStyled } from "./styles";
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
  classNameMenuItem
}: PropsWithChildren<ILayoutSidebarProps>): React.ReactElement => {
  const { mobile, toggleSidebar, sidebarOpen } = useLayout();
  if (mobile) {
    return (
      <Drawer open={sidebarOpen} onClose={toggleSidebar} title={titleDrawer}>
        {children}
        {menuItems && menuItems.length && (
          <SidebarMenuStyled
            direction="vertical"
            items={menuItems}
            size="s"
            classNameMenuItem={classNameMenuItem}
          />
        )}
      </Drawer>
    );
  }

  return (
    <SliderStyled
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
        />
      )}
    </SliderStyled>
  );
};

export default Sidebar;
