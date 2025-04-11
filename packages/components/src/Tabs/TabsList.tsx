import React from "react";
import { ITabsListProps } from "./types";
import { TabsListStyled } from "./styles";

const TabsList = ({
  children,
  className,
  justify = "flex-start",
  isGrow
}: ITabsListProps): React.ReactElement => {
  return (
    <TabsListStyled className={className} justify={justify} isGrow={isGrow}>
      {children}
    </TabsListStyled>
  );
};

export default TabsList;
