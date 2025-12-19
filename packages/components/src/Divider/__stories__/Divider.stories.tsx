import { StoryObj } from "@storybook/react";
import Divider from "../Divider";
export default {
  title: "Components/Divider",
  component: Divider,
  parameters: {
    layout: "centered"
  },
  argTypes: {
    children: { control: "text" },
    direction: { control: "select", options: ["horizontal", "vertical"], defaultValue: "horizontal" },
    align: { control: "select", options: ["left", "right", "center"] },
    width: { control: "text", defaultValue: "400px" },
    height: { control: "text", defaultValue: "400px" },
  }
} as StoryObj<typeof Divider>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Example = {
  args: {
    children: "Divider"
  }
} as StoryObj<typeof Divider>;
