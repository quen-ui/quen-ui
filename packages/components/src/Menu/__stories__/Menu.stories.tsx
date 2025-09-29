import { StoryObj } from "@storybook/react";
import Menu from "../Menu";

const items = [
  {
    label: "Item 1",
  },
  {
    label: "Item 2",
  },
  {
    label: "Item 3",
  }
];

export default {
  title: "Components/Menu",
  component: Menu,
  parameters: {
    layout: "centered"
  },
  argTypes: {
    direction: { control: "radio" }
  },
  tags: ["autodocs"]
} as StoryObj<typeof Menu>;

export const Example = {
  args: {
    items,
  }
} as StoryObj<typeof Menu>;
