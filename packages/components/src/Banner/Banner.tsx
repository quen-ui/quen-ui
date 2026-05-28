import React, { useState, useCallback, useEffect } from "react";
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
  storageKey,
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
      as={as}
      role="region"
      variant={variant}
      size={size}
      visible={isVisible}
      dismissible={dismissible}
      aria-labelledby={title ? titleId : undefined}
      aria-describedby={description ? descId : undefined}
      className={className}
      {...restProps}>
      <BannerContent>
        {title && (
          <Flex align="center" gap="xs">
            {displayIcon && (
              <BannerIcon aria-hidden="true">{displayIcon}</BannerIcon>
            )}
            <Title size="s" id={titleId}>
              {title}
            </Title>
          </Flex>
        )}
        {description && (
          <Flex align="center" gap="xs">
            {displayIcon && !title && (
              <BannerIcon aria-hidden="true">{displayIcon}</BannerIcon>
            )}
            <Text id={descId}>{description}</Text>
          </Flex>
        )}
      </BannerContent>

      {action && <BannerAction>{action}</BannerAction>}

      {dismissible && (
        <Button
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
