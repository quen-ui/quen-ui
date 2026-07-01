import React from "react";
import { cnMerge, deepMerge } from "@quen-ui/helpers";
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
  classNames,
  styles,
  ...props
}: IBadgeProps): React.ReactNode => {
  if (children) {
    return (
      <BadgeWrapper
        {...props}
        className={classNames?.wrapper}
        style={styles?.wrapper}
        data-semantic="wrapper">
        {children}
        <BadgeStyled
          data-semantic="badge"
          size={size}
          color={color}
          role="status"
          className={cnMerge(className, classNames?.badge)}
          style={deepMerge(style ?? {}, styles?.badge ?? {})}>
          <span
            data-semantic="leftContent"
            className={classNames?.leftContent}
            style={styles?.leftContent}>
            {leftContent}
          </span>
          <Text
            size={size}
            data-semantic="text"
            className={classNames?.text}
            style={styles?.text}>
            {text}
          </Text>
          <span
            data-semantic="rightContent"
            className={classNames?.rightContent}
            style={styles?.rightContent}>
            {rightContent}
          </span>
        </BadgeStyled>
      </BadgeWrapper>
    );
  }
  return (
    <BadgeStyled
      data-semantic="badge"
      size={size}
      color={color}
      role="status"
      className={cnMerge(className, classNames?.badge)}
      style={deepMerge(style ?? {}, styles?.badge ?? {})}
      {...props}>
      <span
        data-semantic="leftContent"
        className={classNames?.leftContent}
        style={styles?.leftContent}>
        {leftContent}
      </span>
      <Text
        size={size}
        data-semantic="text"
        className={classNames?.text}
        style={styles?.text}>
        {text}
      </Text>
      <span
        data-semantic="rightContent"
        className={classNames?.rightContent}
        style={styles?.rightContent}>
        {rightContent}
      </span>
    </BadgeStyled>
  );
};

export default Badge;
