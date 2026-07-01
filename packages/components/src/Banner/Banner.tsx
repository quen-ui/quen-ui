import React, { useState, useCallback, useEffect } from "react";
import { cnMerge, deepMerge } from "@quen-ui/helpers";
import {
  IconInfoCircle,
  IconRosetteDiscountCheck,
  IconAlertTriangle,
  IconX
} from "@tabler/icons-react";
import { Title } from "../typography/Title";
import { Text } from "../typography/Text";
import { Button } from "../Button";
import {
  BannerStyled,
  BannerIcon,
  BannerContent,
  BannerAction
} from "./styles";
import { IBannerProps } from "./types";
import { Flex } from "../Flex";

const DEFAULT_ICONS: Record<string, React.ReactNode> = {
  info: <IconInfoCircle />,
  success: <IconRosetteDiscountCheck />,
  warning: <IconAlertTriangle />,
  danger: <IconAlertTriangle />,
  neutral: <IconInfoCircle />
};

export const Banner: React.FC<IBannerProps> = ({
  variant = "info",
  title,
  description,
  action,
  onClose,
  dismissible = false,
  icon,
  size = "m",
  as = "div",
  className,
  children,
  style,
  storageKey,
  classNames,
  styles,
  ...restProps
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (storageKey && typeof window !== "undefined") {
      const dismissed = window.localStorage.getItem(`banner:${storageKey}`);
      if (dismissed === "true") {
        setIsVisible(false);
      }
    }
    setIsMounted(true);
  }, [storageKey]);

  const handleClose = useCallback(() => {
    setIsVisible(false);
    onClose?.();
    if (storageKey && typeof window !== "undefined") {
      window.localStorage.setItem(`banner:${storageKey}`, "true");
    }
  }, [onClose, storageKey]);

  if (!isMounted || !isVisible) return null;

  const displayIcon = icon ?? DEFAULT_ICONS[variant];
  const titleId = `banner-title-${title?.toString().slice(0, 8) || Date.now()}`;
  const descId = `banner-desc-${Date.now()}`;

  return (
    <BannerStyled
      data-semantic="root"
      as={as}
      role="region"
      variant={variant}
      size={size}
      visible={isVisible}
      dismissible={dismissible}
      aria-labelledby={title ? titleId : undefined}
      aria-describedby={description ? descId : undefined}
      className={cnMerge(className, classNames?.root)}
      style={deepMerge(style ?? {}, styles?.root ?? {})}
      {...restProps}>
      <BannerContent
        data-semantic="content"
        className={classNames?.content}
        style={styles?.content}>
        {title && (
          <Flex align="center" gap="xs">
            {displayIcon && (
              <BannerIcon
                className={classNames?.displayIcon}
                style={styles?.displayIcon}
                data-semantic="displayIcon"
                aria-hidden="true">
                {displayIcon}
              </BannerIcon>
            )}
            <Title
              className={classNames?.title}
              style={styles?.title}
              data-semantic="title"
              size="s"
              id={titleId}>
              {title}
            </Title>
          </Flex>
        )}
        {description && (
          <Flex align="center" gap="xs">
            {displayIcon && !title && (
              <BannerIcon
                className={classNames?.displayIcon}
                style={styles?.displayIcon}
                data-semantic="displayIcon"
                aria-hidden="true">
                {displayIcon}
              </BannerIcon>
            )}
            <Text
              className={classNames?.description}
              style={styles?.description}
              data-semantic="description"
              id={descId}>
              {description}
            </Text>
          </Flex>
        )}
      </BannerContent>

      {action && (
        <BannerAction
          className={classNames?.action}
          style={styles?.action}
          data-semantic="action">
          {action}
        </BannerAction>
      )}

      {dismissible && (
        <Button
          className={classNames?.close}
          style={styles?.close}
          data-semantic="close"
          size="s"
          view="icon"
          onClick={handleClose}
          aria-label="Close notification"
          type="button">
          <IconX width={16} height={16} />
        </Button>
      )}
    </BannerStyled>
  );
};

export default Banner;
