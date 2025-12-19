import { StoryObj } from "@storybook/react";
import RadioButtonGroup from "../RadioButtonGroup";
import { QUEN_SIZE } from "../../constants";

export default {
  title: "Components/RadioButtonGroup",
  component: RadioButtonGroup,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: { control: "select", options: QUEN_SIZE, defaultValue: "m" },
    disabled: { control: "boolean" },
  }
} as StoryObj<typeof RadioButtonGroup>;

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
} as StoryObj<typeof RadioButtonGroup>;
