import GridState from "./GridState";
import type { IRowNode} from "./types";

class ClientSideRowModel<T = any> {
  private gridState: GridState<T>;

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
          return String(value).toLowerCase().includes(String(filter.value).toLowerCase());
        } else if (filter.type === "number") {
          return value === filter.value;
        }
        return true;
      });
    });

    const sorts = this.gridState['state'].sortModel;
    sorts.forEach(s => {
      rows.sort((a, b) => {
        const aValue = (a.data as any)[s.field];
        const bValue = (b.data as any)[s.field];


        if (aValue < bValue) return s.sort === 'asc' ? -1 : 1;
        if (aValue > bValue) return s.sort === 'asc' ? 1 : -1;
        return 0;
      });
    });


    return rows;
  }

  /**
   * Refresh grid (applies sort and filter and triggers refresh event)
   */
  refresh(): void {
    const processedRows = this.getProcessedRows();
    this.gridState['emit']('gridRefresh', processedRows);
  }
}

export default ClientSideRowModel;
