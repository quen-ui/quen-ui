import React, { useState, useEffect } from "react";
import { useTransitionState } from "react-transition-state";
import { ITooltipProps } from "./types";
import { TooltipContainer, TooltipContent, TooltipArrowStyled } from "./styles";

const Tooltip = ({
  children,
  text,
  position = "top",
  open: controlledOpen,
  show = true,
  zIndex = 1000,
  color = "grayViolet",
  width,
  className,
  classNameContent,
  ...props
}: ITooltipProps): React.ReactElement => {
  const [hovered, setHovered] = useState(false);
  const controlled = typeof controlledOpen !== "undefined";
  const shouldShow = controlled ? controlledOpen : hovered;
  const [{ status }, toggle] = useTransitionState({
    enter: true,
    exit: true,
    preEnter: true,
    preExit: true,
    timeout: 200
  });

  useEffect(() => {
    console.log(shouldShow, show)
    toggle(shouldShow && show);
  }, [show, toggle, shouldShow]);

  const handleMouseEnter = () => {
    if (!controlled) {
      setHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (!controlled) {
      setHovered(false);
    }
  };
  console.log(status)

  return (
    <TooltipContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={className}
      {...props}>
      {children}
      {show && (
        <TooltipContent
          className={classNameContent}
          width={width}
          state={status}
          zIndex={zIndex}
          color={color}
          position={position}
          role="tooltip">
          {text}
          <TooltipArrowStyled color={color} position={position} />
        </TooltipContent>
      )}
    </TooltipContainer>
  );
};

export default Tooltip;
