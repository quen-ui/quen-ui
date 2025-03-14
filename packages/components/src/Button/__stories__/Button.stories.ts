import { StoryObj } from "@storybook/react";
import Button from "../Button";
import { BUTTON_SIZE } from "../types";

export default {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered"
  },
  argTypes: {
    size: { control: "select", options: BUTTON_SIZE },
  },
  tags: ["autodocs"],
} as StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Example = {
  args: {
    children: "Button"
  }
};
