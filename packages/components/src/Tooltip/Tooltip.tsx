import React, { useState, useEffect } from "react";
import { useTransition } from "react-transition-state";
import { ITooltipProps } from "./types";
import { TooltipContainer, TooltipContent, TooltipArrowStyled } from "./styles";

const Tooltip = ({
  children,
  text,
  position,
  isOpen: controlledOpen,
  isShow = true,
  zIndex = 1000,
  color = "grayViolet",
  width
}: ITooltipProps): React.ReactElement => {
  const [isHovered, setIsHovered] = useState(false);
  const isControlled = typeof controlledOpen !== "undefined";
  const shouldShow = isControlled ? controlledOpen : isHovered;
  const [{ status }, toggle] = useTransition({
    enter: true,
    exit: true,
    preEnter: true,
    preExit: true,
    timeout: 200
  });

  useEffect(() => {
    toggle(shouldShow && isShow);
  }, [isShow, toggle, shouldShow]);

  const handleMouseEnter = () => {
    if (!isControlled) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isControlled) {
      setIsHovered(false);
    }
  };

  return (
    <TooltipContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      {children}
      {isShow && (
        <TooltipContent
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
