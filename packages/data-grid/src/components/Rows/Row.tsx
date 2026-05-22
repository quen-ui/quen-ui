import { useCallback, useEffect, useMemo, useState } from "react";
import { getValueObject, type TKeyObjectType } from "@quen-ui/helpers";
import { IRowProps } from "./types";
import { EGridStateEvents, IColumnDef, IRowNode, TFieldName } from "../../core";
import { useDataGridContext } from "../DataGridContext";
import { BaseCell, BaseCellStyled } from "../Cells";
import { Checkbox, RadioButton } from "@quen-ui/components";
import { RowStyled } from "./styles";
import { DataGridErrorBoundary } from "../ErrorBoundaries";

function Row<T = any>({
  rowNode,
  columns,
  size = "m",
  rowIndex
}: IRowProps<T>) {
  const { gridState, rowModel, rowSelection } = useDataGridContext<T>();
  const [selectedRow, setSelectedRow] = useState(false);
  const [isHovered, setIsHovered] = useState(false); // 🔽 Состояние ховера строки

  useEffect(() => {
    const handler = ({ selectedNodes }: { selectedNodes: IRowNode<T>[] }) => {
      setSelectedRow(selectedNodes.some((r) => r.id === rowNode.id));
    };
    gridState.on(EGridStateEvents.selectionChanged, handler);
    handler({ selectedNodes: gridState.getSelectedNodes() });
    return () => gridState.off(EGridStateEvents.selectionChanged, handler);
  }, [gridState, rowNode.id]);

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
    rowId: string | number,
    field: TFieldName<T>,
    editable?: boolean
  ) => {
    if (editable) rowModel.startEditing(rowId, field);
  };

  return (
    <RowStyled
      selected={selectedRow}
      onClick={handleRowClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      {Selection}
      {columns.map((col) => {
        const value = getValueObject(
          rowNode.data,
          col.field as TKeyObjectType<T>
        );
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
                handleCellDoubleClick(
                  rowNode.id,
                  col.field as TFieldName<T>,
                  col.editable
                )
              }
              isEditing={rowModel.isEditing(
                rowNode.id,
                col.field as TFieldName<T>
              )}
            />
          </DataGridErrorBoundary>
        );
      })}
    </RowStyled>
  );
}

export default Row;
