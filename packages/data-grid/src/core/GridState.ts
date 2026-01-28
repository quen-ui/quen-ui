import type {
  IGridApi,
  IColumnApi,
  IColumnDef,
  IGridState,
  IRowNode,
  ISortModel,
  IFilterModel,
  TDataMode
} from "./types";
import EventBus from "./EventBus";

class GridState<T = any> implements IGridApi<T>, IColumnApi<T> {
  private state: IGridState<T>;
  private eventBus: EventBus;

  constructor(
    columns: IColumnDef<T>[],
    rows: T[] = [],
    mode: TDataMode = "client"
  ) {
    this.state = {
      rows: rows.map((data, idx) => ({ id: idx, data })),
      columns,
      selections: new Set(),
      sortModel: [],
      filterModel: [],
      mode: mode
    };
    this.eventBus = new EventBus();
  }

  /** EventBus methods */
  on(event: string, handler: (...args: any[]) => void) {
    this.eventBus.on(event, handler);
  }

  off(event: string, handler: (...args: any[]) => void) {
    this.eventBus.off(event, handler);
  }

  private emit(event: string, ...args: any[]) {
    this.eventBus.emit(event, ...args);
  }

  getRows(): IRowNode<T>[] {
    return this.state.rows;
  }

  setRowData(rows: T[]) {
    this.state.rows = rows.map((data, idx) => ({ id: idx, data }));
    this.refresh();
  }

  refresh() {
    this.emit("gridRefresh", this.state.rows);
  }

  getSelectedRows(): IRowNode<T>[] {
    return this.state.rows.filter((r) => this.state.selections.has(r.id));
  }

  selectRow(id: string | number) {
    this.state.selections.add(id);
    this.emit("selectionChanged", this.getSelectedRows());
  }

  deselectRow(id: string | number) {
    this.state.selections.delete(id);
    this.emit("selectionChanged", this.getSelectedRows());
  }

  setSortModel(model: ISortModel[]) {
    this.state.sortModel = model;
    this.refresh();
  }

  setFilterModel(model: IFilterModel[]) {
    this.state.filterModel = model;
    this.refresh();
  }

  getAllColumns(): IColumnDef<T>[] {
    return this.state.columns;
  }

  setColumnDefs(columns: IColumnDef<T>[]) {
    this.state.columns = columns;
    this.refresh();
  }

  getSortRowModel(field: string): ISortModel | undefined {
    return this.state.sortModel.find((sort) => sort.field === field);
  }
}

export default GridState;
