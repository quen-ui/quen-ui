import React from "react";

export interface ILayoutMenuItem {
  key: string;
  icon?: React.ReactNode;
  label: React.ReactNode;
  onClick?: () => void;
  isActive?: boolean;
  isDisabled?: boolean;
}

export interface ILayoutContextProps {
  isMobile: boolean;
  sidebarOpen: boolean;
  sliderCollapsed: boolean;
  toggleSidebar: () => void;
  toggleSliderCollapse: () => void;
}

export interface ILayoutHeaderProps {
  className?: string;
  style?: React.CSSProperties;
  height?: string;
  menuItems?: ILayoutMenuItem[];
  renderMenuItem?: (item: ILayoutMenuItem) => React.ReactNode;
  logo?: React.ReactNode;
}

export interface ILayoutProps {
  breakpoint?: number;
}

export interface ILayoutSidebarProps {
  isCollapsed?: boolean;
  isCollapsible?: boolean;
  collapsedWidth?: number;
  className?: string;
  menuItems?: ILayoutMenuItem[];
  renderMenuItem?: (item: ILayoutMenuItem) => React.ReactNode;
}
