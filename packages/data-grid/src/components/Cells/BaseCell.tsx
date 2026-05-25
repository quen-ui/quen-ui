import { useMemo, useCallback, useEffect, useState, type KeyboardEvent, type ElementType, memo, useRef } from "react";
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
  isPinned,
  isRowEditing,
  rowEditError,
  onRowValueChange
}: IBaseCellProps<T>) {
  const { rowModel, gridState } = useDataGridContext<T>();
  const isEditing = rowModel.isEditing(rowNode.id, column.field as string);
  const CellEditor = column.cellEditor as undefined | ElementType;
  const [localValue, setLocalValue] = useState(value);

  const debounceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (debounceTimer.current) clearTimeout(debounceTimer.current);
    },
    []
  );

  useEffect(() => {
    if (isRowEditing || isEditing) {
      setLocalValue(value);
    }
  }, [value, isRowEditing, isEditing]);

  const shouldShowEditor = isRowEditing
    ? (column.rowEditable ?? column.editable)
    : rowModel.isEditing(rowNode.id, column.field as string);


  const handleCommit = useCallback(async () => {
    if (!isRowEditing && !isEditing) return;
    if (debounceTimer.current) clearTimeout(debounceTimer.current);

    if (isRowEditing) {
      if (localValue !== (rowNode.data as any)[column.field]) {
        onRowValueChange?.(column.field as string, localValue);
      }
    } else {
      rowModel.updateEditingValue(localValue);
      await rowModel.saveEditing();
    }
  }, [
    isRowEditing,
    isEditing,
    localValue,
    rowNode.data,
    column.field,
    onRowValueChange,
    rowModel
  ]);

  const handleCancel = useCallback(() => {
    if (isRowEditing) rowModel.cancelRowEditing();
    else rowModel.cancelEditing();
  }, [isRowEditing, rowModel]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (!isRowEditing && !isEditing) return;
      if (e.key === "Enter") {
        e.preventDefault();
        handleCommit();
      }
      if (e.key === "Escape") {
        e.preventDefault();
        handleCancel();
      }
    },
    [isRowEditing, isEditing, handleCommit, handleCancel]
  );

  const handleChange = (value: any) => {
    setLocalValue(value);

    if (isRowEditing) {
      if (debounceTimer.current) clearTimeout(debounceTimer.current);
      debounceTimer.current = setTimeout(() => {
        onRowValueChange?.(column.field as string, value);
      }, 120);
    } else {
      rowModel.updateEditingValue(value);
    }
  };


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
      {shouldShowEditor ? (
        <div style={{ position: "relative", width: "100%" }}>
          {CellEditor ? (
            <CellEditor
              value={localValue}
              onChange={handleChange}
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
              value={localValue as any}
              onChange={handleChange}
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
              error={rowEditError ? rowEditError : false}
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

export default memo(BaseCell) as typeof BaseCell;
