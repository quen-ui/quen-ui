import { IRowNode, IColumnDef } from "../../core";
import { TQuenSize } from "@quen-ui/components";

export interface IRowProps<T = any> {
  rowNode: IRowNode<T>;
  columns: IColumnDef<T>[];
  size?: TQuenSize;
  rowIndex: number;
  getRowId?: (rowNode: IRowNode<T>) => string;
}

export interface IRowsProps {
  size?: TQuenSize;
}
