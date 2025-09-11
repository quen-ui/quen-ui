import React from "react";
import { ITabsListProps } from "./types";
import { TabsListStyled } from "./styles";

const TabsList = ({
  children,
  className,
  justify = "flex-start",
  grow
}: ITabsListProps): React.ReactElement => {
  return (
    <TabsListStyled className={className} justify={justify} isGrow={grow}>
      {children}
    </TabsListStyled>
  );
};

export default TabsList;
