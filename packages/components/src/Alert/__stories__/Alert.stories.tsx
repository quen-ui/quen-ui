import { StoryObj } from "@storybook/react";
import { IconAlertSmall } from "@tabler/icons-react";
import Alert from "../Alert";
import { Button } from "../../Button";
import { QUEN_SIZE } from "../../constants";

export default {
  title: "Components/Alert",
  component: Alert,
  parameters: {
    layout: "centered"
  },
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    size: { control: "select", options: QUEN_SIZE },
  },
  tags: ["autodocs"]
} as StoryObj<typeof Alert>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Example = {
  args: {
    title: "Info Text",
    description:  "Info Text Info Text Info Text Info TextInfo Text"
  }
} as StoryObj<typeof Alert>;

export const ExampleIcon = {
  args: {
    title: "Info Text",
    description:  "Info Text Info Text Info Text Info TextInfo Text",
    icon: <IconAlertSmall />
  }
} as StoryObj<typeof Alert>;

export const ExampleAction = {
  args: {
    title: "Info Text",
    description:  "Info Text Info Text Info Text Info TextInfo Text",
    icon: <IconAlertSmall />,
    action: <Button>Save</Button>
  }
} as StoryObj<typeof Alert>;
