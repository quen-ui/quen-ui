import { StoryObj } from "@storybook/react";
import { message } from "../";
import { Button } from "../../Button";
import Message from "../Message";
import { Flex } from "../../Flex";
import { IMessageConfig } from "../types";

export default {
  title: "Components/Message",
  component: Message,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"]
} as StoryObj<IMessageConfig>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Example = {
  render: () => {
    const [messageApi, contextHolder] = message.useMessage();
    return (
      <Flex gap="m">
        {contextHolder}
        <Button view="success" onClick={() => messageApi.success("Success")}>
          Success
        </Button>
        <Button view="warning" onClick={() => messageApi.warning("Warning")}>
          Warning
        </Button>
        <Button view="secondary" onClick={() => messageApi.info("Info")}>
          Info
        </Button>
        <Button view="danger" onClick={() => messageApi.error("Error")}>
          Error
        </Button>
        <Button onClick={() => messageApi.loading("Loading")}>Loading</Button>
      </Flex>
    );
  }
} as StoryObj<IMessageConfig>;
