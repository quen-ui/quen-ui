import { useMemo, useCallback } from "react";
import { Text } from "@quen-ui/components";
import type { IBaseCellProps } from "./types";
import { useDataGridContext } from "../DataGridContext";
import { BaseCellStyled } from "./styles";
import { TFieldName } from "../../core";

function BaseCell<T>({
  size = "m",
  value,
  isEditing,
  onDoubleClick,
  column,
  rowNode,
  rowIndex,
  cellStyle,
  isSelected,
  isHovered,
  isPinned
}: IBaseCellProps<T>) {
  const { rowModel } = useDataGridContext<T>();

  const handleCellChange = useCallback(
    (editValue: string) => {
      if (!rowModel.isEditing(rowNode.id, column.field as TFieldName<T>)) {
        return;
      }

      (rowNode.data as any)[column.field] = editValue;
      rowModel.stopEditing();
      rowModel.refresh();
    },
    [rowModel, rowNode.data, column.field, rowNode.id]
  );

  const renderValue = useMemo(() => {
    if (column.render?.cell) {
      return column.render.cell({
        rowIndex,
        value,
        data: rowNode.data,
        column
      });
    } else if (column.valueFormatter) {
      return column.valueFormatter({
        node: rowNode,
        value,
        column,
        data: rowNode.data
      });
    }
    return value;
  }, [value, column]);

  return (
    <BaseCellStyled
      size={size}
      onDoubleClick={onDoubleClick}
      style={cellStyle}
      isHovered={isHovered}
      isPinned={isPinned}
      isSelected={isSelected}>
      {isEditing ? (
        <input
          autoFocus
          value={value as any}
          onChange={(e) => handleCellChange(e.target.value)}
          onBlur={(e) => handleCellChange(e.target.value)}
        />
      ) : column.render?.cell ? (
        column.render.cell({
          value,
          data: rowNode.data,
          rowIndex,
          column,
          ...column.renderParams?.cell
        })
      ) : (
        <>
          <Text size={size}>{renderValue}</Text>
        </>
      )}
    </BaseCellStyled>
  );
}

export default BaseCell;
