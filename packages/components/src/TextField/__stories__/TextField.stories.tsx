import { StoryObj } from "@storybook/react";
import TextField from "../TextField";
import { QUEN_SIZE } from "../../constants";

export default {
  title: "Components/TextField",
  component: TextField,
  parameters: {
    layout: "centered"
  },
  argTypes: {
    size: { control: "select", options: QUEN_SIZE },
    isDisabled: { control: "boolean" },
    label: { control: "text", defaultValue: "Label" },
    error: { control: "text" },
  },
  tags: ["autodocs"]
} as StoryObj<typeof TextField>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Example = {
} as StoryObj<typeof TextField>;

