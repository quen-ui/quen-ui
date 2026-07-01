import { type PropsWithChildren, useMemo } from "react";
import { cnMerge, deepMerge } from "@quen-ui/helpers";
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
  classNames,
  styles,
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
        return (
          <InputBaseRightAddonWrapper>
            {rightContent}
          </InputBaseRightAddonWrapper>
        );
      }
      return rightContent;
    }
    return null;
  }, [rightContent, rightContentVariant, size]);

  return (
    <InputBaseWrapper
      data-semantic="root"
      className={cnMerge(className, classNames?.root)}
      style={deepMerge(style ?? {}, styles?.root ?? {})}
      {...props}
      size={size}>
      {label && (
        <Text
          size={size}
          as="label"
          htmlFor={id}
          data-semantic="label"
          className={classNames?.label}
          style={styles?.label}>
          {label}
          {required && <span className="quen-ui__input-base--required">*</span>}
        </Text>
      )}
      <InputBaseContainer
        data-semantic="container"
        className={classNames?.container}
        style={styles?.container}
        size={size}
        error={error}
        disabled={disabled}
        leftContent={!!leftContent && leftContentVariant !== "icon"}>
        <span
          data-semantic="leftContent"
          className={classNames?.leftContent}
          style={styles?.leftContent}>
          {leftContentRender}
        </span>
        {children}
        <span
          data-semantic="rightContent"
          className={classNames?.rightContent}
          style={styles?.rightContent}>
          {rightContentRender}
        </span>
      </InputBaseContainer>
      {typeof error === "string" && (
        <Text
          style={styles?.error}
          data-semantic="error"
          className={cnMerge(
            "quen-ui__input-base--error-message",
            classNames?.error
          )}
          size="xs">
          {error}
        </Text>
      )}
    </InputBaseWrapper>
  );
};

export default InputBase;
