import React, { PropsWithChildren } from "react";
import IconClose from "../assets/icon-close.svg?react";
import { ITagProps } from "./types";
import { TagStyled, TagButtonClosable } from "./styles";

const Tag = ({
  children,
  size = "m",
  isDisabled,
  icon,
  onClick,
  className,
  isClosable,
  onClickClose,
  ...props
}: PropsWithChildren<ITagProps>): React.ReactElement => {
  return (
    <TagStyled
      size={size}
      isDisabled={isDisabled}
      onClick={onClick}
      className={className}
      {...props}>
      {icon}
      {children}
      {isClosable && (
        <TagButtonClosable
          onClick={onClickClose}
          size={size}
          isDisabled={isDisabled}>
          <IconClose width={12} height={12} />
        </TagButtonClosable>
      )}
    </TagStyled>
  );
};

export default Tag;
