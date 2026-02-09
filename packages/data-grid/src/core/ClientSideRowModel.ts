import GridState from "./GridState";
import { EGridStateEvents, type IEditableCellParams, type IRowNode } from "./types";

class ClientSideRowModel<T = any> {
  private readonly gridState: GridState<T>;
  private editingCells: IEditableCellParams<T>[] = [];

  constructor(gridState: GridState<T>) {
    this.gridState = gridState;
  }

  getProcessedRows(): IRowNode<T>[] {
    let rows = [...this.gridState.getRows()];

    const filters = this.gridState["state"].filterModel;
    filters.forEach((filter) => {
      rows = rows.filter((row) => {
        const value = (row.data as any)[filter.field];
        if (filter.type === "text") {
          return String(value)
            .toLowerCase()
            .includes(String(filter.value).toLowerCase());
        } else if (filter.type === "number") {
          return value === filter.value;
        }
        return true;
      });
    });

    const sorts = this.gridState["state"].sortModel;
    sorts.forEach((s) => {
      rows.sort((a, b) => {
        const aValue = (a.data as any)[s.field];
        const bValue = (b.data as any)[s.field];

        if (aValue < bValue) return s.sort === "asc" ? -1 : 1;
        if (aValue > bValue) return s.sort === "asc" ? 1 : -1;
        return 0;
      });
    });

    return rows;
  }

  setEditableCells(cells: IEditableCellParams<T>[]) {
    this.editingCells = cells;
  }

  getEditableCells(params?: {
    rowId: string | number;
    field: string | keyof T;
  }): IEditableCellParams<T> | IEditableCellParams<T>[] | undefined {
    if (params) {
      return this.editingCells.find(
        (cell) => cell.rowId === params.rowId && cell.field === params.field
      );
    }
    return this.editingCells;
  }

  /**
   * Refresh grid (applies sort and filter and triggers refresh event)
   */
  refresh(): void {
    const processedRows = this.getProcessedRows();
    this.gridState["emit"](EGridStateEvents.gridRefresh, processedRows);
  }
}

export default ClientSideRowModel;
