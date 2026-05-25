import { useCallback, useEffect, useMemo, useState } from "react";
import { IRowProps } from "./types";
import { EGridStateEvents, IColumnDef, IRowNode, TFieldName } from "../../core";
import { useDataGridContext } from "../DataGridContext";
import { BaseCell, BaseCellStyled } from "../Cells";
import { Checkbox, RadioButton } from "@quen-ui/components";
import { RowStyled } from "./styles";
import { DataGridErrorBoundary } from "../ErrorBoundaries";
import { RowActions } from "../RowActions";

function Row<T = any>({
  rowNode,
  columns,
  size = "m",
  rowIndex
}: IRowProps<T>) {
  const { gridState, rowModel, rowSelection, showRowEditActions, rowEditingEnabled, startRowEditOnDoubleClick } = useDataGridContext<T>();
  const [selectedRow, setSelectedRow] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const isRowEditing = rowModel.isRowEditing(rowNode.id);
  const rowEditErrors = rowModel.getRowEditErrors(rowNode.id);
  const isSaving = rowModel.getActiveEditSession()?.isSaving ?? false;



  useEffect(() => {
    const handler = ({ selectedNodes }: { selectedNodes: IRowNode<T>[] }) => {
      setSelectedRow(selectedNodes.some((r) => r.id === rowNode.id));
    };
    gridState.on(EGridStateEvents.selectionChanged, handler);
    handler({ selectedNodes: gridState.getSelectedNodes() });
    return () => gridState.off(EGridStateEvents.selectionChanged, handler);
  }, [gridState, rowNode.id]);

  const handleStartRowEdit = useCallback(async () => {
    if (isRowEditing || !rowEditingEnabled) return;
    await rowModel.startRowEditing(rowNode.id);
  }, [isRowEditing, rowEditingEnabled, rowModel, rowNode.id]);

  const handleSaveRowEdit = useCallback(async () => {
    const result = await rowModel.saveRowEditing();
    if (!result.success && result.errors?._global) {
      window.console.error("Row save failed:", result.errors._global);
    }
  }, [rowModel]);

  const handleCancelRowEdit = useCallback(() => {
    rowModel.cancelRowEditing();
  }, [rowModel]);

  const getCellValue = useCallback(
    (field: string) => {
      if (isRowEditing) {
        const changes = rowModel.getRowEditChanges(rowNode.id);
        return changes?.[field as keyof T] ?? (rowNode.data as any)[field];
      }
      return (rowNode.data as any)[field];
    },
    [isRowEditing, rowModel, rowNode.id, rowNode.data]
  );

  const handleCellChange = useCallback(
    (field: TFieldName<T>, value: any) => {
      if (isRowEditing) {
        rowModel.updateRowEditingValue(field, value);
      }
    },
    [isRowEditing, rowModel]
  );

  const handleClickSelection = useCallback(
    (isSelected: boolean) => {
      if (rowSelection?.isRowSelectable?.(rowNode) ?? true) {
        if (rowSelection?.mode === "single") {
          gridState.clearSelectAll();
          gridState.setSelectedNodes({
            nodes: [rowNode],
            newValue: isSelected
          });
        } else {
          gridState.setSelectedNodes({
            nodes: [rowNode],
            newValue: isSelected
          });
        }
      }
    },
    [rowSelection, rowNode, gridState]
  );

  const getPinnedStyles = (col: IColumnDef<T>) =>
    gridState.getPinnedColumnStyles(col.colId!, false);
  const isPinned = (col: IColumnDef<T>) => !!col.pinned;

  const handleRowDoubleClick = useCallback(() => {
    if (startRowEditOnDoubleClick) {
      handleStartRowEdit();
    }
  }, [startRowEditOnDoubleClick, handleStartRowEdit]);

  const Selection = useMemo(() => {
    if (!rowSelection) return null;
    const selPinned = rowSelection.pinned
      ? gridState.getPinnedColumnStyles("__selection__", false)
      : {};
    return (
      <BaseCellStyled
        size={size}
        style={{
          ...selPinned,
          zIndex: ((selPinned.zIndex as number) || 0) + 1
        }}
        isPinned={!!rowSelection.pinned}
        isSelected={selectedRow}
        isHovered={isHovered}>
        {rowSelection.mode === "single" ? (
          <RadioButton
            size={size}
            checked={selectedRow}
            onChange={handleClickSelection}
          />
        ) : (
          <Checkbox
            size={size}
            checked={selectedRow}
            onChange={handleClickSelection}
          />
        )}
      </BaseCellStyled>
    );
  }, [
    rowSelection,
    selectedRow,
    isHovered,
    size,
    handleClickSelection,
    gridState
  ]);

  const handleRowClick = useCallback(
    () => handleClickSelection(!selectedRow),
    [handleClickSelection, selectedRow]
  );

  const handleCellDoubleClick = (
    field: TFieldName<T>,
  ) => {
    rowModel.startEditing(rowNode.id, field as string);
  };

  return (
    <RowStyled
      selected={selectedRow}
      onClick={handleRowClick}
      onDoubleClick={handleRowDoubleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-row-editing={isRowEditing || undefined}
      data-row-id={rowNode.id}>
      {Selection}
      {columns.map((col) => {
        const value = getCellValue(col.field as string);
        const error = rowEditErrors?.[col.field as string];
        return (
          <DataGridErrorBoundary
            key={`eb-${col.colId}-${rowNode.id}`}
            fallback={null}
            level="cell">
            <BaseCell
              key={`${String(col.field)}_${value}`}
              rowNode={rowNode}
              column={col}
              rowIndex={rowIndex}
              size={size}
              value={value}
              cellStyle={getPinnedStyles(col)}
              isPinned={isPinned(col)}
              isSelected={selectedRow}
              isHovered={isHovered}
              onDoubleClick={() =>
                handleCellDoubleClick(col.field as TFieldName<T>)
              }
              isRowEditing={isRowEditing}
              rowEditError={error}
              onRowValueChange={handleCellChange}
            />
          </DataGridErrorBoundary>
        );
      })}
      {showRowEditActions && rowEditingEnabled && (
        <BaseCellStyled
          size={size}
          style={{ textAlign: "right", minWidth: 120 }}>
          <RowActions
            isEditing={isRowEditing}
            isSaving={rowModel.getActiveEditSession()?.isSaving || false}
            hasErrors={Object.keys(rowEditErrors || {}).length > 0}
            onSave={handleSaveRowEdit}
            onCancel={handleCancelRowEdit}
            size={size}
          />
        </BaseCellStyled>
      )}
    </RowStyled>
  );
}

export default Row;
