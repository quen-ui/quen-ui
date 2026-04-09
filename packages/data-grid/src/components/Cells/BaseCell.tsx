import { useMemo } from "react";
import { Text } from "@quen-ui/components";
import type { IBaseCellProps } from "./types";
import { useDataGridContext } from "../DataGridContext";
import { BaseCellStyled } from "./styles";

function BaseCell<T>({
  size = "m",
  value,
  isEditing,
  onDoubleClick,
  column,
  rowNode,
  rowIndex
}: IBaseCellProps<T>) {
  const { rowModel } = useDataGridContext();

  const handleCellChange = (_value: any) => {
    (rowNode.data as any)[column.field] = _value;
    rowModel.refresh();
  };

  const renderValue = useMemo(() => {
    if (column.render?.cell) {
      return column.render.cell({ rowIndex, value, data: rowNode.data, column})
    } else if (column.valueFormatter) {
      return column.valueFormatter({ node: rowNode, value, column, data: rowNode.data });
    }
    return value;
  }, [value, column])

  return (
    <BaseCellStyled size={size} onDoubleClick={onDoubleClick}>
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
