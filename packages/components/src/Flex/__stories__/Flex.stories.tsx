import { StoryObj } from "@storybook/react";
import { Button } from "../../Button";
import Flex from "../Flex";

export default {
  title: "Components/Flex",
  component: Flex,
  parameters: {
    layout: "centered"
  },
  argTypes: {
    gap: { control: "select", options: ["3xs", "2xs", "xs", "s", "m", "l", "xl", "2xl", "3xl", "4xl", "5xl", "6xl"] },
    columnGap: { control: "select", options: ["3xs", "2xs", "xs", "s", "m", "l", "xl", "2xl", "3xl", "4xl", "5xl", "6xl"] },
    rowGap: { control: "select", options: ["3xs", "2xs", "xs", "s", "m", "l", "xl", "2xl", "3xl", "4xl", "5xl", "6xl"] },
  },
  tags: ["autodocs"]
} as StoryObj<typeof Flex>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Example = {
  args: {
    children: <><Button>Button</Button><Button>Button</Button><Button>Button</Button></>
  }
} as StoryObj<typeof Flex>;

