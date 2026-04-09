import { useState } from "react";
import { StoryObj } from "@storybook/react";
import { Button, Flex, Tag, RadioButton } from "@quen-ui/components";
import DataGrid from "../";

export default {
  title: "DataGrid",
  component: DataGrid,
  parameters: {
    layout: "centered"
  },
  argTypes: {
    size: { control: "select", options: ["xs", "s", "m", "l"] }
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
    columns: [
      {
        field: "user",
        headerName: "User",
        sortable: true
      },
      {
        field: "email",
        headerName: "Email"
      }
    ]
  }
} as StoryObj<typeof DataGrid>;

export const ExampleBase = {
  args: {
    rowData: [
      {
        key: "1",
        name: "John Brown",
        age: 32,
        address: "New York No. 1 Lake Park",
        tags: ["nice", "developer"]
      },
      {
        key: "2",
        name: "Jim Green",
        age: 42,
        address: "London No. 1 Lake Park",
        tags: ["loser"]
      },
      {
        key: "3",
        name: "Joe Black",
        age: 32,
        address: "Sydney No. 1 Lake Park",
        tags: ["cool", "teacher"]
      }
    ],
    columns: [
      {
        headerName: "Name",
        field: "name",
        colId: "name",
        render: {
          cell: (params) => <a>{params.value}</a>
        }
      },
      {
        headerName: "Age",
        field: "age",
        colId: "age"
      },
      {
        headerName: "Address",
        field: "address",
        colId: "address"
      },
      {
        headerName: "Tags",
        colId: "tags",
        field: "tags",
        render: {
          cell: (params) => (
            <Flex gap="s" align="center" wrap>
              {(params.value as any[]).map((tag) => {
                return (
                  <Tag size="xs" color={"violet"} key={tag}>
                    {tag.toUpperCase()}
                  </Tag>
                );
              })}
            </Flex>
          )
        }
      },
      {
        headerName: "Action",
        colId: "action",
        render: {
          cell: (params) => (
            <Flex gap="s" justify="space-between">
              <Button view="link" size="s">
                Invite {(params.data as any).name}
              </Button>
              <Button view="link" size="s">
                Delete
              </Button>
            </Flex>
          )
        }
      }
    ]
  }
} as StoryObj<typeof DataGrid>;

export const ExampleSelection = {
  args: {
    rowData: [
      {
        id: "1",
        name: "John Brown",
        age: 32,
        address: "New York No. 1 Lake Park"
      },
      {
        id: "2",
        name: "Jim Green",
        age: 42,
        address: "London No. 1 Lake Park"
      },
      {
        id: "3",
        name: "Joe Black",
        age: 32,
        address: "Sydney No. 1 Lake Park"
      }
    ],
    columns: [
      {
        headerName: "Name",
        field: "name",
        colId: "name"
      },
      {
        headerName: "Age",
        field: "age",
        colId: "age"
      },
      {
        headerName: "Address",
        field: "address",
        colId: "address"
      }
    ]
  },
  render: (props) => {
    const [selectionMode, setSelectionMode] = useState<"single" | "multi">(
      "single"
    );
    return (
      <Flex direction="column" gap="m">
        <RadioButton.Group
          direction="horizontal"
          value={selectionMode}
          onChange={(value) => setSelectionMode(value as any)}
          options={[
            { label: "Single", value: "single" },
            { label: "Multi", value: "multi" }
          ]}
        />
        <DataGrid
          {...props}
          rowSelection={{ mode: selectionMode }}
          onSelectionChange={(nodes) => console.log(nodes)}
        />
      </Flex>
    );
  }
} as StoryObj<typeof DataGrid>;

export const ExamplePagination = {
  args: {
    rowData: Array.from({ length: 54 }).map((_, i) => ({
      id: i,
      name: `John Brown ${i}`,
      age: 10 + i,
      address: "New York No. 1 Lake Park"
    })),
    columns: [
      {
        headerName: "Name",
        field: "name",
        colId: "name"
      },
      {
        headerName: "Age",
        field: "age",
        colId: "age"
      },
      {
        headerName: "Address",
        field: "address",
        colId: "address"
      }
    ]
  },
  render: (props) => {
    return (
      <DataGrid
        {...props}
        pagination={true}
        onPaginationChanged={(event) => console.log(event)}
      />
    );
  }
} as StoryObj<typeof DataGrid>;

export const ExampleColumnsGroup = {
  args: {
    rowData: Array.from({ length: 54 }).map((_, i) => ({
      id: i,
      name: `John Brown ${i}`,
      age: 10 + i,
      city: "New York",
      street: "1 Lake Park"
    })),
    columns: [
      {
        headerName: "Name",
        field: "name",
        colId: "name"
      },
      {
        headerName: "Age",
        field: "age",
        colId: "age"
      },
      {
        headerName: "Address",
        children: [
          {
            headerName: "City",
            field: "city"
          },
          {
            headerName: "Street",
            field: "street"
          }
        ]
      }
    ]
  },
  render: (props) => {
    return (
      <DataGrid
        {...props}
        pagination={true}
        onPaginationChanged={(event) => console.log(event)}
      />
    );
  }
} as StoryObj<typeof DataGrid>;
