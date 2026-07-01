import React, { useState } from "react";
import { deepMerge, cnMerge } from "@quen-ui/helpers";
import { IAlertProps } from "./types";
import { AlertWrapper, AlertIconWrapper, AlertActionWrapper } from "./styles";
import IconClose from "../assets/icon-close.svg";
import { Flex } from "../Flex";
import { Title } from "../typography/Title";
import { Text } from "../typography/Text";
import { Button } from "../Button";

const Alert = ({
  size = "m",
  title,
  icon,
  description,
  type = "info",
  closable,
  onClose,
  action,
  className,
  style,
  classNames,
  styles,
  ...props
}: IAlertProps): React.ReactNode => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setIsOpen(false);
    onClose?.(event);
  };

  if (isOpen) {
    return (
      <AlertWrapper
        data-semantic="root"
        size={size}
        type={type}
        className={cnMerge(className, classNames?.root)}
        style={deepMerge(style ?? {}, styles?.root ?? {})}
        role="alert"
        {...props}>
        <Flex gap="l">
          {icon && (
            <AlertIconWrapper
              type={type}
              data-semantic="icon"
              className={classNames?.icon}
              style={styles?.icon}>
              {icon}
            </AlertIconWrapper>
          )}
          <Flex
            direction="column"
            className={cnMerge("quen-ui__alert-content", classNames?.content)}
            style={styles?.content}
            data-semantic="content">
            {title && (
              <Title
                className={classNames?.title}
                style={styles?.title}
                type={type !== "info" ? type : undefined}
                size={size}
                data-semantic="title">
                {title}
              </Title>
            )}
            {description && (
              <Text size={size} data-semantic="description" className={classNames?.description} style={styles?.description}>
                {description}
              </Text>
            )}
            {action && (
              <AlertActionWrapper data-semantic="action" className={classNames?.action} style={styles?.action}>
                {action}
              </AlertActionWrapper>
            )}
          </Flex>
        </Flex>
        {closable && (
          <Button
            className={classNames?.close}
            style={styles?.close}
            view="icon"
            size={size}
            onClick={handleClose}
            data-semantic="close">
            <IconClose width={14} />
          </Button>
        )}
      </AlertWrapper>
    );
  }
  return null;
};

export default Alert;
