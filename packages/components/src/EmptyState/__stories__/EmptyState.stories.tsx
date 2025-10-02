import { StoryObj } from "@storybook/react";
import EmptyState from "../EmptyState";
import { Button } from "../../Button";

export default {
  title: "Components/EmptyState",
  component: EmptyState,
  parameters: {
    layout: "centered"
  },
  argTypes: {
    title: { control: "text" },
    description: { control: "text" }
  },
  tags: ["autodocs"]
} as StoryObj<typeof EmptyState>;

export const Example = {} as StoryObj<typeof EmptyState>;

export const Customize = {
  args: {
    title: "Customize title",
    description: "Customize description",
    children: <Button>Create</Button>
  }
} as StoryObj<typeof EmptyState>;
