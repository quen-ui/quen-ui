import React from "react";
import { StoryObj } from "@storybook/react";
import { Button } from "../../Button";
import Notification from "../Notification";
import { NotificationInstance, notifications } from "../NotificationInstance";
import { NOTIFICATION_STATUSES } from "../types";

export default {
  title: "Components/Notification",
  component: Notification,
  parameters: {
    layout: "centered"
  },
  argTypes: {
    message: { control: "text" },
    title: { control: "text" },
    status: { control: "select", options: NOTIFICATION_STATUSES },
    autoClose: { control: "boolean" },
    icon: { control: "boolean" },
    loading: { control: "boolean" }
  },
  args: {
    message: "Notification message"
  },

  tags: ["autodocs"]
} as StoryObj<typeof Notification>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Example = {
  render: (args) => {
    const onClick = () => {
      notifications.show({ ...args });
    };
    return (
      <>
        <NotificationInstance />
        <Button onClick={onClick}>Click me</Button>
      </>
    );
  }
} as StoryObj<typeof Notification>;
