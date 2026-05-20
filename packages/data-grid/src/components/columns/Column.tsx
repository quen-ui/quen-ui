import { useState } from "react";
import { Button, Flex } from "@quen-ui/components";
import {
  IconArrowsSort,
  IconFilter,
  IconFilterFilled
} from "@tabler/icons-react";
import type { IColumnProps } from "./types";
import { ColumnHeaderStyled, ColumnStyled } from "./styles";
import { useDataGridContext } from "../DataGridContext";
import { ISortModel, IFilterModelItem } from "../../core";
import { FilterRenderer } from "../Filter";

function Column<T = any>({ column, size = "m" }: IColumnProps<T>) {
  const { icons, gridState } = useDataGridContext<T>();
  const [sortModel, setSortModel] = useState<ISortModel<T>>({
    field: column.column.field as string,
    sort: null
  });

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const currentFilter = gridState
    .getFilterModel()
    .find((f) => f.field === column.column.field);
  const hasActiveFilter = !!currentFilter;

  const handleChangeSort = () => {
    let _sortModel: ISortModel<T> = {
      ...sortModel,
      comparator: column.column.sortComparator
    };
    if (sortModel.sort === null) _sortModel.sort = "asc";
    else if (sortModel.sort === "asc") _sortModel.sort = "desc";
    else _sortModel.sort = null;

    setSortModel(_sortModel);
    gridState.setSortModel([{ ..._sortModel }]);
  };

  const handleFilterChange = (newFilter: IFilterModelItem<T> | null) => {
    const existing = gridState
      .getFilterModel()
      .filter((f) => f.field !== column.column.field);
    gridState.setFilterModel(newFilter ? [...existing, newFilter] : existing);
    if (!newFilter) setIsFilterOpen(false);
  };

  return (
    <ColumnStyled
      colSpan={column.colSpan}
      rowSpan={column.rowSpan}
      isLeaf={!column.isGroup}
      isGroup={column.isGroup}
      size={size}
      style={column.column.styles?.header}
      className={column.column.classNames?.header}>
      <Flex align="center" gap="xs" style={{ position: "relative" }}>
        <ColumnHeaderStyled size={size}>{column.headerName}</ColumnHeaderStyled>

        {column.column.sortable && (
          <Button size="s" view="icon" onClick={handleChangeSort}>
            {icons?.sortable || <IconArrowsSort size={14} />}
          </Button>
        )}

        {column.column.filter && (
          <div style={{ position: "relative" }}>
            <Button
              size="s"
              view="icon"
              onClick={() => setIsFilterOpen((p) => !p)}
              style={{ color: hasActiveFilter ? "#3b82f6" : "inherit" }}>
              {hasActiveFilter ? (
                <IconFilterFilled size={14} />
              ) : (
                <IconFilter size={14} />
              )}
            </Button>

            <FilterRenderer<T>
              isOpen={isFilterOpen}
              onClose={() => setIsFilterOpen(false)}
              field={String(column.column.field)}
              filterType={
                typeof column.column.filter === "string"
                  ? column.column.filter
                  : "text"
              }
              currentFilter={currentFilter || null}
              onFilterChange={handleFilterChange}
              filterComponent={column.column.filterComponent}
              filterParams={column.column.filterParams}
            />
          </div>
        )}
      </Flex>
    </ColumnStyled>
  );
}

export default Column;
