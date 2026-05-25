import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type CSSProperties
} from "react";
import { IColumnsRowProps } from "./types";
import { useDataGridContext } from "../DataGridContext";
import { Column } from "../columns";
import { ColumnStyled } from "../columns/styles";
import { ColumnsRowStyled } from "./styles";
import { EGridStateEvents, IHeaderCell } from "../../core";
import { Checkbox } from "@quen-ui/components";

function ColumnsRow<TData>({ size = "m" }: IColumnsRowProps) {
  const { gridState, rowSelection, showRowEditActions, rowEditingEnabled } = useDataGridContext<TData>();

  const [headerMatrix, setHeaderMatrix] = useState<
    IHeaderCell<TData>[][]
  >(gridState.getHeaderMatrix());


  const [stateSelected, setStateSelected] = useState<
    "selectedAll" | "deselectedAll" | "intermediate"
  >("deselectedAll");

  useEffect(() => {
    const update = () => {
      setHeaderMatrix(gridState.getHeaderMatrix());
    };

    gridState.on(EGridStateEvents.rowsRefresh, update);

    return () => {
      gridState.off(EGridStateEvents.rowsRefresh, update);
    };
  }, [gridState]);

  useEffect(() => {
    gridState.on(EGridStateEvents.selectionChanged, ({ selectedNodes }) => {
      if (selectedNodes.length === gridState.getRows().length) {
        setStateSelected("selectedAll");
      } else if (selectedNodes.length) {
        setStateSelected("intermediate");
      } else {
        setStateSelected("deselectedAll");
      }
    });
  }, []);

  const handleChangeAllSelection = useCallback((isSelected: boolean) => {
    if (rowSelection?.mode === "multi") {
      if (isSelected) {
        gridState.selectAll(rowSelection.selectAll);
        setStateSelected("selectedAll");
      } else {
        gridState.deselectAll(rowSelection.selectAll);
        setStateSelected("deselectedAll");
      }
    }
  }, []);

  const Selection = useMemo(() => {
    if (rowSelection) {
      const selectionPinnedStyles = rowSelection.pinned
        ? gridState.getPinnedColumnStyles("__selection__", true)
        : {};

      if (rowSelection.mode === "single") {
        return (
          <ColumnStyled
            size={size}
            isGroup={false}
            isLeaf={false}
            style={selectionPinnedStyles}
          />
        );
      } else {
        return (
          <ColumnStyled
            size={size}
            isGroup={false}
            isLeaf={false}
            style={selectionPinnedStyles}>
            {(rowSelection.headerCheckbox ?? true) && (
              <Checkbox
                size={size}
                onChange={handleChangeAllSelection}
                checked={stateSelected === "selectedAll"}
                intermediate={stateSelected === "intermediate"}
              />
            )}
          </ColumnStyled>
        );
      }
    }
    return null;
  }, [rowSelection, handleChangeAllSelection, stateSelected]);

  const theadStyles: CSSProperties = {
    position: "sticky",
    top: 0,
    zIndex: 40,
    background: "inherit"
  };

  return (
    <ColumnsRowStyled style={theadStyles}>
      {headerMatrix.map((row, deth) => (
        <tr key={deth}>
          {row.map((cell) => (
            <Column size={size} key={String(cell.colId)} column={cell} />
          ))}
          {showRowEditActions && rowEditingEnabled && (
            <ColumnStyled
              size={size}
              isGroup={false}
              isLeaf={false}
              style={{
                minWidth: 100,
                textAlign: "center",
              }}>
              Actions
            </ColumnStyled>
          )}
        </tr>
      ))}
      <tr>{Selection}</tr>
    </ColumnsRowStyled>
  );
}

export default ColumnsRow;
