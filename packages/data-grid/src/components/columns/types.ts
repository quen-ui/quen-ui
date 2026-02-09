import { IColumnDef } from "../../core";
import { TQuenSize } from "@quen-ui/components";

export interface IColumnProps<T = any> {
  column: IColumnDef<T>;
  size?: TQuenSize;
}
