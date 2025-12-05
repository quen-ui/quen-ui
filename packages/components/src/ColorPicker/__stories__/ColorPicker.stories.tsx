import { StoryObj } from "@storybook/react";
import ColorPicker from "../ColorPicker";
import { QUEN_SIZE } from "../../constants";

export default {
  title: "Components/ColorPicker",
  component: ColorPicker,
  parameters: {
    layout: "centered"
  },
  argTypes: {
    size: { control: "select", options: QUEN_SIZE },
  },
} as StoryObj<typeof ColorPicker>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Example = {
} as StoryObj<typeof ColorPicker>;
