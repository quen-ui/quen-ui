import { StoryObj } from "@storybook/react";
import Card from "../Card";
import { QUEN_SIZE } from "../../constants";

export default {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered"
  },
  argTypes: {
    title: { control: "text" },
    extra: { control: "text" },
    size: { control: "select", options: QUEN_SIZE }
  },
  tags: ["autodocs"]
} as StoryObj<typeof Card>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Example = {
  args: {
    children: "Card"
  }
} as StoryObj<typeof Card>;

export const Cover = {
  args: {
    children: "Card",
    cover: (
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    )
  }
} as StoryObj<typeof Card>;
