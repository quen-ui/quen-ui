import { useEffect, useMemo } from "react";
import { ClientSideRowModel, EGridStateEvents, GridState } from "../../core";
import type { IDataGridProps } from "./types";
import { DataGridContext } from "../DataGridContext";
import ColumnsRow from "../ColumnsRow";
import Rows from "../Rows";

function DataGrid<T = any>({
  columns,
  rowData,
  size = "m",
  icons,
  rowSelection,
  getRowId,
  onSelectionChange
}: IDataGridProps<T>) {
  const internalGridState = useMemo(() => {
    return new GridState(columns, rowData);
  }, []);
  const internalRowModel = useMemo(() => {
    return new ClientSideRowModel(internalGridState);
  }, []);

  useEffect(() => {
    internalGridState.setRowData(rowData);
  }, [rowData, internalGridState]);

  useEffect(() => {
    internalGridState.setColumnDefs(columns);
  }, [columns, internalGridState]);

  useEffect(() => {
    internalGridState.on(EGridStateEvents.selectionChanged, ({ ...args }) =>
      onSelectionChange?.({ ...args })
    );
  }, [onSelectionChange]);

  useEffect(() => {
    internalGridState.deselectAll();
  }, [rowSelection])

  return (
    <DataGridContext.Provider
      value={{
        gridState: internalGridState,
        rowModel: internalRowModel,
        icons,
        rowSelection
      }}>
      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <ColumnsRow size={size} />
        <Rows size={size} />
      </table>
    </DataGridContext.Provider>
  );
}

export default DataGrid;
