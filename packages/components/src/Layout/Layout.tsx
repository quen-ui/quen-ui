import React, {
  PropsWithChildren,
  createContext,
  useState,
  useEffect,
  useContext
} from "react";
import { LayoutStyled } from "./styles";
import { ILayoutProps, ILayoutContextProps } from "./types";

const LayoutContext = createContext<ILayoutContextProps | null>(null);

const Layout = ({
  children,
  breakpoint = 768
}: PropsWithChildren<ILayoutProps>): React.ReactNode => {
  const [mobile, setMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sliderCollapsed, setSliderCollapsed] = useState(false);
  const [isFooter, setIsFooter] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setMobile(window.innerWidth <= breakpoint);
      if (window.innerWidth > breakpoint) {
        setSidebarOpen(false);
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, [breakpoint]);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const toggleSliderCollapse = () => setSliderCollapsed(!sliderCollapsed);

  return (
    <LayoutContext.Provider
      value={{
        mobile,
        sidebarOpen,
        sliderCollapsed,
        toggleSidebar,
        toggleSliderCollapse,
        setIsFooter,
        isFooter
      }}>
      <LayoutStyled breakpoint={breakpoint} isFooter={isFooter}>
        {children}
      </LayoutStyled>
    </LayoutContext.Provider>
  );
};

export const useLayout = () => {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error('useLayout must be used within a LayoutProvider');
  }
  return context;
}

export default Layout;
