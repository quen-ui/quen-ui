import { StoryObj } from "@storybook/react";
import { Control } from "../";
import { CONTROL_VIEW, CONTROL_SIZE } from "../types";

export default {
  title: "Typography/Control",
  component: Control,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    color: { control: "color" },
    size: { control: "select", options: CONTROL_SIZE },
    view: { control: "select", options: CONTROL_VIEW },
  },
  args: {
    size: "xl"
  }
} as StoryObj<typeof Control>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Example = {
  args: {
    children: "Control"
  }
};
