import { StoryObj } from "@storybook/react";
import Slider from "../Slider";
import { QUEN_SIZE } from "../../constants";

export default {
  title: "Components/Slider",
  component: Slider,
  parameters: {
    layout: "centered"
  },
  argTypes: {
    size: { control: "select", options: QUEN_SIZE }
  }
} as StoryObj<typeof Slider>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const ExampleSingle = {
  argTypes: {
    value: { control: "range" }
  },
  render: (props) => (
    <div style={{ width: 300, margin: "50px auto" }}>
      <Slider
        {...props}
        onChange={(value) => console.log(value)}
        tooltip={{ open: true }}
      />
    </div>
  )
} as StoryObj<typeof Slider>;

export const ExampleRange = {
  argTypes: {
    value: { control: "object"}
  },
  render: (props) => (
    <div style={{ width: 300, margin: "50px auto" }}>
      <Slider
        {...props}
        onChange={(value) => console.log(value)}
        tooltip={{ open: true }}
      />
    </div>
  )
} as StoryObj<typeof Slider>;

export const ExampleMarks = {
  render: (props) => (
    <div style={{ width: 300, margin: "50px auto" }}>
      <Slider
        {...props}
        tooltip={{ open: true }}
        onChange={(value) => console.log(value)}
        marks={[
          { value: 0, label: "0%" },
          { value: 50, label: "50%" },
          { value: 100, label: "100%" }
        ]}
      />
    </div>
  )
} as StoryObj<typeof Slider>;
