import type { CSSProperties } from "react";
import { TQuenSize } from "@quen-ui/components";
import { IColumnDef, IRowNode, TFieldName } from "../../core";

export interface IBaseCellProps<T = any> {
  size?: TQuenSize;
  value?: any;
  onDoubleClick?: () => void;
  onBlur?: () => void;
  column: IColumnDef<T>;
  rowNode: IRowNode<T>;
  rowIndex: number;
  cellStyle?: CSSProperties;
  isPinned?: boolean;
  isSelected?: boolean;
  isHovered?: boolean;
  isRowEditing?: boolean;
  rowEditError?: string;
  onRowValueChange?: (field: TFieldName<T>, value: any) => void;
}
