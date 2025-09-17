import React from "react";
import { BadgeStyled, BadgeWrapper } from "./styles";
import { IBadgeProps } from "./types";
import { Text } from "../typography/Text";

const Badge = ({
  children,
  leftContent,
  color,
  rightContent,
  size = "m",
  className,
  style,
  text,
  ...props
}: IBadgeProps): React.ReactNode => {
  if (children) {
    return (
      <BadgeWrapper {...props}>
        {children}
        <BadgeStyled
          size={size}
          color={color}
          role="status"
          className={className}
          style={style}>
          {leftContent}
          <Text size={size}>{text}</Text>
          {rightContent}
        </BadgeStyled>
      </BadgeWrapper>
    );
  }
  return (
    <BadgeStyled
      size={size}
      color={color}
      role="status"
      className={className}
      style={style}
      {...props}>
      {leftContent}
      <Text size={size}>{text}</Text>
      {rightContent}
    </BadgeStyled>
  );
};

export default Badge;
