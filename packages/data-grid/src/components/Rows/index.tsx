import { useState, useEffect } from "react";
import { useDataGridContext } from "../DataGridContext";
import Row from "./Row";
import { type IRowsProps } from "./types";
import { type IRowNode, EGridStateEvents } from "../../core";

function Rows<TData>({ size }: IRowsProps) {
  const { gridState } = useDataGridContext<TData>();
  const [rows, setRows] = useState<IRowNode<TData>[]>(gridState.getRows() ?? []);

  useEffect(() => {
    gridState.on(EGridStateEvents.rowsRefresh, (rows) => {
      console.log(1,rows)
      setRows(rows);
    })
  }, []);

  return (
    <tbody>
      {rows.map((row, index) => (
        <Row
          key={row.id}
          size={size}
          rowNode={row}
          columns={gridState.getAllColumns()}
          rowIndex={index}
        />
      ))}
    </tbody>
  );
}

export default Rows;
