import LayoutComponent from "./Layout";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

import type { ILayoutSidebarProps, ILayoutProps, ILayoutHeaderProps, ILayoutMenuItem } from "./types";

type TLayout = typeof LayoutComponent & {
  Header: typeof Header;
  Content: typeof Content;
  Footer: typeof Footer;
  Sidebar: typeof Sidebar;
}

const Layout = LayoutComponent as TLayout;
Layout.Header = Header;
Layout.Content = Content;
Layout.Footer = Footer;
Layout.Sidebar = Sidebar;

export {
  Layout,
  ILayoutHeaderProps,
  ILayoutMenuItem,
  ILayoutProps, ILayoutSidebarProps
}
