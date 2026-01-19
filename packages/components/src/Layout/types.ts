import React from "react";
import type { IMenuDefaultItem } from "../Menu";

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
  setIsFooter: (isFooter: boolean) => void;
  isFooter: boolean;
}

export interface ILayoutHeaderProps {
  /** Custom CSS classes */
  className?: string;
  /**	Inline styles */
  style?: React.CSSProperties;
  /** Header height */
  height?: string;
  /** Navigation menu items */
  menuItems?: IMenuDefaultItem[];
  /** Brand logo/content */
  logo?: React.ReactNode;
  /** Custom CSS classes for menu item */
  classNameMenuItem?: string;
  activeMenuKeys?: string[];
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
  menuItems?: IMenuDefaultItem[];
  /** Title menu in mobile version */
  titleDrawer?: string;
  /** Custom CSS classes for menu item */
  classNameMenuItem?: string;
  activeMenuKeys?: string[];
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
