import { StoryObj } from "@storybook/react";
import { Text } from "../";
import { TEXT_TYPE, TEXT_SIZE } from "../types";

export default {
  title: "Typography/Text",
  component: Text,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    color: { control: "color" },
    size: { control: "select", options: TEXT_SIZE },
    type: { control: "select", options: TEXT_TYPE },
  },
  args: {
    size: "xl"
  }
} as StoryObj<typeof Text>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Example = {
  args: {
    children: "Text"
  }
};
