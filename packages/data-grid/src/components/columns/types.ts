import { IColumnDef, IHeaderCell } from "../../core";
import { TQuenSize } from "@quen-ui/components";

export interface IColumnProps<T = any> {
  column: IColumnDef<T> | IHeaderCell<T>;
  size?: TQuenSize;
}
