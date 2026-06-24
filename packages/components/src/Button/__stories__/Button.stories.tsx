import { StoryObj } from "@storybook/react";
import {
  Icon2fa,
  IconCopy,
  IconShare,
  IconDownload
} from "@tabler/icons-react";
import Button from "../Button";
import ButtonGroup from "../ButtonGroup";
import { BUTTON_VIEW } from "../types";
import { QUEN_SIZE } from "../../constants";

export default {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered"
  },
  argTypes: {
    size: { control: "select", options: QUEN_SIZE },
    view: { control: "select", options: BUTTON_VIEW },
    disabled: { control: "boolean" },
    loading: { control: "boolean" },
  }
} as StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Example = {
  args: {
    children: "Button"
  }
} as StoryObj<typeof Button>;

export const LeftContent: StoryObj<typeof Button> = {
  args: {
    children: "Button",
    leftContent: <Icon2fa />
  }
};

export const RightContent: StoryObj<typeof Button> = {
  args: {
    children: "Button",
    rightContent: <Icon2fa />
  }
};

export const Link: StoryObj<typeof Button> = {
  args: {
    children: "Button",
    view: "link",
    as: "a",
  }
};

export const ButtonGroupHorizontal: StoryObj<typeof Button> = {
  render: () => {
    return (
      <ButtonGroup view="primary" size="m">
        <Button leftContent={<IconCopy />}>Copy</Button>
        <Button leftContent={<IconShare />}>Share</Button>
        <Button leftContent={<IconDownload />}>Download</Button>
      </ButtonGroup>
    );
  }
};

export const ButtonGroupVertical: StoryObj<typeof Button> = {
  render: () => {
    return (
      <ButtonGroup orientation="vertical" fullWidth>
        <Button view="ghost">Settings</Button>
        <Button view="ghost">Profile</Button>
        <Button view="danger">Exit</Button>
      </ButtonGroup>
    );
  }
};
