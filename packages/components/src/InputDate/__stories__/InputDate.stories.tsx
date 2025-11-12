import { StoryObj } from "@storybook/react";
import { useState } from "react";
import InputDate from "../InputDate";
import { QUEN_SIZE } from "../../constants";

export default {
  title: "Components/InputDate",
  component: InputDate,
  parameters: {
    layout: "centered"
  },
  argTypes: {
    label: { control: "text" },
    size: { control: "select", options: QUEN_SIZE },
    error: { control: "text" },
    range: { control: "boolean" },
    placeholder: { control: "text" }
  },
  args: {
    label: "Input date"
  }
} as StoryObj<typeof InputDate>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Example = {
  render: (props) => (
    <InputDate {...props} onChange={(value: any) => console.log(value)} />
  )
} as StoryObj<typeof InputDate>;

export const ValueFormatter = {
  render: (props) => {
    const [value, setValue] = useState<string[]>([]);

    const formatter = (date: string) => {
      if (value.length === 0) {
        return date;
      }
      return `${value.length} dates selected`;
    };

    return (
      <InputDate
        {...props}
        value={undefined}
        defaultValue={undefined}
        range={false}
        valueFormatter={formatter}
        onChange={(v) => v && setValue((prev) => [...prev, v])}
        getDayProps={(date) => {
          return {
            isSelected: value.includes(date.toLocaleDateString("en-CA"))
          }
        }}
      />
    );
  }
} as StoryObj<typeof InputDate>;
