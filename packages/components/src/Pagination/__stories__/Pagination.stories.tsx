import { StoryObj } from "@storybook/react";
import Pagination from "../Pagination";
import { QUEN_SIZE } from "../../constants";

export default {
  title: "Components/Pagination",
  component: Pagination,
  parameters: {
    layout: "centered"
  },
  argTypes: {
    size: { control: "select", options: QUEN_SIZE },
  },
  tags: ["autodocs"]
} as StoryObj<typeof Pagination>;

export const Example = {
  args: {
    total: 50
  },
  render: (props) => (
    <div style={{ width: 1000 }}>
      <Pagination {...props} />
    </div>
  )
} as StoryObj<typeof Pagination>;
