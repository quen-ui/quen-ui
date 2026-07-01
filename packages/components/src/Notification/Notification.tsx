import React, { useEffect, useMemo, useRef } from "react";
import { INotificationParams } from "./types";
import { NotificationStyled } from "./styles";
import { Title } from "../typography/Title";
import { Text } from "../typography/Text";
import { Flex } from "../Flex";
import { Button } from "../Button";
import IconClose from "../assets/icon-close.svg";
import IconInfo from "../assets/icon-info.svg";
import IconWarning from "../assets/icon-warning.svg";
import IconError from "../assets/icon-error.svg";
import IconSuccess from "../assets/icon-success.svg";
import { Loader } from "../Loader";
import { cnMerge } from "@quen-ui/helpers";

const Notification = ({
  message,
  status = "info",
  title,
  closeButton = true,
  onClose,
  className,
  autoClose = true,
  icon,
  loading,
  classNames,
  styles,
  ...props
}: INotificationParams): React.ReactElement => {
  const autoCloseTimeout = useRef<number>(-1);

  const IconComponent = useMemo(() => {
    if (loading) {
      return <Loader view="oval" />;
    }
    if (typeof icon === "boolean" && icon) {
      switch (status) {
        case "error":
          return (
            <IconError
              data-semantic="icon"
              className="quen-ui__notification-icon"
            />
          );
        case "info":
          return (
            <IconInfo
              data-semantic="icon"
              className="quen-ui__notification-icon"
            />
          );
        case "warning":
          return (
            <IconWarning
              data-semantic="icon"
              className="quen-ui__notification-icon"
            />
          );
        case "success":
          return (
            <IconSuccess
              data-semantic="icon"
              className="quen-ui__notification-icon"
            />
          );
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
    <NotificationStyled
      data-semantic="root"
      className={cnMerge(className, classNames?.root)}
      style={styles?.root}
      status={status}
      {...props}>
      <Flex
        gap={"m"}
        direction="row"
        justify="space-between"
        align="center"
        data-semantic="wrapper"
        className={classNames?.wrapper}
        style={styles?.wrapper}>
        <Flex
          gap="m"
          align="center"
          data-semantic="header"
          className={classNames?.header}
          style={styles?.header}>
          {IconComponent}
          {title ? (
            <Title
              size="xs"
              data-semantic="title"
              className={classNames?.title}
              style={styles?.title}>
              {title}
            </Title>
          ) : (
            <Text
              size="s"
              data-semantic="message"
              className={classNames?.message}
              style={styles?.message}>
              {message}
            </Text>
          )}
        </Flex>
        {closeButton && (
          <Button
            view="icon"
            size="s"
            data-semantic="close"
            classNames={{ root: classNames?.close }}
            styles={{ root: styles?.root }}
            onClick={() => onClose?.({})}>
            <IconClose width={16} />
          </Button>
        )}
      </Flex>
      {title && (
        <Text
          size="s"
          type="secondary"
          data-semantic="message"
          className={classNames?.message}
          style={styles?.message}>
          {message}
        </Text>
      )}
    </NotificationStyled>
  );
};

export default Notification;
