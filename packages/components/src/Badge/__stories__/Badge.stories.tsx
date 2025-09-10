import { StoryObj } from "@storybook/react";
import { Icon2fa } from "@tabler/icons-react";
import Badge from "../Badge";
import { QUEN_SIZE } from "../../constants";

export default {
  title: "Components/Badge",
  component: Badge,
  parameters: {
    layout: "centered"
  },
  argTypes: {
    size: { control: "select", options: QUEN_SIZE },
  },
  tags: ["autodocs"]
} as StoryObj<typeof Badge>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Example = {
  args: {
    text: "Badge"
  }
} as StoryObj<typeof Badge>;

export const LeftContent: StoryObj<typeof Badge> = {
  args: {
    text: "Badge",
    leftContent: <Icon2fa />
  }
};

export const RightContent: StoryObj<typeof Badge> = {
  args: {
    text: "Badge",
    rightContent: <Icon2fa />
  }
};

export const BadgeContent: StoryObj<typeof Badge> = {
  args: {
    text: "5",
    children: <Icon2fa />
  }
}
