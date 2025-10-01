import { StoryObj } from "@storybook/react";
import Menu from "../Menu";
import { QUEN_SIZE } from "../../constants";
import { IconSettings } from "@tabler/icons-react"

const items = [
  {
    key: "1",
    label: "Item 1"
  },
  {
    key: "2",
    label: "Item 2"
  },
  {
    key: "3",
    label: "Item 3"
  }
];

export default {
  title: "Components/Menu",
  component: Menu,
  parameters: {
    layout: "centered"
  },
  argTypes: {
    direction: { control: "radio" },
    size: {control: "select", options: QUEN_SIZE},
  },
  tags: ["autodocs"]
} as StoryObj<typeof Menu>;

export const Example = {
  args: {
    items
  }
} as StoryObj<typeof Menu>;

export const SubMenu = {
  args: {
    items: [
      {
        key: "1",
        label: "Item 1",
        // children: [
        //   {
        //     key: "SubItem1",
        //     label: "SubItem 1",
        //     rightContent: <IconSettings />,
        //     children: [
        //       {
        //         key: "SubItem12",
        //         label: "SubItem 12",
        //       }
        //     ]
        //   },
        //   {
        //     key: "SubItem2",
        //     label: "SubItem 2",
        //   }
        // ]
      },
      {
        key: "2",
        label: "Item 2"
      },
      {
        key: "3",
        label: "Item 3",
        children: [
          {
            key: "SubItem131",
            label: "SubItem 1",
            rightContent: <IconSettings />,
            children: [
              {
                key: "SubItem123",
                label: "SubItem 112",
              }
            ]
          },
          {
            key: "SubItem23",
            label: "SubItem 21",
            children: [
              {
                key: "SubItem1233",
                label: "SubItem 1132",
              }
            ]
          }
        ]
      }
    ],
    activeKeys: ["SubItem12"]
  }
} as StoryObj<typeof Menu>;
