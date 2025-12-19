import { StoryObj } from "@storybook/react";
import Loader from "../Loader";
import { QUEN_SIZE } from "../../constants";
import { LOADER_VIEW } from "../types";

export default {
  title: "Components/Loader",
  component: Loader,
  parameters: {
    layout: "centered"
  },
  argTypes: {
    size: { control: "select", options: QUEN_SIZE },
    view: { control: "select", options: LOADER_VIEW },
    isDisabled: { control: "boolean" },
  }
} as StoryObj<typeof Loader>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Example = {
} as StoryObj<typeof Loader>;

