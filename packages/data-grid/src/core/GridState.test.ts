import GridState from "./GridState";
import { EGridStateEvents } from "./types";
import type { IColumnDef, IRowNode } from "./types";

describe("GridState", () => {
  const columns: IColumnDef<{ name: string }>[] = [
    { field: "name", headerName: "Name" }
  ];

  let grid: GridState<{ name: string }>;
  const initialData = [{ name: "Alice" }];

  beforeEach(() => {
    grid = new GridState(columns, initialData, "client", {
      pagination: false
    } as any);
  });

  it("should initialize with rows and columns", () => {
    expect(grid.getRows()).toHaveLength(1);
    expect(grid.getAllColumns()).toHaveLength(1);
  });

  it("should select and deselect rows", () => {
    const row = grid.getRows()[0];

    grid.setSelectedNodes({ nodes: [row], newValue: true });
    expect(grid.getSelectedNodes()).toHaveLength(1);
    expect(grid.getSelectedNodes()[0].data.name).toBe("Alice");

    grid.setSelectedNodes({ nodes: [row], newValue: false });
    expect(grid.getSelectedNodes()).toHaveLength(0);
  });

  it("should update row data", () => {
    grid.setRowData([{ name: "Bob" }]);
    expect(grid.getRows()).toHaveLength(1);
    expect(grid.getRows()[0].data.name).toBe("Bob");
  });

  it("should set columns", () => {
    grid.setColumnDefs([{ field: "name", headerName: "Full Name" }]);
    expect(grid.getAllColumns()).toHaveLength(1);
    expect(grid.getAllColumns()[0].headerName).toBe("Full Name");
  });

  it("should emit rowsRefresh event on refresh", () => {
    const handler = jest.fn();
    grid.on(EGridStateEvents.rowsRefresh, handler);
    grid.refresh();

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

  it("should emit selectionChanged events with correct payload", () => {
    const handler = jest.fn();
    const row = grid.getRows()[0];

    grid.on(EGridStateEvents.selectionChanged, handler);
    grid.setSelectedNodes({ nodes: [row], newValue: true });

    expect(handler).toHaveBeenCalledTimes(1);
    expect(handler).toHaveBeenCalledWith({
      selectedNodes: expect.arrayContaining([
        expect.objectContaining({ id: row.id, data: row.data })
      ])
    });
  });
});
