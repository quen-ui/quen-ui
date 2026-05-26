import { useEffect, useState } from "react";
import { StoryObj } from "@storybook/react";
import { http, HttpResponse } from "msw";
import { Button, Flex, Tag, RadioButton, Select } from "@quen-ui/components";
import DataGrid from "../";
import type {
  IFilterModelItem,
  IFilterProps, ISortModel,
  TFilterType
} from "../../../core";

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

function StatusFilter<T>({
  field,
  currentFilter,
  onFilterChange
}: IFilterProps<T>) {
  const handleStatusChange = (status: string | null) => {
    onFilterChange({
      field,
      filterType: "text" as TFilterType,
      type: "equals",
      filter: status
    });
  };

  return (
    <div style={{ padding: 8 }}>
      <Select
        zIndex={10000}
        size="s"
        placeholder="Select status..."
        value={currentFilter?.filter as string}
        items={["Active", "Inactive", "Pending"].map((s) => ({
          label: s,
          value: s
        }))}
        onChange={handleStatusChange}
      />
    </div>
  );
}

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

export const ExampleFiltration = {
  args: {
    rowData: Array.from({ length: 54 }).map((_, i) => ({
      id: i,
      name: `John Brown ${i}`,
      age: 10 + i,
      address: "New York No. 1 Lake Park",
      birthday: ["1950-12-01", "2005-09-20", "2010-01-10", "2005-07-15"][
        Math.floor(Math.random() * 4)
      ],
      status: ["Active", "Inactive", "Pending"][Math.floor(Math.random() * 3)]
    })),
    columns: [
      {
        headerName: "Name",
        field: "name",
        colId: "name",
        filter: "text"
      },
      {
        headerName: "Age",
        field: "age",
        colId: "age",
        filter: "number"
      },
      {
        headerName: "Address",
        field: "address",
        colId: "address",
        filter: true
      },
      {
        headerName: "BirthDay",
        field: "birthday",
        colId: "birthday",
        filter: "date"
      },
      {
        field: "status",
        headerName: "Status",
        filter: true,
        filterComponent: StatusFilter
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

export const ExamplePinned = {
  args: {
    rowData: Array.from({ length: 54 }).map((_, i) => ({
      id: crypto.randomUUID(),
      name: `John Brown ${i}`,
      email: `john-brown${i}@gmail.com`,
      department: "Development",
      actions: ""
    })),
    columns: [
      {
        field: "id",
        headerName: "ID",
        width: 80,
        pinned: "left",
        lockPosition: true
      },
      {
        field: "name",
        headerName: "Full Name",
        width: 200,
        sortable: true,
        filter: "text"
      },
      { field: "email", headerName: "Email", width: 250, filter: "text" },
      { field: "department", headerName: "Department", width: 150 },
      {
        field: "actions",
        headerName: "Actions",
        width: 120,
        pinned: "right",
        render: { cell: () => <Button size="s">Edit</Button> }
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

export const ExampleEdit = {
  args: {
    rowData: Array.from({ length: 54 }).map((_, i) => ({
      id: crypto.randomUUID(),
      name: `John Brown ${i}`,
      email: `john-brown${i}@gmail.com`,
      department: "Development",
      actions: ""
    })),
    columns: [
      {
        field: "id",
        headerName: "ID",
        width: 80
      },
      {
        field: "name",
        headerName: "Full Name",
        width: 200
      },
      {
        field: "email",
        headerName: "Email",
        width: 250,
        filter: "text",
        editable: true,
        validateCell: ({ newValue }) => {
          if (!newValue) return "Email is required";
          if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newValue))
            return "Invalid email format";
          return null;
        }
      },
      { field: "department", headerName: "Department", width: 150 },
      {
        field: "actions",
        headerName: "Actions",
        width: 120,
        pinned: "right",
        render: { cell: () => <Button size="s">Edit</Button> }
      }
    ]
  },
  render: (props) => {
    return (
      <DataGrid
        {...props}
        pagination={true}
        onPaginationChanged={(event) => console.log(event)}
        onEditCancel={({ oldValue }) => {
          console.log("Reverted to:", oldValue);
        }}
        onEditSave={({ newValue, rowId, field }) => {
          console.log(newValue, rowId, field);
        }}
      />
    );
  }
} as StoryObj<typeof DataGrid>;

export const ExampleRowEdit = {
  args: {
    rowData: Array.from({ length: 54 }).map((_, i) => ({
      id: crypto.randomUUID(),
      name: `John Brown ${i}`,
      email: `john-brown${i}@gmail.com`,
      department: "Development"
    })),
    columns: [
      {
        field: "id",
        headerName: "ID",
        width: 80,
        rowEditable: true
      },
      {
        field: "name",
        headerName: "Full Name",
        width: 200,
        rowEditable: true
      },
      {
        field: "email",
        headerName: "Email",
        width: 250,
        filter: "text",
        editable: true,
        rowEditable: true,
        validateCell: ({ newValue }) => {
          if (!newValue) return "Email is required";
          if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newValue))
            return "Invalid email format";
          return null;
        }
      },
      {
        field: "department",
        headerName: "Department",
        width: 150,
        rowEditable: true
      }
    ]
  },
  render: (props) => {
    return (
      <DataGrid
        {...props}
        pagination={true}
        onPaginationChanged={(event) => console.log(event)}
        rowEditing={true}
        startRowEditOnDoubleClick={true}
        onRowEditSave={({ rowId, rowChanges }) => {
          console.log(rowId, rowChanges);
        }}
      />
    );
  }
} as StoryObj<typeof DataGrid>;

const ROW_DATA = Array.from({ length: 54 }).map((_, i) => ({
  id: crypto.randomUUID(),
  name: `John Brown ${i}`,
  age: 10 + i,
  address: "New York No. 1 Lake Park",
}))

export const ExampleServer: StoryObj<typeof DataGrid> = {
  args: {
    columns: [
      {
        headerName: "Name",
        field: "name",
        colId: "name",
        filter: "text"
      },
      {
        headerName: "Age",
        field: "age",
        colId: "age",
        sortable: true
      },
      {
        headerName: "Address",
        field: "address",
        colId: "address"
      }
    ]
  },
  parameters: {
    msw: {
      handlers: [
        http.get("https://mock-data-grid.quen-ui.com", (params) => {
          const searchParams = new URL(params.request.url).searchParams;
          const page = Number(searchParams.get("page") || 1);
          const limit = Number(searchParams.get("limit") || 10);
          const sort = searchParams.get("sort");
          const filter = searchParams.get("filter");

          const filterOperators = {
            contains: (value: any, filter: string) =>
              String(value)
                .toLowerCase()
                .includes(String(filter).toLowerCase()),

            equals: (value: any, filter: any) => value === filter,

            startsWith: (value: any, filter: string) =>
              String(value)
                .toLowerCase()
                .startsWith(String(filter).toLowerCase()),

            endsWith: (value: any, filter: string) =>
              String(value)
                .toLowerCase()
                .endsWith(String(filter).toLowerCase()),

            greaterThan: (value: any, filter: number) =>
              Number(value) > Number(filter),

            lessThan: (value: any, filter: number) =>
              Number(value) < Number(filter),

            inRange: (value: any, filter: number, filterTo: number) =>
              Number(value) >= Number(filter) &&
              Number(value) <= Number(filterTo),

            empty: (value: any) =>
              value === null || value === undefined || value === "",

            notBlank: (value: any) =>
              value !== null && value !== undefined && value !== ""
          };

          function applySingleFilter<T>(
            row: T,
            filterModel: IFilterModelItem<T>
          ): boolean {
            const fieldValue = (row as any)[filterModel.field];

            switch (filterModel.filterType) {
              case "text": {
                const textValue = String(fieldValue || "");
                switch (filterModel.type) {
                  case "contains":
                    return filterOperators.contains(
                      textValue,
                      filterModel.filter as string
                    );
                  case "equals":
                    return filterOperators.equals(
                      textValue,
                      filterModel.filter
                    );
                  case "startsWith":
                    return filterOperators.startsWith(
                      textValue,
                      filterModel.filter as string
                    );
                  case "endsWith":
                    return filterOperators.endsWith(
                      textValue,
                      filterModel.filter as string
                    );
                  case "empty":
                    return filterOperators.empty(textValue);
                  case "notBlank":
                    return filterOperators.notBlank(textValue);
                  default:
                    return true;
                }
              }

              case "number": {
                const numValue = Number(fieldValue);
                switch (filterModel.type) {
                  case "equals":
                    return filterOperators.equals(
                      numValue,
                      Number(filterModel.filter)
                    );
                  case "greaterThan":
                    return filterOperators.greaterThan(
                      numValue,
                      Number(filterModel.filter)
                    );
                  case "lessThan":
                    return filterOperators.lessThan(
                      numValue,
                      Number(filterModel.filter)
                    );
                  case "inRange":
                    return filterOperators.inRange(
                      numValue,
                      Number(filterModel.filter),
                      Number(filterModel.filterTo)
                    );
                  case "empty":
                    return filterOperators.empty(fieldValue);
                  case "notBlank":
                    return filterOperators.notBlank(fieldValue);
                  default:
                    return true;
                }
              }

              case "date": {
                const dateValue = new Date(fieldValue).getTime();
                const filterDate = filterModel.filter
                  ? new Date(filterModel.filter).getTime()
                  : null;
                const filterToDate = filterModel.filterTo
                  ? new Date(filterModel.filterTo).getTime()
                  : null;

                switch (filterModel.type) {
                  case "equals":
                    return filterOperators.equals(dateValue, filterDate);
                  case "greaterThan":
                    return dateValue > (filterDate as number);
                  case "lessThan":
                    return dateValue < (filterDate as number);
                  case "inRange":
                    return dateValue >= (filterDate as number) && dateValue <= (filterToDate as number);
                  case "empty":
                    return filterOperators.empty(fieldValue);
                  case "notBlank":
                    return filterOperators.notBlank(fieldValue);
                  default:
                    return true;
                }
              }

              default:
                return true;
            }
          }
          function applyMultipleSorts<T>(
            rows: T[],
            sortModels: ISortModel<T>[]
          ): T[] {
            if (!sortModels || sortModels.length === 0) return rows;

            return [...rows].sort((a, b) => {
              for (const sortModel of sortModels) {
                const { field, sort } = sortModel;

                if (!sort) continue;

                const aValue = (a as any)[field];
                const bValue = (b as any)[field];

                if (aValue === null || aValue === undefined) {
                  if (bValue === null || bValue === undefined) continue;
                  return sort === "asc" ? -1 : 1;
                }
                if (bValue === null || bValue === undefined) {
                  return sort === "asc" ? 1 : -1;
                }

                let comparison = 0;

                if (typeof aValue === "number" && typeof bValue === "number") {
                  comparison = aValue - bValue;
                } else if (aValue instanceof Date && bValue instanceof Date) {
                  comparison = aValue.getTime() - bValue.getTime();
                } else {
                  comparison = String(aValue).localeCompare(String(bValue));
                }

                if (comparison !== 0) {
                  return sort === "asc" ? comparison : -comparison;
                }
              }
              return 0;
            });
          }

          function applyMultipleFilters<T>(rows: T[], filterModels: IFilterModelItem<T>[]): T[] {
            if (!filterModels || filterModels.length === 0) return rows;

            return rows.filter(row => {
              return filterModels.every(filterModel => applySingleFilter(row, filterModel));
            });
          }
          let rows = [...ROW_DATA];
          if (filter) {
            try {
              const filterModel: IFilterModelItem[] = JSON.parse(filter);
              rows = applyMultipleFilters(rows, filterModel);
            } catch (error) {
              console.error("Error parsing filter:", error);
            }
          }

          if (sort) {
            try {
              const sortModel: ISortModel<any>[] = JSON.parse(sort);
              rows = applyMultipleSorts(rows, sortModel);
            } catch (error) {
              console.error('Error parsing sort:', error);
            }
          }

          const totalCount = rows.length;
          rows = rows.slice((page - 1) * limit, page * limit);
          return HttpResponse.json({ items: rows, total: totalCount });
        })
      ]
    }
  },
  render: (props) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [total, setTotal] = useState(0);
    const [params, setParams] = useState({
      page: 1,
      pageSize: 10,
      sort: [],
      filter: []
    });

    const fetchData = async (newParams: any) => {
      setLoading(true);
      setParams(newParams);

      const res = await fetch(
        `https://mock-data-grid.quen-ui.com?page=${newParams.page}&limit=${newParams.pageSize}&sort=${JSON.stringify(newParams.sort)}&filter=${JSON.stringify(newParams.filter)}`
      );
      const json = await res.json();

      setData(json.items);
      setTotal(json.total);
      setLoading(false);
    };

    useEffect(() => {
      fetchData(params);
    }, []);

    return (
      <DataGrid
        {...props}
        mode="server"
        columns={props.columns}
        rowData={data}
        loading={loading}
        serverSideTotalRows={total}
        pagination={true}
        onPaginationChanged={(event) => {
          fetchData({
            ...params,
            page: event.newPage,
            pageSize: event.newPageSize
          });
        }}
        onSortChange={(sortModel) =>
          fetchData({ ...params, sort: sortModel, page: 1 })
        }
        onFilterChange={(filterModel) =>
          fetchData({ ...params, filter: filterModel, page: 1 })
        }
      />
    );
  }
} as StoryObj<typeof DataGrid>;
