import React from "react";
import { BadgeWrapper } from "./styles";
import { IBadgeProps } from "./types";
import { Text } from "../typography/Text";

const Badge = ({
  children,
  leftContent,
  color,
  rightContent,
  size = "m",
  className,
  style
}: IBadgeProps): React.ReactNode => {
  return (
    <BadgeWrapper
      size={size}
      color={color}
      role="status"
      className={className}
      style={style}>
      {leftContent}
      <Text size={size}>{children}</Text>
      {rightContent}
    </BadgeWrapper>
  );
};

export default Badge;
