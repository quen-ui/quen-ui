import React, { useEffect, useState } from "react";
import { cnMerge } from "@quen-ui/helpers";
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

  const [selected, setSelected] = useState<boolean>(context?.value === value);

  useEffect(() => {
    setSelected(context?.value === value);
  }, [context?.value]);

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    onClick?.(event);
    context?.onChange(value);
  };

  return (
    <TabStyled
      outline={context?.outline}
      className={cnMerge(className, { "quen-ui__tab--active": selected })}
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
