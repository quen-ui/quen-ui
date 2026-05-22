import GridState from "./GridState";
import ClientSideRowModel from "./ClientSideRowModel";
import { EGridStateEvents } from "./types";
import type { IColumnDef, IFilterModelItem, ISortModel } from "./types";

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
    gridState = new GridState(columns, rowData, "client", {
      pagination: false
    } as any);
    rowModel = new ClientSideRowModel(gridState);
  });

  it("should return all rows if no sort or filter", () => {
    const rows = rowModel.getProcessedRows();
    expect(rows).toHaveLength(3);
    expect(rows.map((r) => r.data.name)).toEqual(["Alice", "Bob", "Charlie"]);
  });

  it("should filter rows by text", () => {
    const filter: IFilterModelItem<any> = {
      field: "name",
      filterType: "text",
      type: "contains",
      filter: "a"
    };
    gridState.setFilterModel([filter]);
    const rows = rowModel.getProcessedRows();
    expect(rows.map((r) => r.data.name)).toEqual(["Alice", "Charlie"]);
  });

  it("should filter rows by number", () => {
    const filter: IFilterModelItem<any> = {
      field: "age",
      filterType: "number",
      type: "equals",
      filter: 25
    };
    gridState.setFilterModel([filter]);
    const rows = rowModel.getProcessedRows();
    expect(rows.map((r) => r.data.name)).toEqual(["Bob"]);
  });

  it("should sort rows ascending", () => {
    const sort: ISortModel<any> = { field: "age", sort: "asc" };
    gridState.setSortModel([sort]);
    const rows = rowModel.getProcessedRows();
    expect(rows.map((r) => r.data.name)).toEqual(["Bob", "Alice", "Charlie"]);
  });

  it("should sort rows descending", () => {
    const sort: ISortModel<any> = { field: "age", sort: "desc" };
    gridState.setSortModel([sort]);
    const rows = rowModel.getProcessedRows();
    expect(rows.map((r) => r.data.name)).toEqual(["Charlie", "Alice", "Bob"]);
  });

  it("should apply filter and sort together", () => {
    const filter: IFilterModelItem<any> = {
      field: "name",
      filterType: "text",
      type: "contains",
      filter: "a"
    };
    const sort: ISortModel<any> = { field: "age", sort: "asc" };

    gridState.setFilterModel([filter]);
    gridState.setSortModel([sort]);

    const rows = rowModel.getProcessedRows();
    expect(rows.map((r) => r.data.name)).toEqual(["Alice", "Charlie"]);
  });

  it("should emit rowsRefresh event on refresh", () => {
    const handler = jest.fn();
    gridState.on(EGridStateEvents.rowsRefresh, handler);

    rowModel.refresh();

    expect(handler).toHaveBeenCalledTimes(1);
    expect(handler).toHaveBeenCalledWith(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(String),
          data: expect.any(Object)
        })
      ])
    );
  });
});
