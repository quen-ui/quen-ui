import { DataGrid, type IColumnDef } from "@quen-ui/data-grid";
import { Button, Flex, Tag } from "@quen-ui/components";

interface IData {
  name: string;
  id: string;
  age: number;
  address: string;
  tags: string[];
}

interface IDataNested {
  id: string;
  age: number;
  address: string;
  user: {
    name: string;
  }
}

const columns: IColumnDef<IData>[] = [
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
    field: "action",
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
];

const rowData: IData[] = [
  {
    id: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"]
  },
  {
    id: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"]
  },
  {
    id: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"]
  }
];

export const BaseExample = () => {
  return <DataGrid columns={columns} rowData={rowData} />;
};

const columnsNested: IColumnDef<IDataNested>[] = [
  {
    headerName: "Name",
    field: "user.name"
  },
  {
    headerName: "Age",
    field: "age"
  },
  {
    headerName: "Address",
    field: "address"
  }
];

const rowDataNested: IDataNested[] = [
  {
    id: "1",
    user: {
      name: "John Brown"
    },
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    id: "2",
    user: {
      name: "Jim Green"
    },
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    id: "3",
    user: {
      name: "Joe Black"
    },
    age: 32,
    address: "Sydney No. 1 Lake Park",
  }
];

export const NestedValuesBaseExample = () => {
  return <DataGrid columns={columnsNested} rowData={rowDataNested} />;
};
