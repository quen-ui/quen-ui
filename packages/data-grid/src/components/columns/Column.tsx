import { useState } from "react";
import { Button, Flex } from "@quen-ui/components";
import { IconArrowsSort } from "@tabler/icons-react";
import type { IColumnProps } from "./types";
import { ColumnHeaderStyled, ColumnStyled } from "./styles";
import { useDataGridContext } from "../DataGridContext";
import { ISortModel } from "../../core";

function Column<T = any>({ column, size = "m" }: IColumnProps<T>) {
  const { icons, gridState } = useDataGridContext<T>();
  const [sortModel, setSortModel] = useState<ISortModel<T>>({
    field: column.field,
    sort: null
  });

  const handleChangeSort = () => {
    let _sortModel: ISortModel<T> = { ...sortModel, comparator: column.sortComparator };
    if (sortModel.sort === null) {
      _sortModel = {
        field: column.field,
        sort: "asc"
      };
    } else if (sortModel.sort === "asc") {
      _sortModel = {
        field: column.field,
        sort: "desc"
      };
    } else if (sortModel.sort === "desc") {
      _sortModel = { field: column.field, sort: null };
    }
    setSortModel(_sortModel);
    gridState.setSortModel([{ ..._sortModel }]);
  };

  return (
    <ColumnStyled
      size={size}
      style={column.styles?.header}
      className={column.classNames?.header}>
      <Flex align="center" gap="xs">
        <ColumnHeaderStyled size={size}>{column.headerName}</ColumnHeaderStyled>
        {column.sortable && (
          <Button size={size} view="icon" onClick={handleChangeSort}>
            {icons?.sortable || <IconArrowsSort />}
          </Button>
        )}
      </Flex>
    </ColumnStyled>
  );
}

export default Column;
