import { StoryObj } from "@storybook/react";
import Tag from "../Tag";
import { QUEN_SIZE } from "../../constants";

export default {
  title: "Components/Tag",
  component: Tag,
  parameters: {
    layout: "centered"
  },
  argTypes: {
    children: { control: "text" },
    size: {control: "select", options: QUEN_SIZE },
    color: { control: "text" },
  },
  tags: ["autodocs"]
} as StoryObj<typeof Tag>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Example = {
  args: {
    children: "Tag"
  }
} as StoryObj<typeof Tag>;
