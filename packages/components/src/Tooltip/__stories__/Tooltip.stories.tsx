import { StoryObj } from "@storybook/react";
import Tooltip from "../Tooltip";
import { Button } from "../../Button";

export default {
  title: "Components/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered"
  },
  argTypes: {
    text: { control: "text" },
    width: { control: "number"}
  },
  args: {
    text: "Tooltip"
  }
} as StoryObj<typeof Tooltip>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Example = {
  args: {
    children: <Button>Hover me</Button>
  }
} as StoryObj<typeof Tooltip>;


