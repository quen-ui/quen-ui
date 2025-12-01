import { StoryObj } from "@storybook/react";
import Highlight from "../Highlight";
export default {
  title: "Components/Highlight",
  component: Highlight,
  parameters: {
    layout: "centered"
  },
  argTypes: {
    color: {control: "text" }
  }
} as StoryObj<typeof Highlight>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Example = {
  args: {
    query: "react",
    children: "I love react and React ecosystem"
  }
} as StoryObj<typeof Highlight>;

export const ExampleRange = {
  args: {
    ranges: [{ start: 5, end: 15 }],
    children: "I love react and React ecosystem"
  }
} as StoryObj<typeof Highlight>;

export const ExampleArray = {
  args: {
    query: ["react", "ecosystem"],
    children: "I love react and React ecosystem"
  }
} as StoryObj<typeof Highlight>;

export const ExampleRegex = {
  args: {
    children: "I love react and React ecosystem"
  },
  render: (props) => (
    <Highlight {...props} query={/react|ecosystem/i} />
  )
} as StoryObj<typeof Highlight>;

export const ExampleCustomTag = {
  args: {
    query: "react",
    children: "I love react and React ecosystem",
    highlightTag: "strong"
  }
} as StoryObj<typeof Highlight>;

export const ExampleCustomComponent = {
  args: {
    query: "react",
    children: "I love react and React ecosystem",
  },

  render: (props) => {
    const Component = ({ children, ...rest }: any) => <span {...rest} style={{ background: "pink", padding: "0 .2em", borderRadius: 4 }}>{children}</span>;
    return (
      <Highlight {...props} highlightComponent={Component}>
        {props.children}
      </Highlight>
    )
  }
} as StoryObj<typeof Highlight>;
