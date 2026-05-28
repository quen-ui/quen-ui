import React from "react";
import type {  StoryObj } from "@storybook/react";
import { Banner } from "../Banner";
import { Button } from "../../Button";
import { QUEN_SIZE } from "../../constants";

export default {
  title: "Components/Banner",
  component: Banner,
  parameters: {
    layout: "centered"
  },
  argTypes: {
    title: {
      control: { type: "text" },
      description: "Optional heading text",
      table: {
        type: { summary: "ReactNode" }
      }
    },
    description: {
      control: { type: "text" },
      description: "Main content area (supports JSX)",
      table: {
        type: { summary: "ReactNode" }
      }
    },
    size: { control: "select", options: QUEN_SIZE }
  }
} as StoryObj<typeof Banner>;

type Story = StoryObj<typeof Banner>;

export const Default: Story = {
  args: {
    description:
      "This is a standard informational banner with default settings."
  }
};

export const WithTitle: Story = {
  args: {
    title: "Update Available",
    description: "A new version of the application is ready to install."
  }
};

export const WithAction: Story = {
  args: {
    variant: "info",
    description: "New features are available. Learn what's new.",
    action: (
      <Button size="s" view="link">
        Learn more
      </Button>
    )
  }
};
