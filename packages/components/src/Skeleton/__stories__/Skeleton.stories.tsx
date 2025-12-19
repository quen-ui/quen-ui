import { StoryObj } from "@storybook/react";
import { Button } from "../../Button";
import Skeleton from "../Skeleton";
import SkeletonLayout from "../SkeletonLayout";
import SkeletonList from "../SkeletonList";
import SkeletonAvatar from "../SkeletonAvatar";

export default {
  title: "Components/Skeleton",
  component: Skeleton,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    width: { control: "number" },
    height: { control: "number" },
  }
} as StoryObj<typeof Skeleton>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Example = {
  args: {
    children: <Button>Button</Button>
  },
  render: (props) => (
    <div style={{ width: "500px", height: "500px" }}>
      <Skeleton {...props} />
    </div>
  )
} as StoryObj<typeof Skeleton>;

export const SkeletonLayoutExample = {
  render: (props) => (
    <SkeletonLayout
      style={{ width: "500px", height: "500px" }}
      loading={props.loading}
      direction="column"
      schema={{
        avatar: { size: "l" },
        title: 1,
        text: 2,
        button: true
      }}
    >
      <div>1</div>
    </SkeletonLayout>
  )
} as StoryObj<typeof SkeletonLayout>;

export const SkeletonListExample = {
  render: (props) => (
    <SkeletonList
      loading={props.loading}
      count={10}
      skeleton={<SkeletonAvatar />}
      itemProps={{ width: 40, height: 40 }}
      direction="row"
      gap={12}
    />
  )
} as StoryObj<typeof SkeletonList>;
