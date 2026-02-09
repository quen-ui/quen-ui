import { useCallback, useEffect, useMemo, useState } from "react";
import { IColumnsRowProps } from "./types";
import { useDataGridContext } from "../DataGridContext";
import { Column } from "../columns";
import { ColumnStyled } from "../columns/styles";
import { ColumnsRowStyled } from "./styles";
import { EGridStateEvents, IColumnDef } from "../../core";
import { Checkbox } from "@quen-ui/components";

function ColumnsRow<TData>({ size = "m" }: IColumnsRowProps) {
  const { gridState, rowSelection } = useDataGridContext<TData>();
  const [columns, setColumns] = useState<IColumnDef<TData>[]>(
    gridState.getAllColumns()
  );
  const [stateSelected, setStateSelected] = useState<
    "selectedAll" | "deselectedAll" | "intermediate"
  >("deselectedAll");

  useEffect(() => {
    gridState.on(EGridStateEvents.selectionChanged, ({ selectedNodes }) => {
      if (selectedNodes.length === gridState.getRows().length) {
        setStateSelected("selectedAll");
      } else if (selectedNodes.length) {
        setStateSelected("intermediate");
      } else {
        setStateSelected("deselectedAll");
      }
    });
  }, []);

  const handleChangeAllSelection = useCallback((isSelected: boolean) => {
    if (rowSelection?.mode === "multi") {
      if (isSelected) {
        gridState.selectAll(rowSelection.selectAll);
        setStateSelected("selectedAll");
      } else {
        gridState.deselectAll(rowSelection.selectAll);
        setStateSelected("deselectedAll");
      }
    }
  }, []);

  const Selection = useMemo(() => {
    if (rowSelection) {
      if (rowSelection.mode === "single") {
        return <ColumnStyled size={size} />;
      } else {
        return (
          <ColumnStyled size={size}>
            {(rowSelection.headerCheckbox ?? true) && (
              <Checkbox
                size={size}
                onChange={handleChangeAllSelection}
                checked={stateSelected === "selectedAll"}
                intermediate={stateSelected === "intermediate"}
              />
            )}
          </ColumnStyled>
        );
      }
    }
    return null;
  }, [rowSelection, handleChangeAllSelection, stateSelected]);

  useEffect(() => {
    gridState.on(EGridStateEvents.columnsRefresh, (cols) => setColumns(cols));
  }, []);

  return (
    <ColumnsRowStyled>
      <tr>
        {Selection}
        {columns.map((column) => (
          <Column size={size} key={String(column.colId)} column={column} />
        ))}
      </tr>
    </ColumnsRowStyled>
  );
}

export default ColumnsRow;
