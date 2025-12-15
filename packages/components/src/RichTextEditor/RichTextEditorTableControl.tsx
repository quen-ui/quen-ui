import { useState } from "react";
import { QuenUIProvider } from "@quen-ui/theme";
import type { IRichTextEditorTableSizePickerProps } from "./types";
import { TableSizePickerWrapper, TableSizePickerCellStyled } from "./styles";
import { Flex } from "../Flex";
import { Text } from "../typography/Text";
import { Dropdown } from "../Dropdown";

const RichTextEditorTableControl = ({
  onSelect,
  onClose,
  ref, theme
}: IRichTextEditorTableSizePickerProps) => {
  const [hovered, setHovered] = useState({ rows: 0, cols: 0 });
  const [gridSize, setGridSize] = useState({ rows: 10, cols: 10 });
  const [open, setOpen] = useState<boolean>(true);

  const handleHover = (r: number, c: number) => {
    if (r + 1 >= gridSize.rows) {
      setGridSize({ ...gridSize, rows: Math.min(gridSize.rows + 5, 10) });
    }
    if (c + 1 >= gridSize.cols) {
      setGridSize({ ...gridSize, cols: Math.min(gridSize.cols + 5, 10) });
    }
    setHovered({ rows: r + 1, cols: c + 1 });
  };

  const handleClick = () => {
    if (hovered.rows > 0 && hovered.cols > 0) {
      onSelect(hovered);
      onClose?.();
    }
    setOpen(false);
  };

  return (
    <QuenUIProvider theme={theme}>
      <Dropdown
        onClickClose={onClose}
        open={open}
        anchorRef={ref}
        content={
          <TableSizePickerWrapper>
            <Flex direction="column" gap={2}>
              {Array.from({ length: gridSize.rows }).map((_, r) => (
                <Flex gap={2} key={r}>
                  {Array.from({ length: gridSize.cols }).map((_, c) => {
                    const active = r < hovered.rows && c < hovered.cols;
                    return (
                      <TableSizePickerCellStyled
                        key={c}
                        active={active}
                        onMouseEnter={() => handleHover(r, c)}
                        onClick={handleClick}
                      />
                    );
                  })}
                </Flex>
              ))}
            </Flex>
            <Text size="xs">
              {hovered.rows} × {hovered.cols}
            </Text>
          </TableSizePickerWrapper>
        }
      />
    </QuenUIProvider>
  );
};

export default RichTextEditorTableControl;
