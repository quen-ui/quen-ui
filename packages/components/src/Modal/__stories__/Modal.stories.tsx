import { StoryObj } from "@storybook/react";
import { useState } from "react";
import Modal from "../Modal";
import { QUEN_SIZE } from "../../constants";
import { Button } from "../../Button";

export default {
  title: "Components/Modal",
  component: Modal,
  parameters: {
    layout: "centered"
  },
  argTypes: {
    size: { control: "select", options: QUEN_SIZE },
    open: { control: "boolean" },
    closeButton: { control: "boolean" },
    title: { control: "text", defaultValue: "111" }
  },
  tags: ["autodocs"]
} as StoryObj<typeof Modal>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Example = {
  render: ({ open: defaultOpen, ...args }) => {
    const [open, setIsOpen] = useState(defaultOpen);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open</Button>
        <Modal
          open={open}
          title="Modal"
          closeButton
          onClickClose={() => setIsOpen(false)}
          fullScreen
          {...args}
        />
      </>
    );
  }
} as StoryObj<typeof Modal>;
