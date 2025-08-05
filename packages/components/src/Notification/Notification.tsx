import React, { useEffect, useMemo, useRef } from "react";
import { INotificationParams } from "./types";
import { NotificationStyled } from "./styles";
import { Title } from "../typography/Title";
import { Text } from "../typography/Text";
import { Flex } from "../Flex";
import { Button } from "../Button";
import IconClose from "../assets/icon-close.svg?react";
import IconInfo from "../assets/icon-info.svg?react";
import IconWarning from "../assets/icon-warning.svg?react";
import IconError from "../assets/icon-error.svg?react";
import IconSuccess from "../assets/icon-success.svg?react";
import { Loader } from "../Loader";

const Notification = ({
  message,
  status = "info",
  title,
  isCloseButton = true,
  onClose,
  className,
  autoClose = true,
  icon,
  loading
}: INotificationParams): React.ReactElement => {
  const autoCloseTimeout = useRef<number>(-1);

  const IconComponent = useMemo(() => {
    if (loading) {
      return <Loader view="oval" />;
    }
    if (typeof icon === "boolean" && icon) {
      switch (status) {
        case "error":
          return <IconError className="quen-ui__notification-icon" />;
        case "info":
          return <IconInfo className="quen-ui__notification-icon" />;
        case "warning":
          return <IconWarning className="quen-ui__notification-icon" />;
        case "success":
          return <IconSuccess className="quen-ui__notification-icon" />;
      }
    }
    return icon;
  }, [icon, status]);

  const cancelAutoClose = () => window.clearTimeout(autoCloseTimeout.current);

  const handleAutoClose = () => {
    if (typeof autoClose === "number") {
      autoCloseTimeout.current = window.setTimeout(
        () => onClose?.({}),
        autoClose
      );
    }
    if (autoClose) {
      autoCloseTimeout.current = window.setTimeout(() => onClose?.({}), 5000);
    }
  };

  useEffect(() => {
    handleAutoClose();

    return cancelAutoClose;
  }, [autoClose]);

  return (
    <NotificationStyled className={className} status={status}>
      <Flex gap={"m"} direction="row" justify="space-between" align="center">
        <Flex gap="m" align="center">
          {IconComponent}
          {title ? (
            <Title size="xs">{title}</Title>
          ) : (
            <Text size="s">{message}</Text>
          )}
        </Flex>
        {isCloseButton && (
          <Button view="icon" size="s" onClick={() => onClose?.({})}>
            <IconClose width={16} />
          </Button>
        )}
      </Flex>
      {title && (
        <Text size="s" type="secondary">
          {message}
        </Text>
      )}
    </NotificationStyled>
  );
};

export default Notification;
