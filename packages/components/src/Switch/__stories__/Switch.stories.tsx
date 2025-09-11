import { StoryObj } from "@storybook/react";
import Switch from "../Switch";
import { QUEN_SIZE } from "../../constants";

export default {
  title: "Components/Switch",
  component: Switch,
  parameters: {
    layout: "centered"
  },
  argTypes: {
    disabled: { control: "boolean" },
    label: { control: "text", defaultValue: "On/Off" },
    size: { control: "select", options: QUEN_SIZE },
  },
  tags: ["autodocs"]
} as StoryObj<typeof Switch>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Example = {
} as StoryObj<typeof Switch>;
