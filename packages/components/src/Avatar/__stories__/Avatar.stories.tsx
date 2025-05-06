import { StoryObj } from "@storybook/react";
import Avatar from "../Avatar";
import { QUEN_SIZE } from "../../constants";

export default {
  title: "Components/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered"
  },
  argTypes: {
    size: { control: "select", options: QUEN_SIZE },
  },
  tags: ["autodocs"]
} as StoryObj<typeof Avatar>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Example = {
  args: {

  }
} as StoryObj<typeof Avatar>;
