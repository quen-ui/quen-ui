import React, { useState, useEffect } from "react";
import { useTransition } from "react-transition-state";
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
  ...props
}: ITooltipProps): React.ReactElement => {
  const [hovered, setHovered] = useState(false);
  const controlled = typeof controlledOpen !== "undefined";
  const shouldShow = controlled ? controlledOpen : hovered;
  const [{ status }, toggle] = useTransition({
    enter: true,
    exit: true,
    preEnter: true,
    preExit: true,
    timeout: 200
  });

  useEffect(() => {
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

  return (
    <TooltipContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}>
      {children}
      {show && (
        <TooltipContent
          className={className}
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
