import type { ReactNode } from "react";
import type { TQuenSize } from "@quen-ui/components";
import type { IColumnDef, TGetRowId, IRowNode, IGridApi } from "../../core";

export interface IDataGridIcons {
  sortable?: ReactNode;
}

interface ICheckboxSelectionCallbackParams<TData = any> {
  /** Row node for the given row */
  node: IRowNode<TData>;
  /** Data associated with the node. */
  data: TData | undefined;
  /** Column for this callback */
  column: IColumnDef<TData>;
  /** The grid api. */
  api: IGridApi<TData>;
}

interface IRowSelectionParams<TData = any> {
  /** Set to true or return true from the callback to render a selection checkbox */
  checkboxes?:
    | boolean
    | ((params: ICheckboxSelectionCallbackParams<TData>) => boolean);
  /** Set to true to hide a disabled checkbox when row is not selectable and checkboxes are enabled */
  hideDisabledCheckboxes?: boolean;
  /** Callback to be used to determine which rows are selectable. By default rows are selectable, so return false to make a row non-selectable */
  isRowSelectable?: (rowNode: IRowNode<TData>) => boolean;
}

export interface IRowSingleSelectionParams<
  TData = any
> extends IRowSelectionParams<TData> {
  mode: "single";
}

export interface IRowMultiSelectionParams<
  TData = any
> extends IRowSelectionParams<TData> {
  mode: "multi";
  /** Determines how "select all" behaviour works. This controls header checkbox selection. */
  selectAll?: 'all' | 'filtered' | 'currentPage';
  /** If true a 'select all' checkbox will be put into the header. */
  headerCheckbox?: boolean;
}

export interface IDataGridProps<TData = any> {
  columns: IColumnDef<TData>[];
  rowData: TData[];
  size?: TQuenSize;
  icons?: IDataGridIcons;
  getRowId?: TGetRowId<TData>;
  rowSelection?: IRowSingleSelectionParams | IRowMultiSelectionParams;
  onSelectionChange?: ({
    selectedNodes
  }: {
    selectedNodes: IRowNode<TData>;
  }) => void;
}
