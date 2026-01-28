import GridState from "./GridState";
import ClientSideRowModel from "./ClientSideRowModel";
import type { IColumnDef } from "./types";

describe("ClientSideRowModel", () => {
  const columns: IColumnDef<{ name: string; age: number }>[] = [
    { field: "name", headerName: "Name" },
    { field: "age", headerName: "Age" }
  ];

  const rowData = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 }
  ];

  let gridState: GridState<any>;
  let rowModel: ClientSideRowModel<any>;

  beforeEach(() => {
    gridState = new GridState(columns, rowData);
    rowModel = new ClientSideRowModel(gridState);
  });

  it("should return all rows if no sort or filter", () => {
    const rows = rowModel.getProcessedRows();
    expect(rows).toHaveLength(3);
  });

  it("should filter rows by text", () => {
    gridState.setFilterModel([{ field: "name", type: "text", value: "a" }]);
    const rows = rowModel.getProcessedRows();
    expect(rows.map((r) => r.data.name)).toEqual(["Alice", "Charlie"]);
  });

  it("should filter rows by number", () => {
    gridState.setFilterModel([{ field: "age", type: "number", value: 25 }]);
    const rows = rowModel.getProcessedRows();
    expect(rows.map((r) => r.data.name)).toEqual(["Bob"]);
  });

  it("should sort rows ascending", () => {
    gridState.setSortModel([{ field: "age", sort: "asc" }]);
    const rows = rowModel.getProcessedRows();
    expect(rows.map((r) => r.data.name)).toEqual(["Bob", "Alice", "Charlie"]);
  });

  it("should sort rows descending", () => {
    gridState.setSortModel([{ field: "age", sort: "desc" }]);
    const rows = rowModel.getProcessedRows();
    expect(rows.map((r) => r.data.name)).toEqual(["Charlie", "Alice", "Bob"]);
  });

  it("should apply filter and sort together", () => {
    gridState.setFilterModel([{ field: "name", type: "text", value: "a" }]);
    gridState.setSortModel([{ field: "age", sort: "asc" }]);
    const rows = rowModel.getProcessedRows();
    expect(rows.map((r) => r.data.name)).toEqual(["Alice", "Charlie"]);
  });

  it("should emit gridRefresh event on refresh", () => {
    const handler = jest.fn();
    gridState.on("gridRefresh", handler);
    rowModel.refresh();
    expect(handler).toHaveBeenCalled();
  });
});
