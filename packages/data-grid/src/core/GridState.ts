import { randomId } from "@quen-ui/helpers";
import {
  EGridStateEvents,
  type IColumnApi,
  type IColumnDef,
  type IFilterModel,
  type IGridApi,
  IGridSelectionApi,
  type IGridState,
  type IRowNode,
  type ISortModel,
  type TDataMode, TSelectAllMode
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
      rows: rows.map((data) => ({
        id: (data as any).id ?? randomId(),
        data,
        setSelected: () => {},
        isSelected: () => false
      })),
      columns: columns.map((col) => ({
        ...col,
        colId: col.colId || String(col.field) || randomId()
      })),
      selections: new Set(),
      sortModel: [],
      filterModel: [],
      mode: mode
    };
    this.eventBus = new EventBus();
  }

  /** EventBus methods */
  on(event: EGridStateEvents, handler: (...args: any[]) => void) {
    this.eventBus.on(event, handler);
  }

  off(event: EGridStateEvents, handler: (...args: any[]) => void) {
    this.eventBus.off(event, handler);
  }

  private emit(event: EGridStateEvents, ...args: any[]) {
    this.eventBus.emit(event, ...args);
  }

  getRows(): IRowNode<T>[] {
    let rows = [...this.state.rows];

    const filters = this.state.filterModel;
    filters.forEach((filter) => {
      rows = rows.filter((row) => {
        const value = (row.data as any)[filter.field];
        if (filter.type === "text") {
          return String(value)
            .toLowerCase()
            .includes(String(filter.value).toLowerCase());
        } else if (filter.type === "number") {
          return value === filter.value;
        }
        return true;
      });
    });

    const sorts = this.state.sortModel;
    sorts.forEach((s) => {
      rows.sort((a, b) => {
        const aValue = (a.data as any)[s.field];
        const bValue = (b.data as any)[s.field];

        if (aValue < bValue) return s.sort === "asc" ? -1 : 1;
        if (aValue > bValue) return s.sort === "desc" ? 1 : -1;
        return 0;
      });
    });

    return rows;
  }

  setRowData(rows: T[]) {
    this.state.rows = rows.map((data) => ({
      id: (data as any).id ?? randomId(),
      data,
      setSelected: () => {},
      isSelected: () => false
    }));
    this.refresh();
  }

  refresh() {
    this.emit(EGridStateEvents.rowsRefresh, this.getRows());
  }

  getSelectedNodes(): IRowNode<T>[] {
    return this.state.rows.filter((r) => this.state.selections.has(r.id));
  }

  getSelectedRows(): T[] {
    return this.state.rows.filter((r) => this.state.selections.has(r.id)).map((r) => r.data);
  }

  setSelectedNodes: IGridSelectionApi<T>["setSelectedNodes"] = ({
    nodes,
    newValue
  }) => {
    if (newValue) {
      nodes.forEach((node) => {
        this.state.selections.add(node.id);
      });
    } else {
      nodes.forEach((node) => {
        this.state.selections.delete(node.id);
      });
    }
    this.emit(EGridStateEvents.selectionChanged, {
      selectedNodes: this.getSelectedNodes()
    });
  };

  clearSelectAll() {
    this.getRows().forEach((row) => {
      this.state.selections.delete(row.id)
    })
  }

  deselectAll(mode: TSelectAllMode = "all") {
    if (mode === "all") {
      this.setSelectedNodes({ nodes: this.getRows(), newValue: false })
    }
  }

  selectAll(mode: TSelectAllMode = "all") {
    if (mode === "all") {
      this.setSelectedNodes({ nodes: this.getRows(), newValue: true })
    }
  }

  setSortModel(model: ISortModel<T>[]) {
    this.state.sortModel = model;
    this.refresh();
  }

  setFilterModel(model: IFilterModel<T>[]) {
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

  getSortRowModel(field: string): ISortModel<T> | undefined {
    return this.state.sortModel.find((sort) => sort.field === field);
  }
}

export default GridState;
