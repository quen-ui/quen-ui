import { useState, useRef, useMemo } from "react";
import { Button, Flex, Dropdown } from "@quen-ui/components";
import {
  IconArrowsSort,
  IconFilter,
  IconFilterFilled
} from "@tabler/icons-react";
import type { IColumnProps } from "./types";
import { ColumnHeaderStyled, ColumnStyled } from "./styles";
import { useDataGridContext } from "../DataGridContext";
import {
  ISortModel,
  IFilterModelItem,
  IColumnDef,
  IHeaderCell
} from "../../core";
import { FilterRenderer } from "../Filter";

function isHeaderCell<T>(
  col: IColumnDef<T> | IHeaderCell<T>
): col is IHeaderCell<T> {
  return "column" in col && col.column !== undefined;
}

function getColumnField<T>(col: IColumnDef<T> | IHeaderCell<T>): string {
  if (isHeaderCell(col)) {
    return String(col.column.field);
  }
  return String((col as IColumnDef<T>).field);
}

function getColumnDef<T>(col: IColumnDef<T> | IHeaderCell<T>): IColumnDef<T> {
  return isHeaderCell(col) ? col.column : (col as IColumnDef<T>);
}

function Column<T = any>({ column, size = "m" }: IColumnProps<T>) {
  const { icons, gridState } = useDataGridContext<T>();
  const [sortModel, setSortModel] = useState<ISortModel<T>>({
    field: getColumnField(column),
    sort: null
  });

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const filterAnchorRef = useRef<HTMLButtonElement>(null);

  const colDef = getColumnDef(column);
  const field = getColumnField(column);
  const currentFilter = gridState
    .getFilterModel()
    .find((f) => f.field === field);
  const hasActiveFilter = !!currentFilter;

  const columnProps = useMemo(
    () => ({
      colDef,
      field,
      isPinned: !!colDef.pinned,
      isSortable: !!colDef.sortable,
      isFilterable: !!colDef.filter,
      filterType:
        typeof colDef.filter === "string" ? colDef.filter : ("text" as const)
    }),
    [colDef, field]
  );

  const handleChangeSort = () => {
    if (!columnProps.isSortable) return;

    const _sortModel: ISortModel<T> = {
      ...sortModel,
      comparator: columnProps.colDef.sortComparator
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
      .filter((f) => f.field !== columnProps.field);
    gridState.setFilterModel(newFilter ? [...existing, newFilter] : existing);
  };

  const handleFilterClose = () => setIsFilterOpen(false);

  const pinnedStyles = gridState.getPinnedColumnStyles(columnProps.field, true);

  return (
    <ColumnStyled
      colSpan={(column as IHeaderCell<T>).colSpan || 1}
      rowSpan={(column as IHeaderCell<T>).rowSpan || 1}
      isLeaf={!(column as IHeaderCell<T>).isGroup}
      isGroup={(column as IHeaderCell<T>).isGroup || false}
      size={size}
      style={{
        ...columnProps.colDef.styles?.header,
        ...pinnedStyles,
        ...(columnProps.isPinned && {
          cursor: columnProps.colDef.lockPosition ? "not-allowed" : undefined,
          opacity: columnProps.colDef.lockPosition ? 0.9 : 1
        })
      }}
      className={columnProps.colDef.classNames?.header}>
      <Flex align="center" gap="xs" style={{ position: "relative" }}>
        <ColumnHeaderStyled size={size}>
          {(column as IHeaderCell<T>).headerName ||
            columnProps.colDef.headerName}
        </ColumnHeaderStyled>

        {columnProps.isSortable && (
          <Button
            size="s"
            view="icon"
            onClick={handleChangeSort}
            disabled={columnProps.colDef.lockPosition && columnProps.isPinned}>
            {icons?.sortable || <IconArrowsSort size={14} />}
          </Button>
        )}

        {columnProps.isFilterable && (
          <>
            <Button
              ref={filterAnchorRef}
              size="s"
              view="icon"
              onClick={() => setIsFilterOpen(true)}
              disabled={columnProps.colDef.lockPosition && columnProps.isPinned}
              style={{ color: hasActiveFilter ? "#3b82f6" : "inherit" }}>
              {hasActiveFilter ? (
                <IconFilterFilled size={14} />
              ) : (
                <IconFilter size={14} />
              )}
            </Button>

            <Dropdown
              open={isFilterOpen}
              anchorRef={filterAnchorRef}
              direction="bottom"
              width="240px"
              content={
                <FilterRenderer<T>
                  field={columnProps.field}
                  filterType={columnProps.filterType}
                  currentFilter={currentFilter || null}
                  onFilterChange={handleFilterChange}
                  close={handleFilterClose}
                  filterComponent={columnProps.colDef.filterComponent}
                  filterParams={columnProps.colDef.filterParams}
                />
              }
            />
          </>
        )}
      </Flex>
    </ColumnStyled>
  );
}

export default Column;
