import { useCallback, useEffect, useMemo, useState } from "react";
import { getValueObject, type TKeyObjectType } from "@quen-ui/helpers";
import { IRowProps } from "./types";
import {EGridStateEvents, IColumnDef, IRowNode, TFieldName} from "../../core";
import { useDataGridContext } from "../DataGridContext";
import { BaseCell, BaseCellStyled } from "../Cells";
import { Checkbox, RadioButton } from "@quen-ui/components";
import { RowStyled } from "./styles";

function Row<T = any>({
  rowNode,
  columns,
  size = "m",
  rowIndex
}: IRowProps<T>) {
  const { gridState, rowModel, rowSelection } = useDataGridContext();
  const [selectedRow, setSelectedRow] = useState<boolean>(
    gridState.getSelectedNodes().some((r) => r.id === rowNode.id)
  );

  useEffect(() => {
    gridState.on(
      EGridStateEvents.selectionChanged,
      ({ selectedNodes }: { selectedNodes: IRowNode<T>[] }) => {
        setSelectedRow(selectedNodes.some((r) => r.id === rowNode.id));
      }
    );
  }, []);

  const handleClickSelection = useCallback(
    (isSelected: boolean) => {
      if (rowSelection?.isRowSelectable?.(rowNode) ?? true) {
        if (rowSelection?.mode === "single") {
          gridState.clearSelectAll();
          gridState.setSelectedNodes({
            nodes: [rowNode],
            newValue: isSelected
          });
        } else if (rowSelection?.mode === "multi") {
          gridState.setSelectedNodes({
            nodes: [rowNode],
            newValue: isSelected
          });
        }
      }
    },
    [rowSelection, rowNode]
  );

  const Selection = useMemo(() => {
    if (rowSelection) {
      if (rowSelection.mode === "single") {
        return (
          <BaseCellStyled size={size}>
            <RadioButton
              size={size}
              checked={selectedRow}
              onChange={handleClickSelection}
            />
          </BaseCellStyled>
        );
      } else {
        return (
          <BaseCellStyled size={size}>
            <Checkbox
              size={size}
              checked={selectedRow}
              onChange={handleClickSelection}
            />
          </BaseCellStyled>
        );
      }
    }
    return null;
  }, [rowSelection, selectedRow]);

  const handleRowClick = useCallback(() => {
    handleClickSelection(!selectedRow);
  }, [selectedRow]);

  const handleCellDoubleClick = (
    rowId: string | number,
    field: TFieldName<T>,
    editable?: boolean
  ) => {
    if (editable) {
      rowModel?.setEditableCells([{ rowId, field }]);
    }
  };

  return (
    <RowStyled selected={selectedRow} onClick={handleRowClick}>
      {Selection}
      {columns.map((col) => {
        const value = getValueObject(
          rowNode.data,
          col.field as TKeyObjectType<T>
        );
        return (
          <BaseCell
            rowNode={rowNode}
            key={`${String(col.field)}${value}`}
            column={col}
            rowIndex={rowIndex}
            size={size}
            value={value}
            onDoubleClick={() =>
              handleCellDoubleClick(
                rowNode.id,
                col.field as string,
                col.editable
              )
            }
            isEditing={
              !!rowModel?.getEditableCells({
                rowId: rowNode.id,
                field: col.field as string
              })
            }
          />
        );
      })}
    </RowStyled>
  );
}

export default Row;
