import type { IColumnDef, GridState, ClientSideRowModel } from "../../core"

export interface IDataGridProps<T = any> {
  columns: IColumnDef<T>[];
  rowData: T[];
}

export interface IDataGridContext<T = any> {
  gridState: GridState<T>;
  rowModel?: ClientSideRowModel<T>;
}
