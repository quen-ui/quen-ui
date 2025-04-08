import { StoryObj } from "@storybook/react";
import Select from "../Select";
import { QUEN_SIZE } from "../../constants";

export default {
  title: "Components/Select",
  component: Select,
  parameters: {
    layout: "centered"
  },
  argTypes: {
    size: { control: "select", options: QUEN_SIZE },
    error: { control: "text"}
  },
  tags: ["autodocs"]
} as StoryObj<typeof Select>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Example = {
  args: {
    items: [
      { label: "Pending", value: "pending" },
      { label: "Shipped", value: "shipped" },
      { label: "Delivered", value: "delivered" },
      { label: "Canceled", value: "canceled" }
    ],
    label: "Order status",
    placeholder: "All statuses",
    style: { width: "350px" },
    onChangeReturnType: "value"
  }
} as StoryObj<typeof Select>;

export const ExampleGroup = {
  args: {
    items: [
      { label: "Paris", value: "paris", groupId: "europe" },
      { label: "Rome", value: "rome", groupId: "europe" },
      { label: "Tokyo", value: "tokyo", groupId: "asia" },
      { label: "Bangkok", value: "bangkok", groupId: "asia" }
    ],
    label: "Route",
    placeholder: "Where are we flying?",
    style: { width: "350px" }
  }
} as StoryObj<typeof Select>;
