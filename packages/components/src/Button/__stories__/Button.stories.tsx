import { StoryObj } from "@storybook/react";
import { Icon2fa } from "@tabler/icons-react";
import Button from "../Button";
import { BUTTON_SIZE, BUTTON_VIEW } from "../types";

export default {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered"
  },
  argTypes: {
    size: { control: "select", options: BUTTON_SIZE },
    view: { control: "select", options: BUTTON_VIEW },
    isDisabled: { control: "boolean" },
    isLoading: { control: "boolean" },
  },
  tags: ["autodocs"]
} as StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Example = {
  args: {
    children: "Button"
  }
} as StoryObj<typeof Button>;

export const LeftContent: StoryObj<typeof Button> = {
  args: {
    children: "Button",
    leftContent: <Icon2fa />
  }
};

export const RightContent: StoryObj<typeof Button> = {
  args: {
    children: "Button",
    rightContent: <Icon2fa />
  }
};
