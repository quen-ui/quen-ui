import React from "react";
import { StoryObj } from "@storybook/react";
import Tab from "../Tab";
import Tabs from "../";

export default {
  title: "Components/Tabs",
  component: Tab,
  parameters: {
    layout: "centered"
  },
  argTypes: {},
  tags: ["autodocs"]
} as StoryObj<typeof Tab>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Example = {
  render: () => {
    return (
      <Tabs defaultValue="2">
        <Tabs.TabsList>
          <Tabs.Tab value="1">111</Tabs.Tab>
          <Tab value="2">111</Tab>
        </Tabs.TabsList>
        <Tabs.TabPanel value="1">1</Tabs.TabPanel>
        <Tabs.TabPanel value="2">2</Tabs.TabPanel>
      </Tabs>
    );
  }
} as StoryObj<typeof Tab>;
