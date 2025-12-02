import { StoryObj } from "@storybook/react";
import { useState } from "react";
import LoadingOverlay from "../LoadingOverlay";
import { Button } from "../../Button";
import { Flex } from "../../Flex";
import { TextField } from "../../TextField";

export default {
  title: "Components/LoadingOverlay",
  component: LoadingOverlay,
  parameters: {
    layout: "centered"
  },
  argTypes: {
    loaderVariant: { control: "select", options: ["bars", "dots", "oval"] },
  }
} as StoryObj<typeof LoadingOverlay>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Example = {
  render: (props) => {
    const [loading, setLoading] = useState(false);
    return (
      <>
        <LoadingOverlay {...props} loading={loading}>
          <Flex direction="column" gap="m">
            <Flex  gap="m">
              <TextField label="First name" />
              <TextField label="Last name" />
            </Flex>
            <TextField label="Email" />
            <TextField label="Password" />
          </Flex>
        </LoadingOverlay>
        <Flex justify="center" >
          <Button onClick={() => setLoading((prev) => !prev)}>
            Toggle overlay
          </Button>
        </Flex>
      </>
    );
  }
} as StoryObj<typeof LoadingOverlay>;
