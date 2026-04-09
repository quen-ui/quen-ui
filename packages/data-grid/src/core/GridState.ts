import { randomId } from "@quen-ui/helpers";
import {
  EGridStateEvents,
  type IColumnApi,
  type IColumnDef,
  type IFilterModel,
  type IGridApi,
  type IGridPaginationParams,
  type IGridSelectionApi,
  type IGridState,
  type IRowNode,
  type ISortModel,
  type TDataMode,
  type TSelectAllMode,
  type IHeaderCell,
} from "./types";
import EventBus from "./EventBus";

const DEFAULT_PAGE_SIZE = 10;

const DEFAULT_CURRENT_PAGE = 1;

class GridState<T = any> implements IGridApi<T>, IColumnApi<T> {
  private state: IGridState<T>;
  private eventBus: EventBus;

  constructor(
    columns: IColumnDef<T>[],
    rows: T[] = [],
    mode: TDataMode = "client",
    pagination: IGridPaginationParams
  ) {
    const { tree, leafColumns } = this.normalizeColumns(columns);

    this.state = {
      rows: rows.map((data) => ({
        id: (data as any).id ?? randomId(),
        data,
        setSelected: () => {},
        isSelected: () => false
      })),
      columns: tree,
      selections: new Set(),
      sortModel: [],
      filterModel: [],
      mode: mode,
      pagination,
      headerMatrix: this.buildHeaderMatrix(tree),
      leafColumns,
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

  getAllRows(): IRowNode<T>[] {
    return this.state.rows;
  }

  getFiltersRows(): IRowNode<T>[] {
    let rows = [...this.getAllRows()];
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
    return rows;
  }

  getRows(): IRowNode<T>[] {
    let rows = [...this.getFiltersRows()];

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

    const p = this.state.pagination;
    if (p?.pagination && this.state.mode === "client") {
      const pageSize = p.paginationPageSize ?? DEFAULT_PAGE_SIZE;
      const currentPage = p.currentPage ?? 1;

      const start = currentPage * pageSize;
      const end = start + pageSize;

      rows = rows.slice(start, end);
    }

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
    return this.state.rows
      .filter((r) => this.state.selections.has(r.id))
      .map((r) => r.data);
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
      this.state.selections.delete(row.id);
    });
  }

  deselectAll(mode: TSelectAllMode = "all") {
    if (mode === "all") {
      this.setSelectedNodes({ nodes: this.getRows(), newValue: false });
    }
  }

  selectAll(mode: TSelectAllMode = "all") {
    if (mode === "all") {
      this.setSelectedNodes({ nodes: this.getRows(), newValue: true });
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

  getColumnTree() {
    return this.state.columns;
  }

  getHeaderMatrix(): IHeaderCell<T>[][] {
    return this.state.headerMatrix;
  }

  getAllColumns(): IColumnDef<T>[] {
    return this.state.leafColumns;
  }

  setColumnDefs(columns: IColumnDef<T>[]) {
    const { tree, leafColumns } = this.normalizeColumns(columns);
    this.state.columns = tree;
    this.state.leafColumns = leafColumns;
    this.state.headerMatrix = this.buildHeaderMatrix(tree);
    this.refresh();
  }

  getSortRowModel(field: string): ISortModel<T> | undefined {
    return this.state.sortModel.find((sort) => sort.field === field);
  }

  private emitPaginationChanged() {
    this.emit(EGridStateEvents.paginationChanged, {
      currentPage: this.paginationGetCurrentPage(),
      pageSize: this.paginationGetPageSize(),
      totalPages: this.paginationGetTotalPages(),
      rowCount: this.paginationGetRowCount()
    });
    this.refresh();
  }

  paginationGoToPage(page: number) {
    const totalPages = this.getTotalPages();
    this.state.pagination.currentPage = Math.min(
      Math.max(page - 1, 0),
      totalPages
    );
    this.emitPaginationChanged();
  }

  paginationGetPageSize() {
    return this.state.pagination.paginationPageSize ?? DEFAULT_PAGE_SIZE;
  }

  paginationGetCurrentPage() {
    return this.state.pagination.currentPage ?? DEFAULT_CURRENT_PAGE;
  }

  private getTotalRowCount(): number {
    return this.getAllRows().length;
  }

  private getTotalPages(): number {
    const pageSize = this.paginationGetPageSize();
    return Math.max(1, Math.ceil(this.getTotalRowCount() / pageSize));
  }

  paginationGetRowCount() {
    return this.getTotalRowCount();
  }

  paginationGetTotalPages() {
    return this.getTotalPages();
  }

  paginationGoToNextPage() {
    this.paginationGoToPage(this.paginationGetCurrentPage() + 1);
  }

  paginationGoToPreviousPage() {
    this.paginationGoToPage(this.paginationGetCurrentPage() - 1);
  }

  paginationGoToFirstPage() {
    this.paginationGoToPage(1);
  }

  paginationGoToLastPage() {
    this.paginationGoToPage(this.getTotalPages() - 1);
  }

  private normalizeColumns(columns: IColumnDef<T>[]) {
    const leafColumns: IColumnDef<T>[] = [];

    const assignIds = (cols: IColumnDef<T>[]) => {
      return cols.map(col => {
        const colId = col.colId || String(col.field) || randomId();

        const normalized: IColumnDef<T> = {
          ...col,
          colId
        };

        if (col.children?.length) {
          normalized.children = assignIds(col.children);
        } else {
          leafColumns.push(normalized);
        }

        return normalized;
      });
    };

    const tree = assignIds(columns);

    return { tree, leafColumns };
  }

  private getMaxDepth(columns: IColumnDef<T>[], depth = 0): number {
    return Math.max(
      ...columns.map(col =>
        col.children?.length
          ? this.getMaxDepth(col.children, depth + 1)
          : depth + 1
      )
    );
  }

  private buildHeaderMatrix(columns: IColumnDef<T>[]): IHeaderCell<T>[][] {
    const maxDepth = this.getMaxDepth(columns);
    const matrix: IHeaderCell<T>[][] = Array.from(
      { length: maxDepth },
      () => []
    );

    const traverse = (
      cols: IColumnDef<T>[],
      depth: number
    ): number => {
      let colSpanCount = 0;

      cols.forEach(col => {
        const isGroup = !!col.children?.length;

        if (isGroup) {
          const childSpan = traverse(col.children!, depth + 1);

          matrix[depth].push({
            colId: col.colId!,
            headerName: col.headerName,
            depth,
            colSpan: childSpan,
            rowSpan: 1,
            isGroup: true,
            column: col
          });

          colSpanCount += childSpan;
        } else {
          matrix[depth].push({
            colId: col.colId!,
            headerName: col.headerName,
            depth,
            colSpan: 1,
            rowSpan: maxDepth - depth,
            isGroup: false,
            column: col
          });

          colSpanCount += 1;
        }
      });

      return colSpanCount;
    };

    traverse(columns, 0);

    return matrix;
  }
}

export default GridState;
