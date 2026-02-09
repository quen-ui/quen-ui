import { IColumnDef } from "../../core"

function SortColumn<T = any>({ field, headerName, sortable }: IColumnDef<T>) {
  return (
    <th
      key={String(field)}
      style={{border: "1px solid #ccc", padding: "4px"}}>
      {headerName}
    </th>
  )
}

export default SortColumn;
