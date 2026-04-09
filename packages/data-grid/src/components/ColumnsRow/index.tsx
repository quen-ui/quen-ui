import { useCallback, useEffect, useMemo, useState } from "react";
import { IColumnsRowProps } from "./types";
import { useDataGridContext } from "../DataGridContext";
import { Column } from "../columns";
import { ColumnStyled } from "../columns/styles";
import { ColumnsRowStyled } from "./styles";
import { EGridStateEvents, IColumnDef, IHeaderCell } from "../../core";
import { Checkbox } from "@quen-ui/components";

function ColumnsRow<TData>({ size = "m" }: IColumnsRowProps) {
  const { gridState, rowSelection } = useDataGridContext<TData>();
  const [columns, setColumns] = useState<IColumnDef<TData>[]>(
    gridState.getAllColumns()
  );

  const [headerMatrix, setHeaderMatrix] = useState<
    IHeaderCell<TData>[][]
  >(gridState.getHeaderMatrix());


  const [stateSelected, setStateSelected] = useState<
    "selectedAll" | "deselectedAll" | "intermediate"
  >("deselectedAll");

  useEffect(() => {
    const update = () => {
      setHeaderMatrix(gridState.getHeaderMatrix());
    };

    gridState.on(EGridStateEvents.rowsRefresh, update);

    return () => {
      gridState.off(EGridStateEvents.rowsRefresh, update);
    };
  }, [gridState]);

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
        return <ColumnStyled size={size} isGroup={false} isLeaf={false} />;
      } else {
        return (
          <ColumnStyled size={size} isGroup={false} isLeaf={false}>
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
      {headerMatrix.map((row, deth) => (
        <tr key={deth}>
          {row.map((cell) => (
            <Column size={size} key={String(cell.colId)} column={cell} />
          ))}
        </tr>
      ))}
      <tr>
        {Selection}
        {/*{columns.map((column) => (*/}
        {/*  <Column size={size} key={String(column.colId)} column={column} />*/}
        {/*))}*/}
      </tr>
    </ColumnsRowStyled>
  );
}

export default ColumnsRow;
