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
    isOpen: { control: "boolean" },
    isCloseButton: { control: "boolean" },
    title: { control: "text", defaultValue: "111" }
  },
  tags: ["autodocs"]
} as StoryObj<typeof Modal>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Example = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open</Button>
        <Modal
          isOpen={isOpen}
          title="Modal"
          isCloseButton
          onClickClose={() => setIsOpen(false)}
          isFullScreen
        />
      </>
    );
  }
} as StoryObj<typeof Modal>;
