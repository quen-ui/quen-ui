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
    error: { control: "text"},
    clearable: { control: "boolean" }
  }
} as StoryObj<typeof Select>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Example = {
  args: {
    items: [
      { label: "Pending", value: "pending", isDisabled: true },
      { label: "Shipped", value: "shipped" },
      { label: "Delivered", value: "delivered" },
      { label: "Canceled", value: "canceled" }
    ],
    label: "Order status",
    placeholder: "All statuses",
    style: { width: "350px" },
    onChangeReturnValue: "item"
  }
} as StoryObj<typeof Select>;

export const ExampleMulti =  {
  args: {
    items: [
      { label: "Pending", value: "pending", isDisabled: true },
      { label: "Shipped", value: "shipped" },
      { label: "Delivered", value: "delivered" },
      { label: "Canceled", value: "canceled" }
    ],
    label: "Order status",
    placeholder: "All statuses",
    style: { width: "350px" },
    onChangeReturnValue: "item",
    isMulti: true
  }
} as StoryObj<typeof Select>
