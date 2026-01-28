import { useEffect, useState, useMemo, createContext, useContext } from "react";
import { GridState, ClientSideRowModel, type IRowNode } from "../../core";
import type { IDataGridProps, IDataGridContext } from "./types";

const DataGridContext = createContext<IDataGridContext>({});

function DataGrid<T = any>({
  columns,
  rowData,
  gridState,
  rowModel
}: IDataGridProps<T>) {
  const [rows, setRows] = useState<IRowNode[]>([]);
  const [editingCell, setEditingCell] = useState<{
    rowId: string | number;
    field: string;
  } | null>(null);

  const internalGridState = useMemo(() => {
    return gridState || new GridState(columns, rowData);
  }, [gridState]);
  const internalRowModel = useMemo(() => {
    return rowModel || new ClientSideRowModel(internalGridState);
  }, [rowModel]);

  useEffect(() => {
    const handler = (processedRows: IRowNode<T>[]) => {
      setRows(processedRows);
    };
    internalGridState.on("gridRefresh", handler);
    internalRowModel.refresh();
    return () => {
      internalGridState.off("gridRefresh", handler);
    };
  }, [internalGridState, internalRowModel]);

  useEffect(() => {
    internalGridState.setRowData(rowData);
  }, [rowData, internalGridState]);

  useEffect(() => {
    internalGridState.setColumnDefs(columns);
  }, [columns, internalGridState]);

  const handleRowClick = (row: IRowNode<T>) => {
    const selected = internalGridState
      .getSelectedRows()
      .some((r) => r.id === row.id);
    if (selected) {
      internalGridState.deselectRow(row.id);
    } else {
      internalGridState.selectRow(row.id);
    }
  };

  const handleCellDoubleClick = (
    rowId: string | number,
    field: string,
    editable?: boolean
  ) => {
    if (editable) {
      setEditingCell({ rowId, field });
    }
  };

  const handleCellChange = (row: IRowNode<T>, field: string, value: any) => {
    (row.data as any)[field] = value;
    setEditingCell(null);
    internalGridState.refresh();
  };

  return (
    <table style={{ borderCollapse: "collapse", width: "100%" }}>
      <thead>
        <tr>
          {columns.map((col) => (
            <th
              key={String(col.field)}
              style={{ border: "1px solid #ccc", padding: "4px" }}>
              {col.headerName}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => {
          const isSelected = internalGridState
            .getSelectedRows()
            .some((r) => r.id === row.id);
          return (
            <tr
              key={row.id}
              onClick={() => handleRowClick(row)}
              style={{ background: isSelected ? "#e6f0ff" : undefined }}>
              {columns.map((col) => {
                const isEditing =
                  editingCell?.rowId === row.id &&
                  editingCell.field === String(col.field);
                const value = row.data[col.field];

                return (
                  <td
                    key={String(col.field)}
                    style={{ border: "1px solid #ccc", padding: "4px" }}
                    onDoubleClick={() =>
                      handleCellDoubleClick(
                        row.id,
                        String(col.field),
                        col.editable
                      )
                    }>
                    {isEditing ? (
                      <input
                        autoFocus
                        value={value as any}
                        onChange={(e) =>
                          handleCellChange(
                            row,
                            String(col.field),
                            e.target.value
                          )
                        }
                        onBlur={(e) =>
                          handleCellChange(
                            row,
                            String(col.field),
                            e.target.value
                          )
                        }
                      />
                    ) : col.cellRenderer ? (
                      col.cellRenderer({
                        value,
                        data: row.data,
                        rowIndex: row.id as number,
                        column: col
                      })
                    ) : (
                      (value as any)
                    )}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default DataGrid;
