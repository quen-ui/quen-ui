import { StoryObj } from "@storybook/react";
import { useState } from "react";
import Switch from "../Switch";
import { QUEN_SIZE } from "../../constants";
import IconSuccess from "../../assets/icon-success.svg";
import IconError from "../../assets/icon-error.svg";

export default {
  title: "Components/Switch",
  component: Switch,
  parameters: {
    layout: "centered"
  },
  argTypes: {
    disabled: { control: "boolean" },
    label: { control: "text", defaultValue: "On/Off" },
    size: { control: "select", options: QUEN_SIZE }
  }
} as StoryObj<typeof Switch>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Example = {} as StoryObj<typeof Switch>;

export const ThumbIcon = {
  render: (props) => {
    const [checked, setChecked] = useState(false);

    return (
      <Switch
        {...props}
        value={checked}
        onChange={setChecked}
        thumbIcon={checked ? <IconSuccess /> : <IconError />}
      />
    );
  }
} as StoryObj<typeof Switch>;
