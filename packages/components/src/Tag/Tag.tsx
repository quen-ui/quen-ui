import React from "react";
import IconClose from "../assets/icon-close.svg?react";
import { ITagProps } from "./types";
import { TagStyled, TagButtonClosable } from "./styles";

const Tag = ({
  children,
  isDisabled,
  icon,
  onClick,
  className,
  isClosable,
  onClickClose,
  ...props
}: ITagProps): React.ReactElement => {
  return (
    <TagStyled
      size="m"
      isDisabled={isDisabled}
      onClick={onClick}
      className={className}
      {...props}>
      {icon}
      {children}
      {isClosable && (
        <TagButtonClosable
          onClick={onClickClose}
          isDisabled={isDisabled}>
          <IconClose width={12} height={12} />
        </TagButtonClosable>
      )}
    </TagStyled>
  );
};

export default Tag;
