import { type PropsWithChildren, useMemo } from "react";
import type { IInputBaseProps } from "./types";
import {
  InputBaseWrapper,
  InputBaseContainer,
  InputContentText,
  InputBaseAddonWrapper,
  InputBaseRightAddonWrapper
} from "./styles";
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
  leftContentVariant = "icon",
  rightContentVariant = "icon",
  ...props
}: PropsWithChildren<IInputBaseProps>) => {
  const leftContentRender = useMemo(() => {
    if (leftContent) {
      if (leftContentVariant === "text") {
        return <InputContentText size={size}>{leftContent}</InputContentText>;
      } else if (leftContentVariant === "addon") {
        return <InputBaseAddonWrapper>{leftContent}</InputBaseAddonWrapper>;
      }
      return leftContent;
    }
    return null;
  }, [leftContent, leftContentVariant, size]);

  const rightContentRender = useMemo(() => {
    if (rightContent) {
      if (rightContentVariant === "text") {
        return <InputContentText size={size}>{rightContent}</InputContentText>;
      } else if (rightContentVariant === "addon") {
        return <InputBaseRightAddonWrapper>{rightContent}</InputBaseRightAddonWrapper>;
      }
      return rightContent;
    }
    return null;
  }, [rightContent, rightContentVariant, size]);

  return (
    <InputBaseWrapper
      className={className}
      style={style}
      {...props}
      size={size}>
      {label && (
        <Text size={size} as="label" htmlFor={id}>
          {label}
          {required && <span className="quen-ui__input-base--required">*</span>}
        </Text>
      )}
      <InputBaseContainer
        size={size}
        error={error}
        disabled={disabled}
        leftContent={!!leftContent && leftContentVariant !== "icon"}>
        {leftContentRender}
        {children}
        {rightContentRender}
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
