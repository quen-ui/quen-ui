import React, { useState } from "react";
import { IAlertProps } from "./types";
import { AlertWrapper, AlertIconWrapper, AlertActionWrapper } from "./styles";
import IconClose from "../assets/icon-close.svg?react";
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
  style
}: IAlertProps): React.ReactNode => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setIsOpen(false);
    onClose?.(event);
  };

  if (isOpen) {
    return (
      <AlertWrapper size={size} type={type} className={className} style={style} role="alert">
        <Flex gap="l">
          {icon && <AlertIconWrapper type={type}>{icon}</AlertIconWrapper>}
          <Flex direction="column" className="quen-ui__alert-content">
            {title && (
              <Title type={type !== "info" ? type : undefined} size={size}>
                {title}
              </Title>
            )}
            {description && <Text size={size}>{description}</Text>}
            {action && <AlertActionWrapper>{action}</AlertActionWrapper>}
          </Flex>
        </Flex>
        {closable && (
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
