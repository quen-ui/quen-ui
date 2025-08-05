import {
  Button,
  NotificationInstance,
  notifications,
  Flex
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
