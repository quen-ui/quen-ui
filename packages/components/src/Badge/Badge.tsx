import React from "react";
import { BadgeWrapper } from "./styles";
import { IBadgeProps } from "./types";
import { Control } from "../typography/Control";

const Badge = ({
  children,
  leftContent,
  color,
  rightContent,
  size = "m"
}: IBadgeProps): React.ReactNode => {

  return (
    <BadgeWrapper size={size} color={color}>
      {leftContent}
      <Control size={size} color="secondary" className="badge-content">
        {children}
      </Control>
      {rightContent}
    </BadgeWrapper>
  );
};

export default Badge;
