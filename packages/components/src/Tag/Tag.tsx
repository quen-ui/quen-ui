import React from "react";
import IconClose from "../assets/icon-close.svg";
import { ITagProps } from "./types";
import { TagStyled, TagButtonClosable } from "./styles";
import { cnMerge, deepMerge } from "@quen-ui/helpers";

const Tag = ({
  children,
  disabled,
  icon,
  onClick,
  className,
  closable,
  onClickClose,
  size = "m",
  color,
  styles,
  style,
  classNames,
  ...props
}: ITagProps): React.ReactElement => {
  return (
    <TagStyled
      data-semantic="root"
      color={color}
      size={size}
      disabled={disabled}
      onClick={onClick}
      className={cnMerge(className, classNames?.root)}
      style={deepMerge(style ?? {}, styles?.root ?? {})}
      {...props}>
      <span data-semantic="icon" className={classNames?.icon} style={styles?.icon}>{icon}</span>
      <span data-semantic="content" className={classNames?.content} style={styles?.content}>{children}</span>
      {closable && (
        <TagButtonClosable
          className={classNames?.close}
          style={styles?.close}
          data-semantic="close"
          onClick={!disabled ? onClickClose : () => {}}
          disabled={disabled}>
          <IconClose width={12} height={12} />
        </TagButtonClosable>
      )}
    </TagStyled>
  );
};

export default Tag;
