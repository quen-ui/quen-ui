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
    }
  ) {
    this.gridState = gridState;
    this.onEditStart = callbacks?.onEditStart;
    this.onEditSave = callbacks?.onEditSave;
    this.onEditCancel = callbacks?.onEditCancel;
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
    return this.gridState.isEditing(rowId, field);
  }

  /** Getting the current session */
  getActiveEditSession() {
    return this.gridState.getEditSession();
  }

  /** Validation check */
  getEditValidationError(): string | null {
    return this.gridState.getEditSession()?.validationError || null;
  }
}

export default ClientSideRowModel;
