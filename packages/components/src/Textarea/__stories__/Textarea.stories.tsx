import { StoryObj } from "@storybook/react";
import Textarea from "../Textarea";
import { QUEN_SIZE } from "../../constants";

export default {
  title: "Components/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered"
  },
  argTypes: {
    size: { control: "select", options: QUEN_SIZE },
    disabled: { control: "boolean" },
    label: { control: "text", defaultValue: "Label" },
    error: { control: "text" },
  }
} as StoryObj<typeof Textarea>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Example = {
} as StoryObj<typeof Textarea>;

