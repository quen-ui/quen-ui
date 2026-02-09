import { TQuenSize } from "@quen-ui/components";
import { IColumnDef, IRowNode } from "../../core";

export interface IBaseCellProps<T = any> {
  size?: TQuenSize;
  value?: any;
  onDoubleClick?: () => void;
  onBlur?: () => void;
  column: IColumnDef<T>;
  isEditing?: boolean;
  rowNode: IRowNode<T>;
  rowIndex: number;
}
