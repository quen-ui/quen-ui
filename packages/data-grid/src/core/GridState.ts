import { randomId } from "@quen-ui/helpers";
import {
  EGridStateEvents,
  type IColumnApi,
  type IColumnDef,
  type IGridApi,
  type IGridPaginationParams,
  type IGridSelectionApi,
  type IGridState,
  type IRowNode,
  type ISortModel,
  type TDataMode,
  type TSelectAllMode,
  type IHeaderCell,
  type IEditSession,
  type TEditMode,
  type IFilterModelItem,
  type IEditLifecycleParams,
  type TFieldName
} from "./types";
import EventBus from "./EventBus";

const DEFAULT_PAGE_SIZE = 10;

const DEFAULT_CURRENT_PAGE = 1;

class GridState<T = any> implements IGridApi<T>, IColumnApi<T> {
  private state: IGridState<T>;
  private eventBus: EventBus;
  private editSession: IEditSession<T> | null = null;

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
      leafColumns
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

  getEditMode(): TEditMode {
    return this.editSession?.mode ?? null;
  }

  getActiveEditRowId(): string | number | null {
    return this.editSession?.rowId ?? null;
  }

  getRowEditChanges(rowId: string | number): Partial<T> | undefined {
    if (this.editSession?.mode === "row" && this.editSession.rowId === rowId) {
      return { ...this.editSession.rowChanges };
    }
    return undefined;
  }

  getRowEditErrors(rowId: string | number): Record<string, string> | undefined {
    if (this.editSession?.mode === "row" && this.editSession.rowId === rowId) {
      return { ...this.editSession.validationErrors };
    }
    return undefined;
  }

  isRowEditing(rowId: string | number): boolean {
    return this.editSession?.mode === "row" && this.editSession.rowId === rowId;
  }

  getAllRows(): IRowNode<T>[] {
    return this.state.rows;
  }

  getFiltersRows(): IRowNode<T>[] {
    let rows = [...this.getAllRows()];
    const filters = this.state.filterModel;

    if (filters.length === 0) return rows;

    filters.forEach((f) => {
      const field = String(f.field);
      rows = rows.filter((row) => {
        const value = (row.data as any)[field];
        return this.matchFilter(value, f);
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

        const direction = s.sort === "asc" ? 1 : -1;
        if (aValue < bValue) return -direction;
        if (aValue > bValue) return direction;
        return 0;
      });
    });

    const p = this.state.pagination;
    if (p?.pagination && this.state.mode === "client") {
      const pageSize = p.paginationPageSize ?? DEFAULT_PAGE_SIZE;
      const currentPage = this.paginationGetCurrentPage();
      const start = (currentPage - 1) * pageSize;
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

  setFilterModel(model: IFilterModelItem<T>[]) {
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
    const totalPages = this.paginationGetTotalPages();
    this.state.pagination.currentPage = Math.min(Math.max(page, 1), totalPages);
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
    this.paginationGoToPage(this.getTotalPages());
  }

  private normalizeColumns(columns: IColumnDef<T>[]) {
    const leafColumns: IColumnDef<T>[] = [];

    const assignIds = (cols: IColumnDef<T>[]) => {
      return cols.map((col) => {
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
      ...columns.map((col) =>
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

    const traverse = (cols: IColumnDef<T>[], depth: number): number => {
      let colSpanCount = 0;

      cols.forEach((col) => {
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

  getFilterModel(): IFilterModelItem<T>[] {
    return [...this.state.filterModel];
  }

  private matchFilter(value: any, filter: IFilterModelItem<T>): boolean {
    const isEmpty = value === undefined || value === null || value === "";
    if (filter.type === "empty") return isEmpty;
    if (filter.type === "notBlank") return !isEmpty;
    if (isEmpty) return false;

    if (filter.filterType === "date") {
      const rowDate = this.parseDate(value);
      if (!rowDate) return false;

      const rowNorm = this.normalizeToMidnight(rowDate);

      const parseFilterVal = (
        v: string | { startDate?: string; endDate?: string } | undefined | null
      ): Date | null => {
        if (!v) return null;
        if (typeof v === "string") return this.parseDate(v);
        if (typeof v === "object" && "startDate" in v) {
          return this.parseDate(v.startDate);
        }
        return null;
      };

      const filterDate = parseFilterVal(filter.filter as string);
      const filterToDate = parseFilterVal(filter.filterTo as string);

      const fNorm = filterDate ? this.normalizeToMidnight(filterDate) : null;
      const fToNorm = filterToDate
        ? this.normalizeToMidnight(filterToDate)
        : null;

      switch (filter.type) {
        case "equals":
          return fNorm ? rowNorm.getTime() === fNorm.getTime() : false;
        case "greaterThan":
          return fNorm ? rowNorm > fNorm : false;
        case "lessThan":
          return fNorm ? rowNorm < fNorm : false;
        case "inRange":
          return fNorm && fToNorm
            ? rowNorm >= fNorm && rowNorm <= fToNorm
            : false;
        default:
          return false;
      }
    }

    const strVal = String(value).toLowerCase();
    const filterVal =
      filter.filter !== undefined ? String(filter.filter).toLowerCase() : "";

    switch (filter.type) {
      case "contains":
        return strVal.includes(filterVal);
      case "equals":
        return strVal === filterVal;
      case "startsWith":
        return strVal.startsWith(filterVal);
      case "endsWith":
        return strVal.endsWith(filterVal);
      case "greaterThan":
        return Number(value) > Number(filter.filter);
      case "lessThan":
        return Number(value) < Number(filter.filter);
      case "inRange":
        return (
          Number(value) >= Number(filter.filter) &&
          Number(value) <= Number(filter.filterTo)
        );
      default:
        return true;
    }
  }
  removeFilterByField(field: string) {
    this.state.filterModel = this.state.filterModel.filter(
      (f) => f.field !== field
    );
    this.refresh();
  }

  private parseDate(val: any): Date | null {
    if (val === null || val === undefined || val === "") return null;
    if (val instanceof Date) return isNaN(val.getTime()) ? null : val;
    if (typeof val === "number") return new Date(val);

    if (typeof val === "string") {
      // ISO / yyyy-mm-dd
      if (/^\d{4}-\d{2}-\d{2}$/.test(val)) {
        const [y, m, d] = val.split("-").map(Number);
        const date = new Date(y, m - 1, d);
        return isNaN(date.getTime()) ? null : date;
      }
      // dd.mm.yyyy
      if (/^\d{2}\.\d{2}\.\d{4}$/.test(val)) {
        const [d, m, y] = val.split(".").map(Number);
        const date = new Date(y, m - 1, d);
        return isNaN(date.getTime()) ? null : date;
      }
      // mm/dd/yyyy
      if (/^\d{2}\/\d{2}\/\d{4}$/.test(val)) {
        const [m, d, y] = val.split("/").map(Number);
        const date = new Date(y, m - 1, d);
        return isNaN(date.getTime()) ? null : date;
      }
      // Fallback
      const date = new Date(val);
      return isNaN(date.getTime()) ? null : date;
    }
    return null;
  }

  private normalizeToMidnight(d: Date): Date {
    return new Date(d.getFullYear(), d.getMonth(), d.getDate());
  }

  /**
   * Get the column width in pixels for offset calculation. Supports: number, '120px', '20%', fallback to default.
   */
  private getColumnWidth(col: IColumnDef<T>): number {
    if (typeof col.width === "number") return col.width;
    if (typeof col.width === "string") {
      if (col.width.endsWith("px")) return parseInt(col.width, 10) || 150;
      return 150;
    }
    return 150;
  }

  /**
   * Returns columns in the correct order: left-pinned → center → right-pinned
   * Also calculates the cumulative width for the sticky offset
   */
  getColumnsWithPinnedOrder(): {
    left: IColumnDef<T>[];
    center: IColumnDef<T>[];
    right: IColumnDef<T>[];
    offsets: { [colId: string]: { left?: number; right?: number } };
  } {
    const allCols = this.getAllColumns();

    const left = allCols.filter((c) => c.pinned === "left");
    const right = allCols.filter((c) => c.pinned === "right");
    const center = allCols.filter((c) => !c.pinned);

    const offsets: { [colId: string]: { left?: number; right?: number } } = {};

    let leftOffset = 0;
    left.forEach((col) => {
      const width = this.getColumnWidth(col);
      offsets[col.colId!] = { left: leftOffset };
      leftOffset += width;
    });

    let rightOffset = 0;
    right
      .slice()
      .reverse()
      .forEach((col) => {
        const width = this.getColumnWidth(col);
        offsets[col.colId!] = { right: rightOffset };
        rightOffset += width;
      });

    return { left, center, right, offsets };
  }

  /**
   *
   * Public method for getting sticky column styles. Used in Column.tsx and Row.tsx.
   */
  getPinnedColumnStyles(colId: string, isHeader = false): React.CSSProperties {
    const { offsets } = this.getColumnsWithPinnedOrder();
    const offset = offsets[colId];

    if (!offset) return {};

    const baseStyles: React.CSSProperties = {
      position: "sticky",
      zIndex: isHeader ? 30 : 20,
      isolation: "isolate"
    };

    if (offset.left !== undefined) {
      baseStyles.left = offset.left;
      baseStyles.boxShadow = "4px 0 6px -2px rgba(0,0,0,0.1)";
    }
    if (offset.right !== undefined) {
      baseStyles.right = offset.right;
      baseStyles.boxShadow = "-4px 0 6px -2px rgba(0,0,0,0.1)";
    }

    const isEdge = offset.left === 0 || offset.right === 0;
    if (isEdge) {
      baseStyles.zIndex = (baseStyles.zIndex as number) + 10;
    }

    return baseStyles;
  }

  /** Checks whether a cell is editable. */
  isCellEditable(
    rowId: string | number,
    field: string,
    data: T,
    column: IColumnDef<T>
  ): boolean {
    // Basic check for the editable flag
    if (!column.editable) return false;

    // Dynamic check via callback
    if (column.isCellEditable) {
      const node = this.state.rows.find((r) => r.id === rowId);
      if (!node) return false;

      const params: IEditLifecycleParams<T> = {
        rowId,
        field,
        oldValue: (data as any)[field],
        data,
        column,
        node,
        api: this as IGridApi<T>,
        cancelEdit: () => this.cancelEdit(),
        saveEdit: () => this.commitEdit(),
        newValue: undefined
      };
      return column.isCellEditable(params);
    }

    return true;
  }

  /** Starts an editing session */
  startEdit(rowId: string | number, field: string): boolean {
    // If a row is already being edited, you cannot edit the cell.
    if (this.editSession?.mode === "row") return false;

    const row = this.state.rows.find((r) => r.id === rowId);
    if (!row) return false;

    const column = this.getAllColumns().find((c) => c.field === field);
    if (!column || !this.isCellEditable(rowId, field, row.data, column)) {
      return false;
    }

    // If singleCellEdit is enabled and another cell is already being edited, cancel it.
    if (this.editSession?.mode === "cell" && this.editSession.rowId !== rowId) {
      this.cancelEdit();
    }

    const oldValue = (row.data as any)[field];
    this.editSession = {
      mode: "cell",
      rowId,
      field,
      oldValue,
      newValue: oldValue,
      validationErrors: {} as Record<TFieldName<T>, string>,
      isSaving: false
    };

    this.emit(EGridStateEvents.cellEditStarted, { rowId, field, oldValue });
    return true;
  }

  /** Updates the value in the active session (without saving) */
  updateEditValue(newValue: any): void {
    if (!this.editSession || this.editSession.mode !== "cell") return;

    this.editSession.newValue = newValue;
    this.editSession.validationErrors = {} as Record<TFieldName<T>, string>;

    this.emit(EGridStateEvents.cellEditValueChanged, {
      rowId: this.editSession.rowId,
      field: this.editSession.field!,
      oldValue: this.editSession.oldValue,
      newValue
    });
  }

  /** Validates the current value */
  async validateCellEdit(): Promise<{ valid: boolean; error: string | null }> {
    if (!this.editSession || this.editSession.mode !== "cell") {
      return { valid: false, error: "No active cell edit session" };
    }

    const { rowId, field, newValue } = this.editSession;
    const row = this.state.rows.find((r) => r.id === rowId);
    const column = this.getAllColumns().find((c) => c.field === field);

    if (!row || !column)
      return { valid: false, error: "Row or column not found" };
    if (!column.validateCell) return { valid: true, error: null };

    const params: IEditLifecycleParams<T> = {
      rowId,
      field: field as TFieldName<T>,
      oldValue: this.editSession.oldValue,
      newValue,
      data: row.data,
      column,
      node: row,
      api: this as IGridApi<T>,
      cancelEdit: () => this.cancelEdit(),
      saveEdit: () => this.commitEdit(),
      editMode: "cell"
    };

    const error = await Promise.resolve(column.validateCell(params));
    if (error) {
      this.editSession.validationErrors = {
        [field as TFieldName<T>]: error
      } as Record<TFieldName<T>, string>;
      return { valid: false, error };
    }

    return { valid: true, error: null };
  }

  /** Saves changes */
  async commitEdit(): Promise<{ success: boolean; error?: string }> {
    if (!this.editSession || this.editSession.mode !== "cell") {
      return { success: false, error: "No active cell edit session" };
    }

    const { rowId, field, oldValue, newValue } = this.editSession;
    const row = this.state.rows.find((r) => r.id === rowId);
    const column = this.getAllColumns().find((c) => c.field === field);

    if (!row || !column)
      return { success: false, error: "Row or column not found" };

    const { valid, error } = await this.validateCellEdit();
    if (!valid) return { success: false, error: error || undefined };

    this.editSession.isSaving = true;
    this.emit(EGridStateEvents.cellEditSaving, {
      rowId,
      field,
      oldValue,
      newValue
    });

    try {
      // 🔽 valueSetter для кастомной логики применения
      if (column.valueSetter) {
        const params: IEditLifecycleParams<T> = {
          rowId,
          field: field as TFieldName<T>,
          oldValue,
          newValue,
          data: row.data,
          column,
          node: row,
          api: this as IGridApi<T>,
          cancelEdit: () => this.cancelEdit(),
          saveEdit: () => this.commitEdit(),
          editMode: "cell"
        };
        const applied = column.valueSetter(params);
        if (!applied) {
          return { success: false, error: "valueSetter returned false" };
        }
      } else {
        (row.data as any)[field] = newValue;
      }

      this.editSession = null;
      this.refresh();
      this.emit(EGridStateEvents.cellEditSaved, {
        rowId,
        field,
        oldValue,
        newValue
      });

      return { success: true };
    } catch (e: any) {
      this.editSession!.validationErrors = {
        [field as TFieldName<T>]: e.message || "Save failed"
      } as Record<TFieldName<T>, string>;
      this.emit(EGridStateEvents.cellEditSaveError, {
        rowId,
        field,
        oldValue,
        newValue,
        error: e
      });
      return { success: false, error: e.message };
    } finally {
      if (this.editSession) this.editSession.isSaving = false;
    }
  }

  /** Cancels editing */
  cancelEdit(): void {
    if (!this.editSession || this.editSession.mode !== "cell") return;

    const { rowId, field, oldValue } = this.editSession;
    this.emit(EGridStateEvents.cellEditCancelled, { rowId, field, oldValue });

    this.editSession = null;
    this.refresh();
  }

  /** Returns the current editing session */
  getEditSession(): IEditSession<T> | null {
    return this.editSession;
  }

  /** Checks whether a specific cell is editable. */
  isEditing(rowId: string | number, field: string): boolean {
    return (
      this.editSession?.rowId === rowId && this.editSession?.field === field
    );
  }

  /** Check if row editing mode is available for a row */
  isRowEditable(rowId: string | number): boolean {
    const row = this.state.rows.find((r) => r.id === rowId);
    if (!row) return false;

    // We check if there is at least one column with rowEditable or editable
    return this.getAllColumns().some(
      (col) =>
        (col.rowEditable ?? col.editable) &&
        (!col.isCellEditable ||
          col.isCellEditable({
            rowId,
            field: col.field as string,
            oldValue: (row.data as any)[col.field],
            data: row.data,
            column: col,
            node: row,
            api: this,
            cancelEdit: () => this.cancelEdit(),
            saveEdit: () => this.commitEdit(),
            editMode: "row"
          }))
    );
  }

  /** Starts line editing mode */
  startRowEdit(rowId: string | number): boolean {
    const row = this.state.rows.find((r) => r.id === rowId);
    if (!row || !this.isRowEditable(rowId)) return false;

    // Create a change buffer (a copy of the row data)
    this.editSession = {
      mode: "row",
      rowId,
      field: null,
      newValue: null,
      oldValue: { ...row.data },
      rowChanges: {},
      validationErrors: {} as Record<TFieldName<T>, string>,
      isSaving: false
    };

    this.emit(EGridStateEvents.rowEditStarted, { rowId, data: row.data });
    return true;
  }

  /** Updates the value in the string buffer */
  updateRowEditValue(field: TFieldName<T>, newValue: any): void {
    if (!this.editSession || this.editSession.mode !== "row") return;

    if (!this.editSession.rowChanges) {
      this.editSession.rowChanges = {};
    }
    (this.editSession.rowChanges as any)[field] = newValue;
    this.editSession.validationErrors = {} as Record<TFieldName<T>, string>;
  }

  /** Gets the current value of the field taking into account changes */
  getRowEditValue(field: string): any {
    if (!this.editSession || this.editSession.mode !== "row") return undefined;
    return (
      (this.editSession.rowChanges as any)?.[field] ??
      (
        this.state.rows.find((r) => r.id === this.editSession!.rowId)
          ?.data as any
      )?.[field]
    );
  }

  /** Validate the entire string before saving */
  async validateRowEdit(): Promise<{
    valid: boolean;
    errors: Record<string, string>;
  }> {
    if (!this.editSession || this.editSession.mode !== "row") {
      return {
        valid: false,
        errors: { _global: "No active row edit session" }
      };
    }

    const row = this.state.rows.find((r) => r.id === this.editSession!.rowId);
    if (!row) return { valid: false, errors: { _global: "Row not found" } };

    const errors: Record<string, string> = {};
    const columns = this.getAllColumns();

    // Validation of each changed field
    for (const [field, newValue] of Object.entries(
      this.editSession.rowChanges || {}
    )) {
      const column = columns.find((c) => c.field === field);
      if (!column?.validateCell) continue;

      const params: IEditLifecycleParams<T> = {
        rowId: this.editSession!.rowId,
        field,
        oldValue: (row.data as any)[field],
        newValue,
        data: { ...row.data, ...this.editSession!.rowChanges },
        column,
        node: row,
        api: this,
        cancelEdit: () => this.cancelEdit(),
        saveEdit: () => this.commitEdit(),
        editMode: "row",
        rowChanges: this.editSession!.rowChanges
      };

      const error = await Promise.resolve(column.validateCell(params));
      if (error) {
        errors[field] = error;
      }
    }

    // Row-level validation (cross-field validation)
    for (const column of columns) {
      if (column.validateRow) {
        const params: IEditLifecycleParams<T> = {
          rowId: this.editSession!.rowId,
          field: column.field as string,
          oldValue: (row.data as any)[column.field],
          newValue: (this.editSession!.rowChanges as any)?.[
            column.field as string
          ],
          data: { ...row.data, ...this.editSession!.rowChanges },
          column,
          node: row,
          api: this,
          cancelEdit: () => this.cancelEdit(),
          saveEdit: () => this.commitEdit(),
          editMode: "row",
          rowChanges: this.editSession!.rowChanges
        };

        const error = await Promise.resolve(column.validateRow(params));
        if (error) {
          errors[column.field as string] = error;
        }
      }
    }

    if (Object.keys(errors).length > 0) {
      this.editSession.validationErrors = errors as Record<
        TFieldName<T>,
        string
      >;
      return { valid: false, errors };
    }

    return { valid: true, errors: {} };
  }

  /** Saves changes to the entire line */
  async commitRowEdit(): Promise<{
    success: boolean;
    errors?: Record<string, string>;
  }> {
    if (!this.editSession || this.editSession.mode !== "row") {
      return {
        success: false,
        errors: { _global: "No active row edit session" }
      };
    }

    const { rowId, rowChanges } = this.editSession;
    const row = this.state.rows.find((r) => r.id === rowId);
    if (!row || !rowChanges)
      return { success: false, errors: { _global: "No changes to save" } };

    // validation
    const { valid, errors } = await this.validateRowEdit();
    if (!valid) return { success: false, errors };

    this.editSession.isSaving = true;
    this.emit(EGridStateEvents.rowEditSaving, {
      rowId,
      changes: { ...rowChanges }
    });

    try {
      // Applying changes to data
      const updatedData = { ...row.data, ...rowChanges };

      // valueSetter for custom logic (per field)
      for (const [field, newValue] of Object.entries(rowChanges)) {
        const column = this.getAllColumns().find((c) => c.field === field);
        if (column?.valueSetter) {
          const params: IEditLifecycleParams<T> = {
            rowId,
            field,
            oldValue: (row.data as any)[field],
            newValue,
            data: updatedData,
            column,
            node: row,
            api: this,
            cancelEdit: () => this.cancelEdit(),
            saveEdit: () => this.commitEdit(),
            editMode: "row",
            rowChanges
          };
          const applied = column.valueSetter(params);
          if (!applied) {
            return {
              success: false,
              errors: { [field]: "valueSetter returned false" }
            };
          }
        } else {
          (row.data as any)[field] = newValue;
        }
      }

      // Reset session and refresh
      this.editSession = null;
      this.refresh();
      this.emit(EGridStateEvents.rowEditSaved, { rowId, data: updatedData });

      return { success: true };
    } catch (e: any) {
      this.editSession!.validationErrors = {
        _global: e.message || "Save failed"
      } as Record<TFieldName<T>, string>;
      this.emit(EGridStateEvents.rowEditSaveError, {
        rowId,
        error: e,
        changes: { ...this.editSession!.rowChanges }
      });
      return { success: false, errors: { _global: e.message } };
    } finally {
      if (this.editSession) this.editSession.isSaving = false;
    }
  }

  /** Cancels line editing */
  cancelRowEdit(): void {
    if (!this.editSession || this.editSession.mode !== "row") return;

    const { rowId, oldValue } = this.editSession;
    this.emit(EGridStateEvents.rowEditCancelled, {
      rowId,
      revertedData: oldValue
    });

    this.editSession = null;
    this.refresh();
  }
}

export default GridState;
