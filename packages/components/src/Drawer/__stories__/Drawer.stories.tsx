import { StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button } from "../../Button";
import Drawer from "../Drawer";

export default {
  title: "Components/Drawer",
  component: Drawer,
  parameters: {
    layout: "centered"
  },
  argTypes: {
    position: {
      control: "select",
      options: ["left", "right", "bottom", "top"]
    },
    noCloseOnClickOutside: { control: "boolean" },
    title: { control: "text", defaultValue: "Drawer" },
    size: { control: "select", options: ["xs", "s", "m", "l", "full"] }
  },
  tags: ["autodocs"]
} as StoryObj<typeof Drawer>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Example = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open drawer</Button>
        <Drawer {...args} open={isOpen} onClose={() => setIsOpen(false)}>
          Drawer content
        </Drawer>
      </>
    );
  }
} as StoryObj<typeof Drawer>;
