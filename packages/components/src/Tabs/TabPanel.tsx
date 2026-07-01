import React from "react";
import { ITabPanelProps } from "./types";
import { useTabsContext } from "./Tabs";
import { TabPanelStyled } from "./styles";
import { cnMerge } from "@quen-ui/helpers";

const TabPanel = ({
  children,
  value,
  style,
  className
}: ITabPanelProps): React.ReactNode => {
  const context = useTabsContext();

  if (context?.keepMounted === false && context.value === value) {
    return (
      <TabPanelStyled
        style={{ ...style, ...context.styles?.panel }}
        data-semantic="panel"
        className={cnMerge(className, context?.classNames?.panel)}>
        {children}
      </TabPanelStyled>
    );
  } else if (context?.keepMounted === false) {
    return null;
  }

  return (
    <TabPanelStyled
      data-semantic="panel"
      className={cnMerge(className, context?.classNames?.panel)}
      style={{
        ...(context?.value !== value ? { display: "none" } : {}),
        ...style,
        ...context?.styles?.panel
      }}>
      {children}
    </TabPanelStyled>
  );
};

export default TabPanel;
