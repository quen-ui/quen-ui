import GridState from "./GridState";
import {type IRowNode, TFieldName} from "./types";

/** Контракт активной редактируемой ячейки */
export interface IActiveEditCell<T> {
  rowId: string | number;
  field: TFieldName<T>;
}

class ClientSideRowModel<T = any> {
  private readonly gridState: GridState<T>;
  private activeEditCell: IActiveEditCell<T> | null = null;

  constructor(gridState: GridState<T>) {
    this.gridState = gridState;
  }

  /** Returns rows with filters, sorting, and pagination applied.*/
  getProcessedRows(): IRowNode<T>[] {
    return this.gridState.getRows();
  }

  /** Starts editing mode for a specific cell. */
  startEditing(rowId: string | number, field: TFieldName<T>): void {
    this.activeEditCell = { rowId, field };
  }

  /** Completes editing and resets the state */
  stopEditing(): void {
    this.activeEditCell = null;
  }

  /** Checks if a cell is in edit mode. */
  isEditing(rowId: string | number, field: TFieldName<T>): boolean {
    return (
      this.activeEditCell !== null &&
      this.activeEditCell.rowId === rowId &&
      this.activeEditCell.field === field
    );
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
}

export default ClientSideRowModel;
