import { StoryObj } from "@storybook/react";
import Checkbox from "../Checkbox";
import { QUEN_SIZE } from "../../constants";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    label: { control: "text" },
    size: { control: "select", options: QUEN_SIZE, defaultValue: "m" },
    disabled: { control: "boolean" },
    intermediate: {control: "boolean" },
  },
  tags: ["autodocs"]
} as StoryObj<typeof Checkbox>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Example = {
  args: {
    label: "Checkbox"
  }
} as StoryObj<typeof Checkbox>;
