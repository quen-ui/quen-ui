import { StoryObj } from "@storybook/react";
import InputNumber from "../InputNumber";
import { QUEN_SIZE } from "../../constants";

export default {
  title: "Components/InputNumber",
  component: InputNumber,
  parameters: {
    layout: "centered"
  },
  argTypes: {
    label: { control: "text" },
    size: { control: "select", options: QUEN_SIZE },
    error: { control: "text" },
    allowNegative: { control: "boolean" },
  },
  args: {
    label: "Input number"
  },
  tags: ["autodocs"]
} as StoryObj<typeof InputNumber>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Example = {

} as StoryObj<typeof InputNumber>;

