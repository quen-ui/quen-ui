import { StoryObj } from "@storybook/react";
import DataGrid from "../";
import { IRowNode } from "src/core";

export default {
  title: "DataGrid",
  component: DataGrid,
  parameters: {
    layout: "centered"
  }
} as StoryObj<typeof DataGrid>;

const rowData = [
  {
    user: "Admin",
    email: "admin@example.com"
  },
  {
    user: "Admin2",
    email: "admin@example.com"
  }
];

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Example = {
  args: {
    rowData: rowData,
    columns: [{
      field: "user",
      headerName: "User",
    }, {
      field: "email",
      headerName: "Email",
    }]
  }
} as StoryObj<typeof DataGrid>;
