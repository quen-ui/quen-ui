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
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const update = () => setTotal(gridState.paginationGetRowCount());
    gridState.on(EGridStateEvents.paginationChanged, update);
    update();
    return () => gridState.off(EGridStateEvents.paginationChanged, update);
  }, [gridState]);


  const handleChange = (page: number) => {
    gridState.paginationGoToPage(page);
  };

  if (total === 0) return null;

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
