import { Header } from "../";
import { HEADER_TYPE, HEADER_SIZE } from "../types";

export default {
  title: "Typography/Header",
  component: Header,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    color: { control: "color" },
    size: { control: "select", options: HEADER_SIZE },
    type: { control: "select", options: HEADER_TYPE },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Example = {
  args: {
    children: "Header"
  }
};
