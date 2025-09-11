import React, { useEffect, useState } from "react";
import { TabStyled } from "./styles";
import { ITabProps } from "./types";
import { useTabsContext } from "./Tabs";

const Tab = ({
  children,
  value,
  onClick,
  leftContent,
  rightContent,
  disabled,
  className
}: ITabProps): React.ReactNode => {
  const context = useTabsContext();

  const [selected, setSelected] = useState<boolean>(
    context?.value === value
  );

  useEffect(() => {
    setSelected(context?.value === value);
  }, [context?.value]);

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    onClick?.(event);
    context?.onChange(value);
  };

  return (
    <TabStyled
      className={className}
      size="m"
      selected={selected}
      onClick={handleClick}
      disabled={disabled}>
      {leftContent}
      {children}
      {rightContent}
    </TabStyled>
  );
};

export default Tab;
