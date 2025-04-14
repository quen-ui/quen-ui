import { StoryObj } from "@storybook/react";
import Breadcrumbs from "../Breadcrumbs";
import { IconHome } from "@tabler/icons-react";
import { QUEN_SIZE } from "../../constants";

export default {
  title: "Components/Breadcrumbs",
  component: Breadcrumbs,
  parameters: {
    layout: "centered"
  },
  argTypes: {
    title: { control: "text" },
    extra: { control: "text" },
    size: { control: "select", options: QUEN_SIZE }
  },
  tags: ["autodocs"]
} as StoryObj<typeof Breadcrumbs>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Example = {
  args: {
    isOnlyIconRoot: true,
    items: [
      { label: "Main", href: "/", icon: <IconHome width={16} /> },
      { label: "Page 1" },
      { label: "Page 2" },
      { label: "Page 3" }
    ]
  }
} as StoryObj<typeof Breadcrumbs>;
