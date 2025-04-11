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
  isDisabled,
  className
}: ITabProps): React.ReactNode => {
  const context = useTabsContext();

  const [isSelected, setIsSelected] = useState<boolean>(
    context?.value === value
  );

  useEffect(() => {
    setIsSelected(context?.value === value);
  }, [context?.value]);

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    onClick?.(event);
    context?.onChange(value);
  };

  return (
    <TabStyled
      className={className}
      size="m"
      isSelected={isSelected}
      onClick={handleClick}
      disabled={isDisabled}>
      {leftContent}
      {children}
      {rightContent}
    </TabStyled>
  );
};

export default Tab;
