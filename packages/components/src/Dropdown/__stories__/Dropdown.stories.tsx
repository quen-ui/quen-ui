import { StoryObj } from "@storybook/react";
import Dropdown from "../Dropdown";
import { QUEN_SIZE } from "../../constants";
import { IDropdownDefaultItem } from "../types";

const items: IDropdownDefaultItem[] = [
  { label: "1", groupId: 1 },
  { label: "2", groupId: 2 },
  { label: "12", groupId: 1 },
  { label: "123", groupId: 1 },
  { label: "124", groupId: 1 },
  { label: "125", groupId: 1 }
];


export default {
  title: "Components/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: { control: "select", options: QUEN_SIZE, defaultValue: "m" },
    isDisabled: { control: "boolean" },
  },
  tags: ["autodocs"]
} as StoryObj<typeof Dropdown>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Example = {
  args: {
    children: <div>Dropdown</div>,
    items: items,
  }
} as StoryObj<typeof Dropdown>;
