import React from "react";
import { ITabPanelProps } from "./types";
import { useTabsContext } from "./Tabs";
import { TabPanelStyled } from "./styles";

const TabPanel = ({ children, value }: ITabPanelProps): React.ReactNode => {
  const context = useTabsContext();

  if (context?.keepMounted === false && context.value === value) {
    return <TabPanelStyled>{children}</TabPanelStyled>;
  } else if (context?.keepMounted === false) {
    return null;
  }

  return (
    <TabPanelStyled style={context?.value !== value ? { display: "none" } : {}}>
      {children}
    </TabPanelStyled>
  );
};

export default TabPanel;
