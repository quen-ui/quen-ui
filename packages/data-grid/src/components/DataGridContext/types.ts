import type { ClientSideRowModel, GridState } from "../../core";
import { IDataGridIcons, IDataGridProps } from "../DataGrid/types";

export interface IDataGridContext<T = any> {
  gridState: GridState<T>;
  rowModel: ClientSideRowModel<T>;
  icons?: IDataGridIcons;
  rowSelection?: IDataGridProps<T>["rowSelection"]
}
