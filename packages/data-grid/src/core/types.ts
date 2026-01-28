/**
 * Row node representation
 */
export interface IRowNode<T = any> {
  id: string | number;
  data: T;
  children?: IRowNode<T>[];
  parent?: IRowNode<T>;
  isExpanded?: boolean;
}

/**
 * Cell renderer params
 */
export interface ICellRendererParams<T = any> {
  value: any;
  data: T;
  rowIndex: number;
  column: IColumnDef<T>;
}

/**
 * Column definition
 */
export interface IColumnDef<T = any> {
  field: keyof T | string;
  headerName: string;
  sortable?: boolean;
  filterable?: boolean;
  editable?: boolean;
  width?: number;
  minWidth?: number;
  maxWidth?: number;
  cellRenderer?: (cell: ICellRendererParams<T>) => any;
}

export interface IGridState<T = any> {
  rows: IRowNode<T>[];
  columns: IColumnDef<T>[];
  selections: Set<string | number>;
  sortModel: ISortModel[];
  filterModel: IFilterModel[];
  mode: TDataMode;
}

/**
 * Sorting model
 */
export interface ISortModel {
  field: string;
  sort: 'asc' | 'desc';
}

/**
 * Filtering model
 */
export interface IFilterModel {
  field: string;
  type: 'text' | 'number';
  value: any;
}

/**
 * Grid API exposed to consumers
 */
export interface IGridApi<T = any> {
  /** Get all rows */
  getRows(): IRowNode<T>[];
  /** Set row data */
  setRowData(row: T[]): void;
  /** Refresh grid (recompute sort/filter) */
  refresh(): void;
  /** Get / Set selection */
  getSelectedRows(): IRowNode<T>[];
  selectRow(id: string | number): void;
  deselectRow(id: string | number): void;
  /** Sort / filter */
  setSortModel(model: ISortModel[]): void;
  setFilterModel(model: IFilterModel[]): void;
}



/**
 * Column API exposed to consumers
 */
export interface IColumnApi<T = any> {
  getAllColumns(): IColumnDef<T>[];
  setColumnDefs(columns: IColumnDef<T>[]): void;
}

export type TDataMode = 'client' | 'server';
