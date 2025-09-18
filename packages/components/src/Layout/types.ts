import React from "react";

export interface ILayoutMenuItem {
  /** Unique item identifier */
  key: string;
  /** Icon displayed before label */
  icon?: React.ReactNode;
  /** Menu item content */
  label: React.ReactNode;
  /** Click handler */
  onClick?: () => void;
  /** Visual active state (highlighting) */
  active?: boolean;
  /** Disables interaction */
  disabled?: boolean;
  /** Custom CSS classes */
  className?: string
}

export interface ILayoutContextProps {
  /** Mobile layout detection (based on breakpoint) */
  mobile: boolean;
  /** Mobile sidebar visibility state */
  sidebarOpen: boolean;
  /** Desktop sidebar collapsed state */
  sliderCollapsed: boolean;
  /** Toggles mobile sidebar visibility */
  toggleSidebar: () => void;
  /** Toggles desktop sidebar collapse state */
  toggleSliderCollapse: () => void;
}

export interface ILayoutHeaderProps {
  /** Custom CSS classes */
  className?: string;
  /**	Inline styles */
  style?: React.CSSProperties;
  /** Header height */
  height?: string;
  /** Navigation menu items */
  menuItems?: ILayoutMenuItem[];
  /**	Custom menu item renderer (overrides default) */
  renderMenuItem?: (item: ILayoutMenuItem) => React.ReactNode;
  /** Brand logo/content */
  logo?: React.ReactNode;
  /** Custom CSS classes for menu item */
  classNameMenuItem?: string;
}

export interface ILayoutProps {
  /**	Viewport width (px) for mobile/desktop switch */
  breakpoint?: number;
}

export interface ILayoutSidebarProps {
  /** Desktop collapsed state */
  collapsed?: boolean;
  /**	Whether collapsing is allowed */
  collapsible?: boolean;
  /** Width (px) in collapsed state */
  collapsedWidth?: number;
  /** Custom CSS classes */
  className?: string;
  /** Navigation items in sidebar */
  menuItems?: ILayoutMenuItem[];
  /** Custom menu item renderer */
  renderMenuItem?: (item: ILayoutMenuItem) => React.ReactNode;
  /** Title menu in mobile version */
  titleDrawer?: string;
}

export interface ILayoutFooterProps {
  /** Content */
  children: React.ReactNode;
}

export interface ILayoutContentProps {
  /** Content */
  children: React.ReactNode;
  /** Custom CSS classes */
  className?: string;
}
