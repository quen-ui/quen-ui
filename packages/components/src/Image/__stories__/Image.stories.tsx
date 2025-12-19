import { StoryObj } from "@storybook/react";
import Image from "../Image";

export default {
  title: "Components/Image",
  component: Image,
  parameters: {
    layout: "centered"
  },
  argTypes: {
    src: {control: "text"},
    height: { control: "number" },
    width: { control: "number" },
  },
  args: {
    src: "https://ix-marketing.imgix.net/autotagging.png?auto=format,compress&w=1946",
    height: 200,
    width: 300
  }
} as StoryObj<typeof Image>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Example = {

} as StoryObj<typeof Image>;


