import { useMemo, useCallback, useEffect, useState, type KeyboardEvent, type ElementType } from "react";
import { Text, TextField } from "@quen-ui/components";
import type { IBaseCellProps } from "./types";
import { useDataGridContext } from "../DataGridContext";
import { BaseCellStyled } from "./styles";

function BaseCell<T>({
  size = "m",
  value,
  onDoubleClick,
  column,
  rowNode,
  rowIndex,
  cellStyle,
  isSelected,
  isHovered,
  isPinned
}: IBaseCellProps<T>) {
  const { rowModel, gridState } = useDataGridContext<T>();
  const isEditing = rowModel.isEditing(rowNode.id, column.field as string);
  const [editValue, setEditValue] = useState(value);
  const [error, setError] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const CellEditor = column.cellEditor as undefined | ElementType;

  useEffect(() => {
    if (isEditing) {
      setEditValue(value);
      setError(null);
    }
  }, [isEditing, value]);

  // Subscribing to validation errors from GridState
  useEffect(() => {
    if (!isEditing) return;

    const checkError = () => {
      const session = rowModel.getActiveEditSession();
      if (session?.validationError) {
        setError(session.validationError);
      }
    };

    // We check immediately and subscribe to the changes.
    checkError();
    const handler = () => checkError();
    gridState.on("cellEditValueChanged" as any, handler);

    return () => gridState.off("cellEditValueChanged" as any, handler);
  }, [isEditing, rowModel, gridState]);

  const handleCommit = useCallback(async () => {
    if (!isEditing) return;

    setIsSaving(true);
    setError(null);

    // Update the value in the session before saving
    rowModel.updateEditingValue(editValue);

    const result = await rowModel.saveEditing();

    if (!result.success) {
      setError(result.error || "Failed to save");
    }
    setIsSaving(false);
  }, [editValue, isEditing, rowModel]);

  const handleCancel = useCallback(() => {
    if (!isEditing) return;
    rowModel.cancelEditing();
    setError(null);
  }, [isEditing, rowModel]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (!isEditing) return;

      if (e.key === "Enter") {
        e.preventDefault();
        handleCommit();
      }
      if (e.key === "Escape") {
        e.preventDefault();
        handleCancel();
      }
      // Tab: save and move to the next cell (can be expanded)
      if (e.key === "Tab") {
        e.preventDefault();
        handleCommit();
        // Navigating to the next cell is the responsibility of the parent component.
      }
    },
    [isEditing, handleCommit, handleCancel]
  );

  // Block interaction if another cell is being edited
  const isBlockedBySingleEdit = useMemo(() => {
    const session = rowModel.getActiveEditSession();
    return !!(
      session && !rowModel.isEditing(rowNode.id, column.field as string)
    );
  }, [rowModel, rowNode.id, column.field]);

  const handleClick = useCallback(() => {
    if (isBlockedBySingleEdit) return;
    onDoubleClick?.();
  }, [isBlockedBySingleEdit, onDoubleClick]);

  return (
    <BaseCellStyled
      isSelected={isSelected}
      isHovered={isHovered}
      isPinned={isPinned}
      size={size}
      onDoubleClick={handleClick}
      style={{
        ...cellStyle,
        ...(isBlockedBySingleEdit && { opacity: 0.6, cursor: "not-allowed" })
      }}>
      {isEditing ? (
        <div style={{ position: "relative", width: "100%" }}>
          {CellEditor ? (
            <CellEditor
              value={editValue}
              onChange={setEditValue}
              rowId={rowNode.id}
              field={column.field as string}
              oldValue={value}
              data={rowNode.data}
              column={column}
              node={rowNode}
              api={gridState}
              cancelEdit={handleCancel}
              saveEdit={handleCommit}
              {...column.cellEditorParams}
            />
          ) : (
            <TextField
              autoFocus
              disabled={isSaving}
              value={editValue as any}
              onChange={(value) => {
                setEditValue(value);
                rowModel.updateEditingValue(value);
              }}
              onKeyDown={handleKeyDown}
              onBlur={(e) => {
                const stopOnBlur = true;
                if (
                  stopOnBlur &&
                  !e.relatedTarget?.closest("[data-grid-cell]")
                ) {
                  handleCommit();
                }
              }}
              error={error ? error : false}
            />
          )}

          {isSaving && (
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: 12,
                height: 12,
                border: "2px solid #3b82f6",
                borderTopColor: "transparent",
                borderRadius: "50%",
                animation: "spin 1s linear infinite"
              }}
            />
          )}
        </div>
      ) : column.render?.cell ? (
        column.render.cell({
          value,
          data: rowNode.data,
          rowIndex,
          column,
          ...column.renderParams?.cell
        })
      ) : (
        <Text size={size}>{value}</Text>
      )}
    </BaseCellStyled>
  );
}

export default BaseCell;
