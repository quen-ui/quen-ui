import React, { useState } from "react";
import { IAlertProps } from "./types";
import { AlertWrapper, AlertIconWrapper, AlertActionWrapper } from "./styles";
import IconClose from "../assets/icon-close.svg?react";
import { Flex } from "../Flex";
import { Header } from "../typography/Header";
import { Text } from "../typography/Text";
import { Button } from "../Button";

const Alert = ({
  size = "m",
  title,
  icon,
  description,
  type = "info",
  isClosable,
  onClose,
  action,
  className,
  style
}: IAlertProps): React.ReactNode => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setIsOpen(false);
    onClose?.(event);
  };

  if (isOpen) {
    return (
      <AlertWrapper size={size} type={type} className={className} style={style}>
        {icon && <AlertIconWrapper type={type}>{icon}</AlertIconWrapper>}
        <Flex direction="column">
          {title && (
            <Header type={type !== "info" ? type : undefined} size={size}>
              {title}
            </Header>
          )}
          {description && (
            <Text type="secondary" size={size}>
              {description}
            </Text>
          )}
          {action && <AlertActionWrapper>{action}</AlertActionWrapper>}
        </Flex>
        {isClosable && (
          <Button view="icon" size={size} onClick={handleClose}>
            <IconClose width={14} />
          </Button>
        )}
      </AlertWrapper>
    );
  }
  return null;
};

export default Alert;
