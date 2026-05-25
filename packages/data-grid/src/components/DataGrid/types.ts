import type { ReactNode } from "react";
import type { TQuenSize } from "@quen-ui/components";
import type {
  IColumnDef,
  TGetRowId,
  IRowNode,
  IGridApi,
  TDataMode,
  IPaginationChangedEvent,
  IEditLifecycleParams
} from "../../core";

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

  pinned?: "left" | "right";
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
  selectAll?: "all" | "filtered" | "currentPage";
  /** If true a 'select all' checkbox will be put into the header. */
  headerCheckbox?: boolean;
}

export interface IDataGridProps<TData = any> {
  mode?: TDataMode;
  columns: IColumnDef<TData>[];
  rowData: TData[];
  size?: TQuenSize;
  height?: number;
  icons?: IDataGridIcons;
  getRowId?: TGetRowId<TData>;
  rowSelection?: IRowSingleSelectionParams | IRowMultiSelectionParams;
  onSelectionChange?: ({
    selectedNodes
  }: {
    selectedNodes: IRowNode<TData>;
  }) => void;
  /** Set whether pagination is enabled */
  pagination?: boolean;
  /** How many rows to load per page */
  paginationPageSize?: number;
  /** Determines if the page size selector is shown in the pagination panel or not. Set to an array of values to show the page size selector with custom list of possible page sizes. Default page sizes [10, 20, 30] */
  paginationPageSizeSelector?: number[];
  /** Triggered every time the paging state changes */
  onPaginationChanged?: (event: IPaginationChangedEvent<TData>) => void;
  paginationDefaultPage?: number;
  loading?: boolean;
  loadingComponent?: ReactNode;
  noDataMessage?: ReactNode;
  emptyComponent?: ReactNode;
  errorFallback?: ReactNode;
  cellErrorFallback?: ReactNode;
  /** Called when editing begins. Returning `false` cancels the beginning. */
  onEditStart?: (
    params: IEditLifecycleParams<TData>
  ) => boolean | void | Promise<boolean | void>;
  /** Called when a save is attempted. Returning false or throwing an error cancels the save */
  onEditSave?: (
    params: IEditLifecycleParams<TData>
  ) => boolean | void | Promise<boolean | void>;
  /** Called when editing is canceled */
  onEditCancel?: (params: IEditLifecycleParams<TData>) => void;
  /** Automatically exit editing when focus is lost (default: true) */
  stopEditingWhenCellsLoseFocus?: boolean;
  /** Block navigation/editing of other cells while one is being edited (default: true) */
  singleCellEdit?: boolean;
  /** Enables line editing (button on each line) */
  rowEditing?: boolean;
  /** Called when editing a line begins */
  onRowEditStart?: (
    params: IEditLifecycleParams<TData>
  ) => boolean | void | Promise<boolean | void>;
  /** Called when saving the entire row. May return errors per field */
  onRowEditSave?: (
    params: IEditLifecycleParams<TData>
  ) =>
    | boolean
    | void
    | Promise<boolean | void>
    | { success: boolean; errors?: Record<keyof TData, string> };
  /** Called when a row edit is canceled */
  onRowEditCancel?: (params: IEditLifecycleParams<TData>) => void;
  /** Show save/cancel buttons in line (default: true) */
  showRowEditActions?: boolean;
  /** Automatically switch to edit mode when double-clicking a line */
  startRowEditOnDoubleClick?: boolean;
}
