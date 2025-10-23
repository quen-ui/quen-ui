import React, { createContext, useContext, useState, useMemo } from "react";
import { ITabsProps, ITabsContext } from "./types";

const TabsContext = createContext<ITabsContext | null>(null);

const Tabs = ({ children, defaultValue, keepMounted, onChange, outline }: ITabsProps): React.ReactElement => {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (currentValue: string) => {
    setValue(currentValue);
    onChange?.(currentValue);
  }

  const context = useMemo(() => ({
    onChange: handleChange,
    value,
    keepMounted,
    outline
  }), [value, outline])

  return (
    <TabsContext.Provider value={context}>{children}</TabsContext.Provider>
  )
}

export const useTabsContext = (): ITabsContext | null => useContext(TabsContext)

export default Tabs;
