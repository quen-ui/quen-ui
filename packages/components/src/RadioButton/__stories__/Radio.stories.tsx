import { StoryObj } from "@storybook/react";
import RadioButton from "../RadioButton";
import { QUEN_SIZE } from "../../constants";

export default {
  title: "Components/RadioButton",
  component: RadioButton,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    label: { control: "text" },
    size: { control: "select", options: QUEN_SIZE, defaultValue: "m" },
    disabled: { control: "boolean" },
  }
} as StoryObj<typeof RadioButton>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Example = {
  args: {
    label: "Radio"
  }
} as StoryObj<typeof RadioButton>;
