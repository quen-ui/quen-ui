import type { CSSProperties, ReactNode } from "react";

export type TFieldName<T = any> = string | keyof T;

export type TSortOder = "asc" | "desc" | null;

export enum EGridStateEvents {
  gridRefresh = "gridRefresh",
  selectionChanged = "selectionChanged",
  rowsRefresh = "rowsRefresh",
  columnsRefresh = "columnsRefresh"
}

export type TGetRowId<TData> = (params: IRowNode<TData>) => string;

/**
 * Row node representation
 */
export interface IRowNode<T = any> {
  id: string | number;
  data: T;
  children?: IRowNode<T>[];
  parent?: IRowNode<T>;
  isExpanded?: boolean;
  setSelected: (newValue: boolean) => void;
  isSelected?: () => boolean;
}

/**
 * Cell renderer params
 */
export interface ICellRendererParams<T = any> extends Record<string, any> {
  value: any;
  data: T;
  rowIndex: number;
  column: IColumnDef<T>;
}

export interface IHeaderRendererParams<TData = any> {
  data: TData;
  column: IColumnDef<TData>;
}

interface IColumnDefClassName {
  header?: string;
  cell?: string;
}

interface IColumnDefStyles {
  header?: CSSProperties;
  cell?: CSSProperties;
}

interface IColumnDefRender<TData = any> {
  header?: (params: IHeaderRendererParams<TData>) => any;
  cell?: (params: ICellRendererParams<TData>) => any;
}

interface IColumnDefRenderParams<TData = any> {
  header?:
    | Record<string, any>
    | ((params: IHeaderRendererParams<TData>) => any);
  cell?: Record<string, any> | ((params: ICellRendererParams<TData>) => any);
}

type TCellDataType = "string" | "number" | "boolean" | "date" | "dateString";

interface IValueGetterParams<TData = any, TValue = any, TContext = any> {
  getValue: (field: string) => any;
  node: IRowNode<TData> | null;
  data: TData;
  column: IColumnDef<TData>;
  api: IGridApi<TData>;
  context: TContext;
}

interface IHeaderGetterParams<TData = any, TValue = any, TContext = any> {
  data: TData;
  column: IColumnDef<TData>;
  api: IGridApi<TData>;
  context: TContext;
}

interface IValueFormatterParams<TData = any, TValue = any, TContext = any> {
  value: TValue | null | undefined;
  node: IRowNode<TData> | null;
  data: TData | undefined;
  column: IColumnDef<TData>;
  api: IGridApi<TData>;
  context: TContext;
}

export type TSortComparator<TData = any, TValue = any> = (
  valueA: TValue | null | undefined,
  valueB: TValue | null | undefined,
  nodeA: IRowNode<TData>,
  nodeB: IRowNode<TData>,
  order: TSortOder
) => number;

/**
 * Column definition
 */
export interface IColumnDef<TData = any, TValue = any> {
  /** The field of the row object to get the cell's data from. Deep references into a row object is supported via dot notation, i.e 'user.fullName'. */
  field: TFieldName<TData>;
  /** The unique ID to give the column. This is optional. If missing, the ID will default to the field. If both field and colId are missing, a unique ID will be generated. This ID is used to identify the column in the API for sorting, filtering etc. */
  colId?: string;
  /** The data type of the cell values for this column */
  cellDataType?: TCellDataType;
  /** Function or expression. Gets the value from your data for display */
  valueGetter?:
    | ((params: IValueGetterParams<TData, TValue>) => TValue)
    | string;
  /** A function or expression to format a value, should return a string */
  valueFormatter?:
    | ((params: IValueFormatterParams<TData, TValue>) => string)
    | string;
  /** Function or expression. Gets the value for display in the header */
  headerGetter?: ((params: IHeaderGetterParams<TData>) => string) | string;
  hide?: boolean;
  /** The name to render in the column header. If not specified and field is specified, the field name will be used as the header name */
  headerName: string;
  /** Tooltip for the column header */
  headerTooltip?: string;
  /** The custom header group component to be used for rendering the component header */
  headerComponent?: ReactNode;
  /** Pin a column to one side: right or left */
  pinned?: "left" | "right" | null;
  /** Same as pinned, except only applied when creating a new column */
  initialPinned?: boolean;
  /** Set to false to disable sorting which is enabled by default */
  sortable?: boolean;
  /** Override the default sorting order by providing a custom sort comparator, or a map of comparators for different TSortOder. */
  sortComparator?: TSortComparator;
  filterable?: boolean;
  editable?: boolean;
  width?: number;
  minWidth?: number;
  maxWidth?: number;
  render?: IColumnDefRender<TData>;
  renderParams?: IColumnDefRenderParams<TData>;
  classNames?: IColumnDefClassName;
  styles?: IColumnDefStyles;
}

export interface IGridState<T = any> {
  rows: IRowNode<T>[];
  columns: IColumnDef<T>[];
  selections: Set<string | number>;
  sortModel: ISortModel<T>[];
  filterModel: IFilterModel<T>[];
  mode: TDataMode;
}

/**
 * Sorting model
 */
export interface ISortModel<T> {
  field: TFieldName<T>;
  sort: TSortOder;
  comparator?: TSortComparator;
}

/**
 * Filtering model
 */
export interface IFilterModel<T> {
  field: TFieldName<T>;
  type: "text" | "number";
  value: any;
}

export type TSelectAllMode = "all" | "filtered" | "currentPage";

export interface IGridSelectionApi<TData = any> {
  /** Select all rows. By default, this ignores filtering, expansion and pagination settings. Pass the appropriate select all mode as an argument in order to select only rows that satisfy the filter, or those rows on the current page. */
  selectAll: (mode?: TSelectAllMode) => void;
  /** Clear all row selections. By default, this ignores filtering, expansion and pagination settings. Pass the appropriate select all mode as an argument in order to select only rows that satisfy the filter, or those rows on the current page. */
  deselectAll: (mode?: TSelectAllMode) => void;
  /** Returns an unsorted list of selected nodes. Getting the underlying node (rather than the data) is useful when working with tree / aggregated data, as the node can be traversed. */
  getSelectedNodes: () => IRowNode<TData>[];
  /** Returns an unsorted list of selected rows (i.e. row data that you provided). */
  getSelectedRows: () => TData[];
  /** Set all of the provided nodes selection state to the provided value. */
  setSelectedNodes: ({
    nodes,
    newValue
  }: {
    nodes: IRowNode<TData>[];
    newValue: boolean;
  }) => void;
}

/**
 * Grid API exposed to consumers
 */
export type IGridApi<TData = any> = IGridSelectionApi<TData> & {
  /** Get all rows */
  getRows(): IRowNode<TData>[];
  /** Set row data */
  setRowData(row: TData[]): void;
  /** Refresh grid (recompute sort/filter) */
  refresh(): void;
  /** Sort / filter */
  setSortModel(model: ISortModel<TData>[]): void;
  setFilterModel(model: IFilterModel<TData>[]): void;
};

/**
 * Column API exposed to consumers
 */
export interface IColumnApi<T = any> {
  getAllColumns(): IColumnDef<T>[];
  setColumnDefs(columns: IColumnDef<T>[]): void;
}

export type TDataMode = "client" | "server";

export interface IEditableCellParams<T> {
  rowId: string | number;
  field: TFieldName<T>;
}

export interface IRowNodeApi {}
