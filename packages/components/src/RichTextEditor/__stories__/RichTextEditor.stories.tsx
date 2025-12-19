import { StoryObj } from "@storybook/react";
import RichTextEditor from "../RichTextEditor";

export default {
  title: "Components/RichTextEditor",
  component: RichTextEditor,
  parameters: {
    layout: "centered"
  }
} as StoryObj<typeof RichTextEditor>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Example = {
} as StoryObj<typeof RichTextEditor>;

