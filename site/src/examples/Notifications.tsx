import {
  Button,
  NotificationInstance,
  notifications,
  Flex,
  INotificationParams,
  NOTIFICATION_STATUSES
} from "@quen-ui/components";
import React from "react";

export const NotificationsDefault = () => {
  const onClick = () => {
    notifications.show({
      title: "Default Notification",
      message: "Do not forget to star QuenUI on GitHub!"
    });
  };
  return (
    <>
      <NotificationInstance />
      <Button onClick={onClick}>Show notification</Button>
    </>
  );
};

export const NotificationsPositions = () => {
  const positions = [
    "top-left",
    "top-right",
    "top",
    "bottom-left",
    "bottom-right",
    "bottom"
  ] as const;

  const onClick = (position: typeof positions[number]) => {
    notifications.show({
      title: `Notification at ${position}`,
      message: "Notification message",
      position,
      autoClose: false
    });
  };
  return (
    <>
      <NotificationInstance />
      <Flex gap="m">
        {positions.map((position) => (
          <Button key={position} onClick={() => onClick(position)}>
            Show {position} notification
          </Button>
        ))}
      </Flex>
    </>
  );
};

export const NotificationsStatuses = () => {
  const onClick = (status: INotificationParams["status"]) => {
    notifications.show({
      title: `Notification at ${status}`,
      message: "Notification message",
      status,
      autoClose: false
    });
  };
  return (
    <>
      <NotificationInstance />
      <Flex gap="m">
        {NOTIFICATION_STATUSES.map((status) => (
          <Button key={status} onClick={() => onClick(status)}>
            Show {status} notification
          </Button>
        ))}
      </Flex>
    </>
  );
};
