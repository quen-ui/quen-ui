import React, { useEffect, useState } from "react";
import { cnMerge, deepMerge } from "@quen-ui/helpers";
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
  className,
  style
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
      data-semantic="item"
      style={deepMerge(style ?? {}, context?.styles?.item ?? {})}
      outline={context?.outline}
      className={cnMerge(
        className,
        { "quen-ui__tab--active": selected },
        context?.classNames?.item
      )}
      size="m"
      selected={selected}
      onClick={handleClick}
      disabled={disabled}>
      <span
        data-semantic="itemLeftContent"
        className={context?.classNames?.itemLeftContent}
        style={context?.styles?.itemLeftContent}>
        {leftContent}
      </span>
      <span>{children}</span>
      <span
        data-semantic="itemRightContent"
        className={context?.classNames?.itemRightContent}
        style={context?.styles?.itemRightContent}>
        {rightContent}
      </span>
    </TabStyled>
  );
};

export default Tab;
