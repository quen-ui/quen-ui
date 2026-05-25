import GridState from "./GridState";
import type { IRowNode, TFieldName, IEditLifecycleParams } from "./types";

/** Контракт активной редактируемой ячейки */
export interface IActiveEditCell<T> {
  rowId: string | number;
  field: TFieldName<T>;
}

class ClientSideRowModel<T = any> {
  private readonly gridState: GridState<T>;
  private activeEditCell: IActiveEditCell<T> | null = null;

  private onEditStart?: (
    params: IEditLifecycleParams<T>
  ) => boolean | void | Promise<boolean | void>;
  private onEditSave?: (
    params: IEditLifecycleParams<T>
  ) => boolean | void | Promise<boolean | void>;
  private onEditCancel?: (params: IEditLifecycleParams<T>) => void;

  private onRowEditStart?: (
    params: IEditLifecycleParams<T>
  ) => boolean | void | Promise<boolean | void>;
  private onRowEditSave?: (
    params: IEditLifecycleParams<T>
  ) =>
    | boolean
    | void
    | Promise<boolean | void>
    | { success: boolean; errors?: Record<keyof T, string> };
  private onRowEditCancel?: (params: IEditLifecycleParams<T>) => void;

  constructor(
    gridState: GridState<T>,
    callbacks?: {
      onEditStart?: (
        params: IEditLifecycleParams<T>
      ) => boolean | void | Promise<boolean | void>;
      onEditSave?: (
        params: IEditLifecycleParams<T>
      ) => boolean | void | Promise<boolean | void>;
      onEditCancel?: (params: IEditLifecycleParams<T>) => void;
      onRowEditStart?: (
        params: IEditLifecycleParams<T>
      ) => boolean | void | Promise<boolean | void>;
      onRowEditSave?: (
        params: IEditLifecycleParams<T>
      ) =>
        | boolean
        | void
        | Promise<boolean | void>
        | { success: boolean; errors?: Record<keyof T, string> };
      onRowEditCancel?: (params: IEditLifecycleParams<T>) => void;
    }
  ) {
    this.gridState = gridState;
    this.onEditStart = callbacks?.onEditStart;
    this.onEditSave = callbacks?.onEditSave;
    this.onEditCancel = callbacks?.onEditCancel;
    this.onRowEditStart = callbacks?.onRowEditStart;
    this.onRowEditSave = callbacks?.onRowEditSave;
    this.onRowEditCancel = callbacks?.onRowEditCancel;
  }

  /** Returns rows with filters, sorting, and pagination applied.*/
  getProcessedRows(): IRowNode<T>[] {
    return this.gridState.getRows();
  }

  /** Completes editing and resets the state */
  stopEditing(): void {
    this.activeEditCell = null;
  }

  /** Create new scratch file from selection */
  cancelAllEditing(): void {
    this.activeEditCell = null;
  }

  /** Returns the active cell data (used in BaseCell for commit/rollback) */
  getActiveEditingCell(): IActiveEditCell<T> | null {
    return this.activeEditCell;
  }

  /** Refreshes the grid view (recalculates filters/sorting/pagination) */
  refresh(): void {
    this.gridState.refresh();
  }

  /** Public method for starting editing with callback processing */
  async startEditing(rowId: string | number, field: string): Promise<boolean> {
    const row = this.gridState.getAllRows().find((r) => r.id === rowId);
    if (!row) return false;

    const column = this.gridState
      .getAllColumns()
      .find((c) => c.field === field);
    if (!column) return false;

    const oldValue = (row.data as any)[field];

    // Calling the onEditStart callback
    if (this.onEditStart) {
      const params: IEditLifecycleParams<T> = {
        rowId,
        field,
        oldValue,
        data: row.data,
        column,
        node: row,
        api: this.gridState,
        cancelEdit: () => this.gridState.cancelEdit(),
        saveEdit: () => this.gridState.commitEdit(),
        newValue: undefined
      };

      const result = await Promise.resolve(this.onEditStart(params));
      if (result === false) return false;
    }

    return this.gridState.startEdit(rowId, field);
  }

  /** Updating a value in a session */
  updateEditingValue(newValue: any): void {
    this.gridState.updateEditValue(newValue);
  }

  /** Saving with callback processing */
  async saveEditing(): Promise<{ success: boolean; error?: string }> {
    const session = this.gridState.getEditSession();
    if (!session) return { success: false, error: "No active edit session" };

    const row = this.gridState.getAllRows().find((r) => r.id === session.rowId);
    const column = this.gridState
      .getAllColumns()
      .find((c) => c.field === session.field);
    if (!row || !column)
      return { success: false, error: "Row or column not found" };

    // Calling the onEditSave callback
    if (this.onEditSave) {
      const params: IEditLifecycleParams<T> = {
        ...session,
        data: row.data,
        field: column.field as TFieldName<T>,
        column,
        node: row,
        api: this.gridState,
        cancelEdit: () => this.gridState.cancelEdit(),
        saveEdit: () => this.gridState.commitEdit()
      };

      const result = await Promise.resolve(this.onEditSave(params));
      if (result === false) {
        return { success: false, error: "onEditSave returned false" };
      }
    }

    return this.gridState.commitEdit();
  }

  /** Cancel with callback processing */
  cancelEditing(): void {
    const session = this.gridState.getEditSession();
    if (!session) return;

    const row = this.gridState.getAllRows().find((r) => r.id === session.rowId);
    const column = this.gridState
      .getAllColumns()
      .find((c) => c.field === session.field);

    if (row && column && this.onEditCancel) {
      const params: IEditLifecycleParams<T> = {
        ...session,
        data: row.data,
        field: column.field as TFieldName<T>,
        column,
        node: row,
        api: this.gridState,
        cancelEdit: () => this.gridState.cancelEdit(),
        saveEdit: () => this.gridState.commitEdit(),
        newValue: undefined
      };
      this.onEditCancel(params);
    }

    this.gridState.cancelEdit();
  }

  /** Checking editing status */
  isEditing(rowId: string | number, field: string): boolean {
    if (this.isRowEditing(rowId)) return true;
    return this.gridState.isEditing(rowId, field);
  }

  /** Getting the current session */
  getActiveEditSession() {
    return this.gridState.getEditSession();
  }

  /** Validation check */
  getEditValidationError() {
    return this.gridState.getEditSession()?.validationErrors || null;
  }

  async startRowEditing(rowId: string | number): Promise<boolean> {
    const row = this.gridState.getAllRows().find((r) => r.id === rowId);
    if (!row) return false;

    if (this.onRowEditStart) {
      const params: IEditLifecycleParams<T> = this.buildRowEditParams(
        rowId,
        row
      );
      const result = await Promise.resolve(this.onRowEditStart(params));
      if (result === false) return false;
    }

    return this.gridState.startRowEdit(rowId);
  }

  updateRowEditingValue(field: TFieldName<T>, newValue: any): void {
    this.gridState.updateRowEditValue(field, newValue);
  }

  async saveRowEditing(): Promise<{
    success: boolean;
    errors?: Record<string, string>;
  }> {
    const session = this.gridState.getEditSession();
    if (!session || session.mode !== "row") {
      return {
        success: false,
        errors: { _global: "No active row edit session" }
      };
    }

    const row = this.gridState.getAllRows().find((r) => r.id === session.rowId);
    if (!row) return { success: false, errors: { _global: "Row not found" } };

    if (this.onRowEditSave) {
      const params: IEditLifecycleParams<T> = {
        ...this.buildRowEditParams(session.rowId, row),
        newValue: undefined,
        rowChanges: session.rowChanges
      };

      const result = await Promise.resolve(this.onRowEditSave(params));

      if (
        typeof result === "object" &&
        result !== null &&
        "success" in result
      ) {
        if (!result.success) {
          return { success: false, errors: result.errors };
        }
      } else if (result === false) {
        return {
          success: false,
          errors: { _global: "onRowEditSave returned false" }
        };
      }
    }

    return this.gridState.commitRowEdit();
  }

  cancelRowEditing(): void {
    const session = this.gridState.getEditSession();
    if (!session || session.mode !== "row") return;

    const row = this.gridState.getAllRows().find((r) => r.id === session.rowId);
    if (row && this.onRowEditCancel) {
      this.onRowEditCancel(this.buildRowEditParams(session.rowId, row));
    }

    this.gridState.cancelRowEdit();
  }

  private buildRowEditParams(
    rowId: string | number,
    row: IRowNode<T>
  ): IEditLifecycleParams<T> {
    const session = this.gridState.getEditSession();
    return {
      rowId,
      field: session?.field || "",
      oldValue:
        session?.mode === "row"
          ? session.oldValue
          : (row.data as any)[session?.field || ""],
      newValue: session?.mode === "cell" ? session.newValue : undefined,
      data: row.data,
      column: {} as any,
      node: row,
      api: this.gridState,
      cancelEdit: () => this.gridState.cancelEdit(),
      saveEdit: () => this.gridState.commitEdit(),
      editMode: session?.mode,
      rowChanges: session?.mode === "row" ? session.rowChanges : undefined
    };
  }

  isRowEditing(rowId: string | number): boolean {
    return this.gridState.isRowEditing(rowId);
  }

  getRowEditChanges(rowId: string | number): Partial<T> | undefined {
    return this.gridState.getRowEditChanges(rowId);
  }

  getRowEditErrors(rowId: string | number): Record<string, string> | undefined {
    return this.gridState.getRowEditErrors(rowId);
  }
}

export default ClientSideRowModel;
