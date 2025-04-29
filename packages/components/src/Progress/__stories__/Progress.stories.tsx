import { StoryObj } from "@storybook/react";
import Progress from "../Progress";
import { QUEN_SIZE } from "../../constants";
import { COLOR_PROGRESS } from "../types";

export default {
  title: "Components/Progress",
  component: Progress,
  parameters: {
    layout: "centered"
  },
  argTypes: {
    value: { control: "number" },
    label: { control: "text" },
    size: { control: "select", options: QUEN_SIZE },
    color: { control: "select", options: COLOR_PROGRESS }
  },
  tags: ["autodocs"]
} as StoryObj<typeof Progress>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Example = {
  args: {
    style: { width: "100px"}
  }
} as StoryObj<typeof Progress>;
