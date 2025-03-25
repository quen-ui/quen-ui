import { StoryObj } from "@storybook/react";
import CheckboxGroup from "../CheckboxGroup";
import { QUEN_SIZE } from "../../constants";

export default {
  title: "Components/CheckboxGroup",
  component: CheckboxGroup,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    label: { control: "text" },
    size: { control: "select", options: QUEN_SIZE, defaultValue: "m" },
    isDisabled: { control: "boolean" },
    isIntermediate: {control: "boolean" },
  },
  tags: ["autodocs"]
} as StoryObj<typeof CheckboxGroup>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Example = {
  args: {
    options: [{
      label: "Option 1",
      value: "o1"
    }, {
      label: "Option 2",
      value: "o2"
    }]
  }
} as StoryObj<typeof CheckboxGroup>;
