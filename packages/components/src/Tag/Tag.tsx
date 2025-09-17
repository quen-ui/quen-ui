import React from "react";
import IconClose from "../assets/icon-close.svg";
import { ITagProps } from "./types";
import { TagStyled, TagButtonClosable } from "./styles";

const Tag = ({
  children,
  disabled,
  icon,
  onClick,
  className,
  closable,
  onClickClose,
  ...props
}: ITagProps): React.ReactElement => {
  return (
    <TagStyled
      size="m"
      disabled={disabled}
      onClick={onClick}
      className={className}
      {...props}>
      {icon}
      {children}
      {closable && (
        <TagButtonClosable
          onClick={!disabled ? onClickClose : () => {}}
          disabled={disabled}>
          <IconClose width={12} height={12} />
        </TagButtonClosable>
      )}
    </TagStyled>
  );
};

export default Tag;
