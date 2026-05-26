import { useEffect, useMemo, useState } from "react";
import { ClientSideRowModel, EGridStateEvents, GridState, IPaginationChangedEvent, type IRowNode } from "../../core";
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
  rowEditing = false,
  onRowEditStart,
  onRowEditSave,
  onRowEditCancel,
  showRowEditActions = true,
  startRowEditOnDoubleClick = false,
  serverSideTotalRows,
  onSortChange,
  onFilterChange,
}: IDataGridProps<T>) {
  const [processedRows, setPrecessedRows] = useState<T[]>([]);

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
      onEditCancel,
      onRowEditStart,
      onRowEditSave,
      onRowEditCancel
    });
  }, [
    internalGridState,
    onEditStart,
    onEditSave,
    onEditCancel,
    onRowEditStart,
    onRowEditSave,
    onRowEditCancel
  ]);

  useEffect(() => {
    internalGridState.setRowData(rowData);
  }, [rowData, internalGridState]);

  useEffect(() => {
    internalGridState.setColumnDefs(columns);
  }, [columns, internalGridState]);

  useEffect(() => {
    internalGridState.setServerSideTotalRows(serverSideTotalRows ?? 0);
  }, [serverSideTotalRows, internalGridState]);

  useEffect(() => {
    const handlerSelectionChange = ({ selectedNodes }: { selectedNodes: IRowNode<T>}) => {
      onSelectionChange?.({ selectedNodes });
    };
    internalGridState.on(EGridStateEvents.selectionChanged, handlerSelectionChange);

    return () => {
      internalGridState.off(EGridStateEvents.selectionChanged, handlerSelectionChange);
    }
  }, [onSelectionChange]);

  useEffect(() => {
    const handlerPaginationChanged = (args: IPaginationChangedEvent) => {
      onPaginationChanged?.(args);
    }
    internalGridState.on(
      EGridStateEvents.paginationChanged,
      handlerPaginationChanged
    );
    return () => {
      internalGridState.off(
        EGridStateEvents.paginationChanged,
        handlerPaginationChanged
      );
    };
  }, [onPaginationChanged]);

  useEffect(() => {
    internalGridState.deselectAll();
  }, [rowSelection]);

  useEffect(() => {
    if (mode !== "server") return;

    const sortHandler = (model: any) => onSortChange?.(model);
    const filterHandler = (model: any) => onFilterChange?.(model);

    internalGridState.on(EGridStateEvents.sortModelChanged, sortHandler);
    internalGridState.on(EGridStateEvents.filterModelChanged, filterHandler);

    return () => {
      internalGridState.off(EGridStateEvents.sortModelChanged, sortHandler);
      internalGridState.off(EGridStateEvents.filterModelChanged, filterHandler);
    };
  }, [mode, internalGridState, onSortChange, onFilterChange]);

  useEffect(() => {
    internalGridState.on(EGridStateEvents.rowsRefresh, setPrecessedRows);
    return () => {
      internalGridState.off(EGridStateEvents.rowsRefresh, setPrecessedRows)
    }
  }, [internalGridState]);

  const showEmpty = !loading && processedRows.length === 0;
  const colCount = columns.length + (rowSelection ? 1 : 0);

  return (
    <DataGridContext.Provider
      value={{
        gridState: internalGridState,
        rowModel: internalRowModel,
        icons,
        rowSelection,
        rowEditingEnabled: rowEditing,
        showRowEditActions,
        startRowEditOnDoubleClick
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
                  <td colSpan={colCount} style={{ width: "100%" }}>
                    <DataGridLoading
                      loadingComponent={loadingComponent}
                      size={size}
                    />
                  </td>
                </tr>
              ) : showEmpty ? (
                <tr>
                  <td colSpan={colCount} style={{ width: "100%" }}>
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
