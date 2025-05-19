import React, {
  PropsWithChildren,
  createContext,
  useState,
  useEffect,
  useContext
} from "react";
import { LayoutStyled, OverlayStyled } from "./styles";
import { ILayoutProps, ILayoutContextProps } from "./types";

const LayoutContext = createContext<ILayoutContextProps | null>(null);

const Layout = ({
  children,
  breakpoint = 768
}: PropsWithChildren<ILayoutProps>): React.ReactNode => {
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sliderCollapsed, setSliderCollapsed] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= breakpoint);
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
        isMobile,
        sidebarOpen,
        sliderCollapsed,
        toggleSidebar,
        toggleSliderCollapse
      }}>
      <LayoutStyled breakpoint={breakpoint}>
        {children}
        {isMobile && sidebarOpen && (
          <OverlayStyled onClick={toggleSidebar} />
        )}
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
