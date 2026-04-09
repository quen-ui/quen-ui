import { useEffect, useMemo } from "react";
import { ClientSideRowModel, EGridStateEvents, GridState } from "../../core";
import type { IDataGridProps } from "./types";
import { DataGridContext } from "../DataGridContext";
import ColumnsRow from "../ColumnsRow";
import Rows from "../Rows";
import DataGridPagination from "../DataGridPagination";
import { Flex } from "@quen-ui/components";

function DataGrid<T = any>({
  columns,
  rowData,
  size = "m",
  icons,
  mode = "client",
  rowSelection,
  getRowId,
  height,
  pagination,
  paginationPageSize = 10,
  paginationPageSizeSelector = [10, 20, 30],
  onPaginationChanged,
  paginationDefaultPage = 1,
  onSelectionChange
}: IDataGridProps<T>) {
  const internalGridState = useMemo(() => {
    return new GridState(columns, rowData, mode, {
      pagination,
      paginationPageSize,
      paginationPageSizeSelector,
      currentPage: paginationDefaultPage
    });
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
    internalGridState.on(EGridStateEvents.paginationChanged, (args) =>
      onPaginationChanged?.(args)
    );
  }, [onPaginationChanged]);

  useEffect(() => {
    internalGridState.deselectAll();
  }, [rowSelection]);

  return (
    <DataGridContext.Provider
      value={{
        gridState: internalGridState,
        rowModel: internalRowModel,
        icons,
        rowSelection
      }}>
      <Flex direction="column" gap="m">
        <table style={{ borderCollapse: "collapse", width: "100%" }}>
          <ColumnsRow size={size} />
          <Rows size={size} />
        </table>
        {pagination && (
          <DataGridPagination defaultPage={paginationDefaultPage} size={size} />
        )}
      </Flex>
    </DataGridContext.Provider>
  );
}

export default DataGrid;
