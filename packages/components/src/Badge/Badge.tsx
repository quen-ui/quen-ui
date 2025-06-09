import React from "react";
import { BadgeWrapper } from "./styles";
import { IBadgeProps } from "./types";
import { Text } from "../typography/Text";

const Badge = ({
  children,
  leftContent,
  color,
  rightContent,
  size = "m"
}: IBadgeProps): React.ReactNode => {

  return (
    <BadgeWrapper size={size} color={color} role="status">
      {leftContent}
      <Text size={size}>
        {children}
      </Text>
      {rightContent}
    </BadgeWrapper>
  );
};

export default Badge;
