import { StoryObj } from "@storybook/react";
import Tabs from "../";

export default {
  title: "Components/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered"
  },
  argTypes: {
    outline: { control: "boolean" },
  },
} as StoryObj<typeof Tabs>;

export const Example = {
  render: ({ outline }) => {
    return (
      <Tabs defaultValue="2" outline={outline}>
        <Tabs.TabsList>
          <Tabs.Tab value="1">Tab 1</Tabs.Tab>
          <Tabs.Tab value="2">Tab 2</Tabs.Tab>
          <Tabs.Tab value="3">Tab 3</Tabs.Tab>
        </Tabs.TabsList>
        <Tabs.TabPanel value="1">1</Tabs.TabPanel>
        <Tabs.TabPanel value="2">2</Tabs.TabPanel>
        <Tabs.TabPanel value="3">3</Tabs.TabPanel>
      </Tabs>
    );
  }
} as StoryObj<typeof Tabs>;
