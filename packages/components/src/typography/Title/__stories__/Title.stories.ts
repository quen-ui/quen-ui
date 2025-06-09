import { StoryObj } from "@storybook/react";
import { Title } from "../";
import { TITLE_TYPE, TITLE_SIZE } from "../types";

export default {
  title: "Typography/Title",
  component: Title,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    color: { control: "color" },
    size: { control: "select", options: TITLE_SIZE },
    type: { control: "select", options: TITLE_TYPE },
  },
  args: {
    size: "2xl"
  }
} as StoryObj<typeof Title>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Example = {
  args: {
    children: "Title"
  }
};
