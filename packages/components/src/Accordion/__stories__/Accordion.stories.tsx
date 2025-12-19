import { StoryObj } from "@storybook/react";
import Accordion from "../Accordion";
import { QUEN_SIZE } from "../../constants";
import { IAccordionDefaultItem } from "../types";

export default {
  title: "Components/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered"
  },
  argTypes: {
    size: { control: "select", options: QUEN_SIZE },
    activeKeys: { control: "object", defaultValue: [] }
  },
} as StoryObj<typeof Accordion>;

const items: IAccordionDefaultItem[] = [
  {
    key: "general-info",
    className: "general-section",
    leftContent: <span>📁</span>,
    rightContent: <span>⭐</span>,
    label: "General Information",
    children: (
      <div>
        <p>
          This section contains general information about the product or
          service.
        </p>
        <p>You can find basic details and overview here.</p>
      </div>
    ),
    showArrow: true,
    disabled: false
  },
  {
    key: "settings",
    className: "settings-section",
    leftContent: <span>⚙️</span>,
    label: "Settings & Configuration",
    children: (
      <div>
        <p>Available settings and configuration options:</p>
        <ul>
          <li>User Preferences</li>
          <li>Privacy Settings</li>
          <li>Notification Controls</li>
        </ul>
      </div>
    ),
    showArrow: true,
    disabled: false
  },
  {
    key: "faq",
    label: "Frequently Asked Questions",
    children: (
      <div>
        <h4>Common Questions:</h4>
        <p>
          <strong>How to reset password?</strong> - Use the Forgot Password
          feature on login page.
        </p>
        <p>
          <strong>Where to find documentation?</strong> - Visit our help center
          at help.example.com
        </p>
      </div>
    ),
    showArrow: false
  },
  {
    key: "support",
    leftContent: <span>📞</span>,
    rightContent: <span>💬</span>,
    label: "Contact & Support",
    children: (
      <div>
        <p>
          <strong>Phone:</strong> +1 (555) 123-4567
        </p>
        <p>
          <strong>Email:</strong> support@company.com
        </p>
        <p>
          <strong>Business Hours:</strong> Mon-Fri, 9:00 AM - 6:00 PM EST
        </p>
      </div>
    ),
    showArrow: true,
    disabled: true
  },
  {
    key: "additional-info",
    className: "additional-section",
    label: <strong>Additional Resources</strong>,
    children: (
      <div>
        <p>
          This section provides additional resources and information that might
          be helpful for users.
        </p>
        <button onClick={() => console.log("Resource accessed")}>
          Access Resources
        </button>
      </div>
    ),
    showArrow: true
  }
];

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Example = {
  args: {
    items: items,
    destroyOnHidden: true
  }
} as StoryObj<typeof Accordion>;

