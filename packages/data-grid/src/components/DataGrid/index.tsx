import { useEffect, useMemo } from "react";
import { ClientSideRowModel, EGridStateEvents, GridState } from "../../core";
import type { IDataGridProps } from "./types";
import { DataGridContext } from "../DataGridContext";
import ColumnsRow from "../ColumnsRow";
import Rows from "../Rows";
import DataGridPagination from "../DataGridPagination";
import { DataGridWrapper } from "./styles";
import { DataGridErrorBoundary } from "../ErrorBoundaries";
import { DataGridEmpty, DataGridLoading } from "../DataGridStates";

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
  onSelectionChange,
  loading = false,
  loadingComponent,
  noDataMessage,
  emptyComponent,
  errorFallback,
  onEditCancel,
  onEditSave,
  onEditStart,
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
    return new ClientSideRowModel(internalGridState, {
      onEditStart,
      onEditSave,
      onEditCancel
    });
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

  const processedRows = internalGridState.getRows();
  const showEmpty = !loading && processedRows.length === 0;
  const colCount = columns.length + (rowSelection ? 1 : 0);

  return (
    <DataGridContext.Provider
      value={{
        gridState: internalGridState,
        rowModel: internalRowModel,
        icons,
        rowSelection
      }}>
      <DataGridErrorBoundary fallback={errorFallback} level="grid">
        <DataGridWrapper direction="column" gap="m">
          <table
            style={{
              borderCollapse: "separate",
              borderSpacing: 0,
              width: "100%"
            }}>
            <ColumnsRow size={size} />
            <tbody>
              {loading ? (
                <tr>
                  <td
                    colSpan={colCount}
                    style={{ width: "100%" }}>
                    <DataGridLoading
                      loadingComponent={loadingComponent}
                      size={size}
                    />
                  </td>
                </tr>
              ) : showEmpty ? (
                <tr>
                  <td
                    colSpan={colCount}
                    style={{ width: "100%" }}>
                    <DataGridEmpty
                      emptyComponent={emptyComponent}
                      noDataMessage={noDataMessage}
                      size={size}
                    />
                  </td>
                </tr>
              ) : (
                <Rows size={size} />
              )}
            </tbody>
          </table>
          {pagination && (
            <DataGridPagination
              defaultPage={paginationDefaultPage}
              size={size}
            />
          )}
        </DataGridWrapper>
      </DataGridErrorBoundary>
    </DataGridContext.Provider>
  );
}

export default DataGrid;
