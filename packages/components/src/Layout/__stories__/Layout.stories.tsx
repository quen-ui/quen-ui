import { StoryObj } from "@storybook/react";
import Layout from "../Layout";
import Header from "../Header";
import Footer from "../Footer";
import Content from "../Content";
import Sidebar from "../Sidebar";

export default {
  title: "Components/Layout",
  component: Layout,
  argTypes: {},
  tags: ["autodocs"]
} as StoryObj<typeof Layout>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Example = {
  render: () => (
    <Layout>
      <Header
        menuItems={[
          { key: "1", label: "nav1", active: true },
          { key: "2", label: "nav2" },
          { key: "1", label: "nav3" },
          { key: "4", label: "nav4" }
        ]}>
        LOGO
      </Header>
      <Sidebar
        menuItems={[
          { key: "1", label: "nav1", active: true },
          { key: "2", label: "nav2" },
          { key: "1", label: "nav3" },
          { key: "4", label: "nav4" }
        ]}>
        111
      </Sidebar>
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </Layout>
  )
} as StoryObj<typeof Layout>;
