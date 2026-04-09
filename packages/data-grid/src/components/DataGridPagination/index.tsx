import { useEffect, useState } from "react";
import { Pagination } from "@quen-ui/components";
import { useDataGridContext } from "../DataGridContext";
import { EGridStateEvents } from "../../core";
import type { IDataGridPaginationProps } from "./types";

const DataGridPagination = ({
  defaultPage,
  size
}: IDataGridPaginationProps) => {
  const { gridState } = useDataGridContext();
  const [total, setTotal] = useState(gridState.getRows().length);

  useEffect(() => {
    gridState.on(EGridStateEvents.rowsRefresh, () =>
      setTotal(gridState.getFiltersRows().length)
    );
  }, []);

  const handleChange = (page: number) => {
    gridState.paginationGoToPage(page);
  };

  return (
    <Pagination
      size={size}
      total={total}
      onChange={handleChange}
      defaultValue={defaultPage}
      pageSize={gridState.paginationGetPageSize()}
    />
  );
};

export default DataGridPagination;
