import React, { useState, useEffect, useMemo } from "react";
import { createPortal } from "react-dom";
import { randomId } from "@quen-ui/helpers";
import { INotificationParams } from "./types";
import notificationsStore from "./NotificationsStore";
import { NotificationsWrapper } from "./styles";
import Notification from "./Notification";

const CONTAINER_NOTIFICATIONS = "quen-ui-notifications";

export const NotificationInstance = (): React.ReactNode => {
  const [notifications, setNotifications] = useState<INotificationParams[]>([]);

  let element = document.getElementById(CONTAINER_NOTIFICATIONS);
  if (!element) {
    element = document.createElement("div");
    element.setAttribute("id", CONTAINER_NOTIFICATIONS);
    document.body.appendChild(element);
  }

  const topNotifications = useMemo(
    () =>
      notifications.filter((notification) => notification.position === "top"),
    [notifications]
  );

  const topLeftNotifications = useMemo(
    () =>
      notifications.filter(
        (notification) => notification.position === "top-left"
      ),
    [notifications]
  );

  const topRightNotifications = useMemo(
    () =>
      notifications.filter(
        (notification) => notification.position === "top-right"
      ),
    [notifications]
  );

  const bottomNotifications = useMemo(
    () =>
      notifications.filter(
        (notification) => notification.position === "bottom"
      ),
    [notifications]
  );

  const bottomLeftNotifications = useMemo(
    () =>
      notifications.filter(
        (notification) => notification.position === "bottom-left"
      ),
    [notifications]
  );

  const bottomRightNotifications = useMemo(
    () =>
      notifications.filter(
        (notification) => notification.position === "bottom-right"
      ),
    [notifications]
  );

  useEffect(() => {
    if (
      process.env.NODE_ENV !== "production" &&
      element &&
      element.children.length > 1
    ) {
      window.console.error(
        "Warning: You are using two instances NotificationsInstance. Use only one instance per application."
      );
    }
  }, []);

  useEffect(() => {
    notificationsStore.subscribe(updateNotifications);

    return () => {
      notificationsStore.unsubscribe(updateNotifications);
      element?.remove();
    };
  }, []);

  const updateNotifications = () => {
    setNotifications([...notificationsStore.data]);
  };

  return createPortal(
    <>
      {topNotifications.length ? (
        <NotificationsWrapper
          zIndex={topNotifications[topNotifications.length - 1].zIndex}
          position="top">
          <div>
          {topNotifications.map((notification) => (
            <Notification
              {...notification}
              key={notification.id}
              onClose={() => {
                hideNotification(notification.id as string);
                notification.onClose?.(notification);
              }}
            />
          ))}
          </div>
        </NotificationsWrapper>
      ) : null}
      {topLeftNotifications.length ? (
        <NotificationsWrapper
          zIndex={topLeftNotifications.length - 1}
          position="top-left">
          {topLeftNotifications.map((notification) => (
            <Notification
              {...notification}
              key={notification.id}
              onClose={() => {
                hideNotification(notification.id as string);
                notification.onClose?.(notification);
              }}
            />
          ))}
        </NotificationsWrapper>
      ) : null}
      {topRightNotifications.length ? (
        <NotificationsWrapper
          position="top-right"
          zIndex={topRightNotifications.length - 1}>
          {topRightNotifications.map((notification) => (
            <Notification
              {...notification}
              key={notification.id}
              onClose={() => {
                hideNotification(notification.id as string);
                notification.onClose?.(notification);
              }}
            />
          ))}
        </NotificationsWrapper>
      ) : null}
      {bottomNotifications.length ? (
        <NotificationsWrapper
          position="bottom"
          zIndex={bottomNotifications.length - 1}>
          {bottomNotifications.map((notification) => (
            <Notification
              {...notification}
              key={notification.id}
              onClose={() => {
                hideNotification(notification.id as string);
                notification.onClose?.(notification);
              }}
            />
          ))}
        </NotificationsWrapper>
      ) : null}
      {bottomLeftNotifications.length ? (
        <NotificationsWrapper
          position="bottom-left"
          zIndex={bottomLeftNotifications.length - 1}>
          {bottomLeftNotifications.map((notification) => (
            <Notification
              {...notification}
              key={notification.id}
              onClose={() => {
                hideNotification(notification.id as string);
                notification.onClose?.(notification);
              }}

            />
          ))}
        </NotificationsWrapper>
      ) : null}
      {bottomRightNotifications.length ? (
        <NotificationsWrapper
          position="bottom-right"
          zIndex={bottomRightNotifications.length - 1}>
          {bottomRightNotifications.map((notification) => (
            <Notification
              {...notification}
              key={notification.id}
              onClose={() => {
                hideNotification(notification.id as string);
                notification.onClose?.(notification);
              }}
            />
          ))}
        </NotificationsWrapper>
      ) : null}
    </>,
    element
  );
};

export const showNotification = (notification: INotificationParams): string => {
  const id = notification.id || randomId();
  let newNotifications: INotificationParams[] = [];
  if (
    notification.id &&
    notificationsStore.data.some((n) => n.id === notification.id)
  ) {
    newNotifications = notificationsStore.data;
  } else {
    newNotifications = [...notificationsStore.data, { ...notification, id, position: notification.position || "top" }];
  }
  notificationsStore.updateNotifications(newNotifications);

  return id;
};

export const hideNotification = (id: string): string => {
  const newNotifications = notificationsStore.data.filter((notification) => {
    if (notification.id === id) {
      notification.onClose?.(notification);
      return false;
    }
    return true;
  });

  notificationsStore.updateNotifications(newNotifications);

  return id;
};

export const updateNotification = (
  notification: INotificationParams
): string => {
  const newNotifications = notificationsStore.data.map((n) => {
    if (n.id === notification.id) {
      return { ...n, ...notification };
    }
    return n;
  });
  notificationsStore.updateNotifications(newNotifications);
  return notification.id as string;
};

export const cleanNotifications = () => {
  notificationsStore.updateNotifications([]);
};

export const notifications = {
  show: showNotification,
  hide: hideNotification,
  update: updateNotification,
  clean: cleanNotifications
} as const;
