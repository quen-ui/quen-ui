import { StoryObj } from "@storybook/react";
import { useState } from "react";
import { IconListTree, IconGridDots } from "@tabler/icons-react";
import SegmentedControl from "../SegmentedControl";
import { QUEN_SIZE } from "../../constants";

export default {
  title: "Components/SegmentedControl",
  component: SegmentedControl,
  parameters: {
    layout: "centered"
  },
  argTypes: {
    size: { control: "select", options: QUEN_SIZE }
  }
} as StoryObj<typeof SegmentedControl>;

export const Example: StoryObj<typeof SegmentedControl> = {
  render: (props) => {
    const [view, setView] = useState("list");

    const options = [
      { value: "list", label: "List", icon: <IconListTree /> },
      { value: "grid", label: "Grid", icon: <IconGridDots /> },
      { value: "map", label: "Map", disabled: true }
    ];

    return (
      <div style={{ padding: "40px" }}>
        <SegmentedControl
          options={options}
          value={view}
          onChange={setView}
          size={props.size}
        />

        <p style={{ marginTop: "20px", color: "#666" }}>
          Current value: <strong>{view}</strong>
        </p>
      </div>
    );
  }
};
