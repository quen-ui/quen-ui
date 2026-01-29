import { StoryObj } from "@storybook/react";
import { IconSearch } from "@tabler/icons-react";
import TextField from "../TextField";
import { QUEN_SIZE } from "../../constants";
import { Select } from "../../Select";
import { Button } from "../../Button";

export default {
  title: "Components/TextField",
  component: TextField,
  parameters: {
    layout: "centered"
  },
  argTypes: {
    size: { control: "select", options: QUEN_SIZE },
    disabled: { control: "boolean" },
    label: { control: "text", defaultValue: "Label" },
    error: { control: "text" },
    leftContentVariant: { control: "select", options: ["icon", "text", "addon"] },
  }
} as StoryObj<typeof TextField>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Example = {
} as StoryObj<typeof TextField>;

export const ExampleLeftContentSelect = {
  args: {
    leftContent: <Select items={[{ label: "1", value: "1"}]} />,
    leftContentVariant: "addon"
    }
} as StoryObj<typeof TextField>;

export const ExampleLeftContentText = {
  args: {
    leftContent: "http://",
    leftContentVariant: "text",
  }
} as StoryObj<typeof TextField>;

export const ExampleLeftContentIcon = {
  args: {
    leftContent: <IconSearch />,
    leftContentVariant: "icon"
  }
} as StoryObj<typeof TextField>;

export const ExampleRightContentButton = {
  args: {
    rightContent: <Button>Search</Button>,
    rightContentVariant: "addon"
  }
} as StoryObj<typeof TextField>;


