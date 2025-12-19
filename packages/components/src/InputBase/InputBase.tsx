import React, { PropsWithChildren } from "react";
import type { IInputBaseProps } from "./types";
import { InputBaseWrapper, InputBaseContainer } from "./styles";
import { Text } from "../typography/Text";

const InputBase = ({
  label,
  className,
  size = "m",
  id,
  required,
  style,
  error,
  disabled,
  children,
  leftContent,
  rightContent,
  ...props
}: PropsWithChildren<IInputBaseProps>) => {
  return (
    <InputBaseWrapper className={className} style={style} {...props}>
      {label && (
        <Text size={size} as="label" htmlFor={id}>
          {label}
          {required && <span className="quen-ui__input-base--required">*</span>}
        </Text>
      )}
      <InputBaseContainer size={size} error={error} disabled={disabled}>
        {leftContent}
        {children}
        {rightContent}
      </InputBaseContainer>
      {typeof error === "string" && (
        <Text className="quen-ui__input-base--error-message" size="xs">
          {error}
        </Text>
      )}
    </InputBaseWrapper>
  );
};

export default InputBase;
